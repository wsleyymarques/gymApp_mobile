import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface EyeOffIconProps {
  size?: number
  color?: string
}

const ArrowUp: React.FC<EyeOffIconProps> = ({ size = 24, color = 'black' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 15C18 15 13.581 9 12 9C10.4188 9 6 15 6 15"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowUp
