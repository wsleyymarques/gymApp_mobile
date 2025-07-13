import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Clock05IconProps {
  size?: number
  color?: string
}

const Clock05Icon: React.FC<Clock05IconProps> = ({
  size = 24,
  color = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 22C6.47715 22 2.00004 17.5228 2.00004 12C2.00004 6.47715 6.47719 2 12 2C16.4777 2 20.2257 4.94289 21.5 9H19"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8V12L14 14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.9551 13C21.9848 12.6709 22 12.3373 22 12M15 22C15.3416 21.8876 15.6753 21.7564 16 21.6078M20.7906 17C20.9835 16.6284 21.1555 16.2433 21.305 15.8462M18.1925 20.2292C18.5369 19.9441 18.8631 19.6358 19.1688 19.3065"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Clock05Icon
