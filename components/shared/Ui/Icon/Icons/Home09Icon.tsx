import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Home09IconProps {
  size?: number
  color?: string
}

const Home09Icon: React.FC<Home09IconProps> = ({
  size = 24,
  color = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 22L9.00192 17.9976C9.00236 17.067 9.00258 16.6017 9.15462 16.2347C9.35774 15.7443 9.74746 15.3547 10.2379 15.1519C10.6051 15 11.0704 15 12.001 15V15C12.9319 15 13.3974 15 13.7647 15.152C14.2553 15.355 14.645 15.7447 14.848 16.2353C15 16.6026 15 17.0681 15 17.999V22"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M7.08848 4.76243L6.08847 5.54298C4.57181 6.72681 3.81348 7.31873 3.40674 8.15333C3 8.98792 3 9.95205 3 11.8803V13.9715C3 17.7562 3 19.6485 4.17157 20.8243C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8243C21 19.6485 21 17.7562 21 13.9715V11.8803C21 9.95205 21 8.98792 20.5933 8.15333C20.1865 7.31873 19.4282 6.72681 17.9115 5.54298L16.9115 4.76243C14.5521 2.92081 13.3724 2 12 2C10.6276 2 9.44787 2.92081 7.08848 4.76243Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Home09Icon
