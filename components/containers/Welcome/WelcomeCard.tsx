// screens/components/WelcomeCard.tsx
import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../shared/Ui/Typograph';
import { CustomButton } from '../../shared/Ui/Buttons';
import { useTheme } from '../../shared/Theme';

interface WelcomeCardProps {
  onLogin: () => void;
  onSignUp: () => void;
}

export const WelcomeCard = ({ onLogin, onSignUp }: WelcomeCardProps) => {
  const theme = useTheme()
  return (
    <>
      <Typography
        style={{
          fontSize: theme.fonts.displayMedium.fontSize,
          color: 'white',
          fontWeight: 'bold'
        }}
      >
        Bem vindo, Monstro!
      </Typography>

      <Typography
        style={{
          color: 'rgba(255,255,255,0.9)',
          marginBottom: 24,
          lineHeight: 22
        }}
      >
        Acompanhe seus treinos, monitore seu progresso e alcance seus objetivos fitness com nossa comunidade de monstros da academia!
      </Typography>

      <View style={{ width: '100%' }}>
        <CustomButton
          title="INICIAR SESSÃO"
          variant="primary"
          onPress={onLogin}
        />

        <CustomButton
          title="CRIAR CONTA"
          variant="inline"
          onPress={onSignUp}
        />
      </View>

      <Typography
        style={{
          color: theme.colors.textReverse,
          textAlign: 'center',
          marginTop: 16,
          fontSize: 12
        }}
      >
        Junte-se a +500k monstros transformando seus corpos
      </Typography>
    </>
  );
};