import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

interface CartIconProps {
  size?: number
  color?: string
}

const CartIcon: React.FC<CartIconProps> = ({
                                             size = 24,
                                             color = 'black',
                                           }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 6H22"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle
      cx={6}
      cy={20}
      r={2}
      stroke={color}
      strokeWidth={1.5}
    />
    <Circle
      cx={17}
      cy={20}
      r={2}
      stroke={color}
      strokeWidth={1.5}
    />
    <Path
      d="M8 20L15 20"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
)

export default CartIcon
