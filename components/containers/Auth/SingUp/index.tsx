// screens/components/SingUpCard.tsx
import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../shared/Ui/Typograph';
import { CustomButton } from '../../../shared/Ui/Buttons';
import { useTheme } from '../../../shared/Theme';
import CustomInput from '../../../shared/Ui/Input';
import HugeIcons from '../../../shared/Ui/Icon';

interface SingUpCardProps {
  onBack: () => void;
  onGoToLogin: () => void;
}

export const SingUpCard = ({ onBack, onGoToLogin }: SingUpCardProps) => {
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
        Criar Conta
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

      <CustomInput placeholder="Nome completo" />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Senha" secureTextEntry />

      <View style={{ width: '100%' }}>
        <CustomButton
          title="REGISTRAR"
          variant="primary"
          onPress={() => console.log('Register')}
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