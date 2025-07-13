// shared/Ui/InputPadrao.tsx
import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Animated, Easing } from 'react-native';
import { Typography } from '../Typograph';
import { useTheme } from '../../Theme';

interface InputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const CustomInput: React.FC<InputProps> = ({
                                                          placeholder,
                                                          secureTextEntry = false,
                                                          value,
                                                          onChangeText,
                                                        }) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const borderWidth = useState(new Animated.Value(1))[0];

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(borderWidth, {
      toValue: 2,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(borderWidth, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            borderBottomWidth: borderWidth,
            borderBottomColor: isFocused ? theme.colors.primary : theme.colors.border,
          },
        ]}
      >
        <TextInput
          style={[
            styles.input,
            {
              color: isFocused ?  theme.colors.primary : theme.colors.textReverse,
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={isFocused ?  theme.colors.primary : theme.colors.textReverse}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 0,
  },
});

export default CustomInput