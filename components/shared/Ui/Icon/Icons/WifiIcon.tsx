import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface WifiIconProps {
  size?: number
  color?: string
}

const WifiIcon: React.FC<WifiIconProps> = ({ size = 24, color = 'black' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8.25 14.5C10.25 12.5 13.75 12.5 15.75 14.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.5 11.5C14.7324 8.16667 9.5 8.16667 5.5 11.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 8.5C8.31579 3.16669 15.6842 3.16668 22 8.49989"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="12" cy="18" r="1.5" stroke={color} strokeWidth="1.5" />
  </Svg>
)

export default WifiIcon
