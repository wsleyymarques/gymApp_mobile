// components/shared/ContainerGlass.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../Theme';

interface ContainerGlassProps {
  children: React.ReactNode;
}

export const ContainerGlass = ({ children }: ContainerGlassProps) => {
  const theme = useTheme();

  return (
    <View
      className={'border p-6 rounded-xl'}
      style={{
        backgroundColor: theme.colors.glassBackground,
        borderColor: theme.colors.glassBorder,
        width: '100%',
      }}
    >
      {children}
    </View>
  );
};