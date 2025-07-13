import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface ScissorIconProps {
  size?: number
  color?: string
}

const ScissorIcon: React.FC<ScissorIconProps> = ({
                                                         size = 24,
                                                         color = 'black',
                                                       }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M15 8L3 19"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.0003 16L11 12"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 5.00011L8.5 10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ScissorIcon
