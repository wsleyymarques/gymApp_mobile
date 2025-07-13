import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface RecentIconProps {
  size?: number
  color?: string
}

const Info: React.FC<RecentIconProps> = ({
                                                 size = 24,
                                                 color = 'black',
                                               }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle
      cx="12"
      cy="12"
      r="10"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16V11.5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8.01172V8.00172"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Info
