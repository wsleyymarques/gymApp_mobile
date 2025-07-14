// screens/components/LoginCard.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Typography } from '../../../shared/Ui/Typograph';
import { CustomButton } from '../../../shared/Ui/Buttons';
import { useTheme } from '../../../shared/Theme';
import CustomInput from '../../../shared/Ui/Input';
import HugeIcons from '../../../shared/Ui/Icon';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { login, loginWithGoogle } from '../../../shared/Store/authSlice';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AppDispatch } from '../../../shared/Store';

interface LoginCardProps {
  onBack: () => void;
  onGoToSignUp: () => void;
}

export const LoginCard = ({ onBack, onGoToSignUp }: LoginCardProps) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      const { idToken } = await GoogleSignin.getTokens();

      if (!idToken) throw new Error('Token do Google não encontrado');

      const response = await dispatch(loginWithGoogle(idToken)).unwrap();

      if (response.user) {
        navigation.navigate('Home');
      }
    } catch (err) {
      console.error('Erro ao logar com Google', err);
    }
  };


  const handleLogin = async () => {
    try {
      const response = await dispatch(login({ email, password })).unwrap();
      if (response.user) {
        navigation.navigate('Home');
      }
    } catch (err) {
      console.error('Erro ao logar:', err);
    }
  };

  return (
    <>
      <Typography
        style={{
          fontSize: theme.fonts.displayMedium.fontSize,
          color: 'white',
          marginBottom: 16,
          fontWeight: 'bold'
        }}
      >
        Login
      </Typography>

      <CustomButton
        title="CONTINUAR COM GOOGLE"
        variant="glass"
        onPress={handleGoogleLogin}
        style={{ marginBottom: 16 }}
        childrenBefore={
          <HugeIcons name="GoogleIcon" size={20} color='white'/>
        }
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 16,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.divider }} />
        <Typography
          style={{
            marginHorizontal: 8,
            fontSize: 12,
            color: theme.colors.textReverse,
          }}
        >
          OU
        </Typography>
        <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.divider }} />
      </View>

      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={{ width: '100%' }}>
        <CustomButton
          title="ENTRAR"
          variant="primary"
          onPress={handleLogin}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
          <Typography style={{ color: theme.colors.textReverse }}>
            Não tem uma conta?{' '}
          </Typography>
          <Typography
            style={{ color: theme.colors.primary, fontWeight: 'bold' }}
            onPress={onGoToSignUp}
          >
            Registre-se
          </Typography>
        </View>


      </View>
    </>
  );
};