import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface CloseIconProps {
  size?: number
  color?: string
}

const CloseIcon: React.FC<CloseIconProps> = ({
  size = 24,
  color = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CloseIcon
