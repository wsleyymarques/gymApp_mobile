import React from 'react'
import { TouchableOpacity } from 'react-native'
import * as Icons from './Icons'
import { useTheme } from '../../Theme';

interface HugeIconsProps {
  name: keyof typeof Icons
  size?: number
  color?: string
  onPress?: () => void
  disabled?: boolean
}

const HugeIcons: React.FC<HugeIconsProps> = ({
  name,
  size = 24,
  color,
  onPress,
  disabled = false,
}) => {
  const theme = useTheme()
  const IconComponent = Icons[name]

  if (!IconComponent) {
    console.warn(`Ícone "${name}" não encontrado.`)
    return null
  }

  const iconColor = color || 'grey'
  const iconOpacity = disabled ? 0.5 : 1

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={disabled ? undefined : onPress}
        activeOpacity={disabled ? 1 : 0.7}
        disabled={disabled}
      >
        <IconComponent
          size={size}
          color={iconColor}
          style={{ opacity: iconOpacity }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <IconComponent
      size={size}
      color={iconColor}
      style={{ opacity: iconOpacity }}
    />
  )
}

export default HugeIcons
