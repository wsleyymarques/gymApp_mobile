import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { fontConfig } from './fontConfig'

export interface AppTheme extends NavigationTheme {
  colors: NavigationTheme['colors'] & {
    primaryAlt?: string
    onPrimary?: string
    background?: string
    secondary?: string
    surface?: string
    onSurface?: string
    secondaryAlt?: string
    primaryContainer?: string
    accent?: string
    onAccent?: string
    text?: string
    textReverse?: string
    divider?: string
    textSecondary?: string
    disabled?: string
    placeholder?: string
    cancel: string
    error: string
    notification: string
    success: string
    warning: string
    border: string
    errorText: string
    graycaption: string
    glassBackground?: string
    glassBorder?: string
  }
  elevation: {
    none: number
    low: number
    medium: number
    high: number
  }
  fonts: any
}

const darkTheme: AppTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: '#8b00f8',
    primaryAlt: '#3700b3',
    onPrimary: '#000000',

    secondary: '#03dac6',
    secondaryAlt: '#03dac6',

    accent: '#6200ee',
    onAccent: '#ffffff',

    background: '#121212',
    surface: '#1f1f1f',
    onSurface: '#ffffff',

    text: '#ffffff',
    textReverse: '#000000',
    textSecondary: '#BDBDBD',
    disabled: '#333333',

    placeholder: '#666666',
    border: '#424242',
    divider: '#2c2c2c',

    cancel: '#b70202',
    errorText: '#e42929',
    error: '#CF6679',

    notification: '#ff80ab',
    success: '#8BC34A',
    warning: '#ff9800',

    primaryContainer: '#4d0099',
    graycaption: '#9a9a9a',

    glassBackground: 'rgba(230,230,230,0.1)',
    glassBorder: 'rgba(255,255,255,0.3)',
  },
  elevation: {
    none: 0,
    low: 1,
    medium: 5,
    high: 10,
  },
  fonts: fontConfig,
}

const lightTheme: AppTheme = {
  ...NavigationLightTheme,
  colors: {
    ...NavigationLightTheme.colors,
    primary: '#6200b1',
    primaryAlt: '#3700b3',
    onPrimary: '#ffffff',

    secondary: '#03dac6',
    secondaryAlt: '#018786',

    accent: '#bb86fc',
    onAccent: '#000000',

    background: '#ffffff',
    surface: '#f6f6f6',
    onSurface: '#1c1b1f',

    text: '#1d1d1d',
    textReverse: '#ffffff',
    textSecondary: '#666666',
    disabled: '#cccccc',

    placeholder: '#999999',
    border: '#e0e0e0',
    divider: '#e0e0e0',

    cancel: '#D32F2F',
    error: '#b00020',
    errorText: '#ffffff',

    success: '#4CAF50',
    warning: '#FFA000',

    primaryContainer: '#eaddff',
    graycaption: '#757575',

    glassBackground: 'rgba(202,202,202,0.1)',
    glassBorder: 'rgba(255,255,255,0.3)',
  },
  elevation: {
    none: 0,
    low: 1,
    medium: 5,
    high: 10,
  },
  fonts: fontConfig,
}

export const ThemeContext = createContext<{
  theme: AppTheme
  toggleTheme: () => void
}>({
  theme: lightTheme,
  toggleTheme: () => {},
})

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                         children,
                                                                       }) => {
  const systemTheme = useColorScheme()
  const [theme, setTheme] = useState<AppTheme>(
    systemTheme === 'dark' ? darkTheme : lightTheme,
  )

  useEffect(() => {
    setTheme(systemTheme === 'dark' ? darkTheme : lightTheme)
  }, [systemTheme])

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.colors.background === darkTheme.colors.background
        ? lightTheme
        : darkTheme,
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): AppTheme => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme deve ser usado dentro do ThemeProvider')
  }
  return context.theme
}
