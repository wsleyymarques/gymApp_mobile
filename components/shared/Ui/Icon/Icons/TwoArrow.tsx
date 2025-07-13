import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface EyeSwapIconProps {
  size?: number
  color?: string
}

const TwoArrow: React.FC<EyeSwapIconProps> = ({
  size = 24,
  color = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 14C18 14 13.581 19 12 19C10.4188 19 6 14 6 14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 10C18 10 13.581 5 12 5C10.4188 5 6 10 6 10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default TwoArrow
