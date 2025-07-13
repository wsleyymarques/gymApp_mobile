import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface ArrowUpLeft01IconProps {
  size?: number
  color?: string
}

const ArrowUpLeft01Icon: React.FC<ArrowUpLeft01IconProps> = ({
  size = 24,
  color = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6.99994 7L17.9999 18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M12.9999 6.13151C12.9999 6.13151 7.36639 5.65662 6.51147 6.51153C5.65655 7.36645 6.13151 13 6.13151 13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowUpLeft01Icon
