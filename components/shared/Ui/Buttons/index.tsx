// components/shared/Ui/Button.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '../../Theme';
import { Typography } from '../Typograph';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'inline' | 'glass';
  fullWidth?: boolean;
  style?: object;
  textStyle?: object;
  childrenBefore?: React.ReactNode;
  childrenAfter?: React.ReactNode;
};

export const CustomButton = ({
                               title,
                               onPress,
                               variant = 'primary',
                               fullWidth = true,
                               style,
                               textStyle,
                               childrenBefore,
                               childrenAfter,
                             }: ButtonProps) => {
  const theme = useTheme();

  const getButtonStyle = () => {
    switch (variant) {
      case 'inline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.onPrimary,
        };
      case 'glass':
        return {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
        };
      case 'primary':
      default:
        return {
          backgroundColor: theme.colors.onPrimary,
        };
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'inline':
        return { color: 'white' };
      case 'glass':
        return { color: 'white' };
      case 'primary':
      default:
        return { color: theme.colors.primary };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        getButtonStyle(),
        fullWidth && styles.fullWidth,
        variant === 'glass' && styles.glassEffect,
        style,
      ]}
      activeOpacity={0.8}
    >
      <View style={styles.contentContainer}>
        {childrenBefore && (
          <View style={styles.childrenContainer}>
            {childrenBefore}
          </View>
        )}
        <Typography
          style={[
            styles.buttonText,
            getTextStyle(),
            textStyle,
          ]}
        >
          {title}
        </Typography>
        {childrenAfter && (
          <View style={styles.childrenContainer}>
            {childrenAfter}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childrenContainer: {
    marginHorizontal: 8,
  },
  glassEffect: {
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
});