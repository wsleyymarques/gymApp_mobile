import { Text, TextProps } from 'react-native'
import { fontConfig } from '../../Theme/fontConfig';
import React from 'react';

interface TypographyProps extends TextProps {
  variant?:
    | 'displayLarge' | 'displayMedium' | 'displaySmall'
    | 'headlineLarge' | 'headlineMedium' | 'headlineSmall'
    | 'titleLarge' | 'titleMedium' | 'titleSmall'
    | 'labelLarge' | 'labelMedium' | 'labelSmall'
    | 'bodyLarge' | 'bodyMedium' | 'bodySmall'
  children?: React.ReactNode
}

export const Typography = ({ variant, children, style, ...props }: TypographyProps) => {
  const styles = fontConfig[variant||'labelLarge']

  return (
    <Text style={[styles, style]} {...props}>
      {children}
    </Text>
  )
}