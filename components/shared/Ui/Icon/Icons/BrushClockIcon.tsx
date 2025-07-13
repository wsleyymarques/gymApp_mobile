import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface CustomIconProps {
  size?: number
  color?: string
}

const BrushClockIcon: React.FC<CustomIconProps> = ({
                                                     size = 24,
                                                     color = '#000000',
                                                   }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle
      cx="12"
      cy="13"
      r="9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M12 3.5V2"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 2H14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.7728 10.2571C15.5061 10.9837 14.3328 16.8933 13.1289 16.9974C12.1189 17.0848 11.8041 15.0928 11.5914 14.4614C11.3815 13.8383 11.1478 13.6139 10.5298 13.4095C8.95989 12.8901 8.17492 12.6304 8.0195 12.2192C7.60796 11.1304 13.8362 9.32902 14.7728 10.2571Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </Svg>
)

export default BrushClockIcon
