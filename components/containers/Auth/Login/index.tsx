// screens/components/LoginCard.tsx
import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../shared/Ui/Typograph';
import { CustomButton } from '../../../shared/Ui/Buttons';
import { useTheme } from '../../../shared/Theme';
import CustomInput from '../../../shared/Ui/Input';
import HugeIcons from '../../../shared/Ui/Icon';

interface LoginCardProps {
  onBack: () => void;
  onGoToSignUp: () => void;
}

export const LoginCard = ({ onBack, onGoToSignUp }: LoginCardProps) => {
  const theme = useTheme();

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
        onPress={() => console.log('Login with Google')}
        style={{ marginBottom: 16 }}
        childrenBefore={
          <HugeIcons name="GoogleIcon" size={20} color='white'/> // Substitua pelo seu ícone
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

      <CustomInput placeholder={'Email'} />
      <CustomInput placeholder="Senha" secureTextEntry />

      <View style={{ width: '100%' }}>
        <CustomButton
          title="ENTRAR"
          variant="primary"
          onPress={() => console.log('Login')}
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

        {/*<CustomButton*/}
        {/*  title="VOLTAR"*/}
        {/*  variant="inline"*/}
        {/*  onPress={onBack}*/}
        {/*/>*/}
      </View>
    </>
  );
};