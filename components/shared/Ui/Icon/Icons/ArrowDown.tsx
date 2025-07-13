import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface EyeOnIconProps {
  size?: number
  color?: string
}

const ArrowDown: React.FC<EyeOnIconProps> = ({
  size = 24,
  color = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 9C18 9 13.5811 15 12 15C10.4188 15 6 9 6 9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowDown
