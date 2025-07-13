import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface CheckIconProps {
  size?: number
  color?: string
}

const CheckIcon: React.FC<CheckIconProps> = ({
  size = 24,
  color = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 6L9 17l-5-5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CheckIcon
