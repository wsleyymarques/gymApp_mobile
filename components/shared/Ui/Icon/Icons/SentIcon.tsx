import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface SentIconProps {
  size?: number
  color?: string
}

const SentIcon: React.FC<SentIconProps> = ({
  size = 24,
  color = '#7ed321',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M11.5 12.5L15 9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SentIcon
