import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface VideoMessageIconProps {
  size?: number
  color?: string
}

const Wallet: React.FC<VideoMessageIconProps> = ({
                                                             size = 24,
                                                             color = 'black',
                                                           }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 8.5H15C17.8284 8.5 19.2426 8.5 20.1213 9.37868C21 10.2574 21 11.6716 21 14.5V15.5C21 18.3284 21 19.7426 20.1213 20.6213C19.2426 21.5 17.8284 21.5 15 21.5H9C6.17157 21.5 4.75736 21.5 3.87868 20.6213C3 19.7426 3 18.3284 3 15.5V8.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 8.49833V4.1103C15 3.22096 14.279 2.5 13.3897 2.5C13.1336 2.5 12.8812 2.56108 12.6534 2.67818L3.7623 7.24927C3.29424 7.48991 3 7.97203 3 8.49833"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.5 15.5C17.7761 15.5 18 15.2761 18 15C18 14.7239 17.7761 14.5 17.5 14.5M17.5 15.5C17.2239 15.5 17 15.2761 17 15C17 14.7239 17.2239 14.5 17.5 14.5M17.5 15.5V14.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Wallet
