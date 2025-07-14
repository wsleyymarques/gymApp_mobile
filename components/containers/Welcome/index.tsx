// screens/Welcome.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../shared/Theme';
import { ContainerGlass } from '../../shared/Components/Glass/ContainerGlass';
import { LoginCard } from '../Auth/Login';
import { WelcomeCard } from './WelcomeCard';
import { SingUpCard } from '../Auth/SingUp';

const { height } = Dimensions.get('window');

const Welcome = () => {
  const theme = useTheme();
  const [currentCard, setCurrentCard] = useState<'welcome' | 'login' | 'signup'>('welcome');
  const [cardHeight, setCardHeight] = useState(0);

  const scaleAnim = useState(new Animated.Value(1))[0];
  const translateYAnim = useState(new Animated.Value(0))[0];

  // Medir a altura do conteúdo quando ele muda
  const onContentLayout = (event: any) => {
    const { height: newHeight } = event.nativeEvent.layout;
    if (newHeight > 0 && newHeight !== cardHeight) {
      setCardHeight(newHeight);
    }
  };

  const handleCardChange = (card: 'welcome' | 'login' | 'signup') => {
    // Animação de saída (levanta e encolhe levemente)
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: -10,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      })
    ]).start(() => {
      setCurrentCard(card);
      // Animação de entrada (volta ao tamanho normal)
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          easing: Easing.elastic(0.8),
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 200,
          easing: Easing.elastic(0.8),
          useNativeDriver: true,
        })
      ]).start();
    });
  };

  const renderCard = () => {
    switch (currentCard) {
      case 'login':
        return <LoginCard onGoToSignUp={() => handleCardChange('signup')} onBack={() => handleCardChange('welcome')} />;
      case 'signup':
        return <SingUpCard onGoToLogin={() => handleCardChange('login')} onBack={() => handleCardChange('welcome')} />;
      case 'welcome':
      default:
        return (
          <WelcomeCard
            onLogin={() => handleCardChange('login')}
            onSignUp={() => handleCardChange('signup')}
          />
        );
    }
  };

  return (
    <LinearGradient
      colors={[theme.colors.primary, theme.colors.background]}
      className={'justify-center items-center'}
      style={styles.container}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View className={'px-4 w-full'}>
        <ContainerGlass>
          <Animated.View
            onLayout={onContentLayout}
            style={{
              transform: [
                { scale: scaleAnim },
                { translateY: translateYAnim }
              ],
              minHeight: 300,
            }}
          >
            {renderCard()}
          </Animated.View>
        </ContainerGlass>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;