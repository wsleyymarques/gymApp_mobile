import React, { useState } from 'react';
import { View } from 'react-native';
import { Typography } from '../../../shared/Ui/Typograph';
import { CustomButton } from '../../../shared/Ui/Buttons';
import { useTheme } from '../../../shared/Theme';
import CustomInput from '../../../shared/Ui/Input';
import HugeIcons from '../../../shared/Ui/Icon';
import { useDispatch } from 'react-redux';
import { register, registerWithGoogle } from '../../../shared/Store/authSlice';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AppDispatch } from 'components/shared/Store';

interface SignUpCardProps {
  onBack: () => void;
  onGoToLogin: () => void;
}

export const SingUpCard = ({ onBack, onGoToLogin }: SignUpCardProps) => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await dispatch(register({ name, email, password })).unwrap();
      if (response.user) {
        navigation.navigate('Home');
      }
    } catch (err) {
      console.error('Erro ao registrar:', err);
    }
  };

  const handleRegisterWithGoogle = async () => {
    try {
      const userInfo = await GoogleSignin.signIn();
      const { idToken } = await GoogleSignin.getTokens();

      if (!idToken) throw new Error('Token do Google não encontrado');

      const response = await dispatch(registerWithGoogle(idToken)).unwrap();
      if (response.user) {
        navigation.navigate('Home');
      }
    } catch (err) {
      console.error('Erro ao registrar com Google:', err);
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
        Criar Conta
      </Typography>

      <CustomButton
        title="CONTINUAR COM GOOGLE"
        variant="glass"
        onPress={handleRegisterWithGoogle}
        style={{ marginBottom: 16 }}
        childrenBefore={
          <HugeIcons name="GoogleIcon" size={20} color='white' />
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

      <CustomInput placeholder="Nome completo" value={name} onChangeText={setName} />
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
      <CustomInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />

      <View style={{ width: '100%' }}>
        <CustomButton
          title="REGISTRAR"
          variant="primary"
          onPress={handleRegister}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
          <Typography style={{ color: theme.colors.textReverse }}>
            Já tem uma conta?{' '}
          </Typography>
          <Typography
            style={{ color: theme.colors.primary, fontWeight: 'bold' }}
            onPress={onGoToLogin}
          >
            Faça login
          </Typography>
        </View>
      </View>
    </>
  );
};