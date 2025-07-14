import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginResponse, User } from '../Types/user-type';
import { UserService } from '../Services/Auth/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from './index';


interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const response: LoginResponse = await UserService.login(email, password);
      await AsyncStorage.setItem('token', response.token!);
      await AsyncStorage.setItem('user', JSON.stringify(response.user));
      UserService.setAuthToken(response.token!);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || 'Erro ao logar');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }: { name: string; email: string; password: string }, thunkAPI) => {
    try {
      const user = await UserService.create(name, email, password);
      return { user };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || 'Erro ao registrar');
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (token: string, thunkAPI) => {
    try {
      const response: LoginResponse = await UserService.loginWithGoogle(token);
      if (response.token) {
        await AsyncStorage.setItem('token', response.token!);
        await AsyncStorage.setItem('user', JSON.stringify(response.user));

        UserService.setAuthToken(response.token);
      }
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || 'Erro ao logar com Google');
    }
  }
);

export const registerWithGoogle = createAsyncThunk(
  'auth/registerWithGoogle',
  async (token: string, thunkAPI) => {
    try {
      const user = await UserService.createWithGoogle(token);
      return { user };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.error || 'Erro ao registrar com Google');
    }
  }
);

export const loadSession = createAsyncThunk('auth/loadSession', async (_, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const userRaw = await AsyncStorage.getItem('user');

    if (token && userRaw) {
      const user = JSON.parse(userRaw);
      UserService.setAuthToken(token);
      return { user, token };
    } else {
      return thunkAPI.rejectWithValue('No session found');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue('Erro ao carregar sessão');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null;
      UserService.removeAuthToken();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadSession.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token || null;
    });
    builder.addCase(login.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = null;
    });
    builder.addCase(register.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(loginWithGoogle.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token || null;
    });
    builder.addCase(loginWithGoogle.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(registerWithGoogle.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = null;
    });
    builder.addCase(registerWithGoogle.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const selectIsAuthenticated = (state: RootState) =>
  !!state.auth.user && !!state.auth.token;
export const { logout } = authSlice.actions;
export default authSlice.reducer;