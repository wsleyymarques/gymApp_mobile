import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface CustomIconProps {
  size?: number
  color?: string
}

const MobileCode: React.FC<CustomIconProps> = ({
                                                   size = 24,
                                                   color = 'black',
                                                 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18.6436 4C18.4955 3.61742 18.2933 3.29898 18.0175 3.02513C16.9851 2 15.3234 2 12 2C8.67661 2 7.01491 2 5.98247 3.02513C5.70666 3.29898 5.50453 3.61742 5.3564 4M5 18C5.08715 19.4194 5.32629 20.3233 5.98247 20.9749C7.01491 22 8.67661 22 12 22C15.3234 22 16.9851 22 18.0175 20.9749C18.6737 20.3233 18.9128 19.4194 19 18"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 10L8 12M8 10L6 12"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 10L13 12M13 10L11 12"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 10L18 12M18 10L16 12"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 7H7C5.11438 7 4.17157 7 3.58579 7.58579C3 8.17157 3 9.11438 3 11C3 12.8856 3 13.8284 3.58579 14.4142C4.17157 15 5.11438 15 7 15H17C18.8856 15 19.8284 15 20.4142 14.4142C21 13.8284 21 12.8856 21 11C21 9.11438 21 8.17157 20.4142 7.58579C19.8284 7 18.8856 7 17 7Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 19V19.01"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default MobileCode