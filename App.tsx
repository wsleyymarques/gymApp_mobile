import './global.css';
import Aplication from './components/shared/Navigation';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { ThemeProvider } from './components/shared/Theme';
import { Provider, useDispatch } from 'react-redux';
import { store } from './components/shared/Store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import { loadSession } from 'components/shared/Store/authSlice';

export default function App() {

  GoogleSignin.configure({
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_KEY_IOS, // ou coloque diretamente o string
  });

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  })

  return (
    <Provider store={store}>
      <ThemeProvider>
        <StartupLoader/>
      </ThemeProvider>
    </Provider>
  )
}

const StartupLoader = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadSession())
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return null; // ou um splash/loading spinner
  }

  return <Aplication />;
};