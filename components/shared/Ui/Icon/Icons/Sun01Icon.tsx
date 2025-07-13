import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Sun01IconProps {
  size?: number
  color?: string
}

const Sun01Icon: React.FC<Sun01IconProps> = ({
  size = 24,
  color = 'black',
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M11.9955 3H12.0045M11.9961 21H12.0051M18.3588 5.63599H18.3678M5.63409 18.364H5.64307M5.63409 5.63647H5.64307M18.3582 18.3645H18.3672M20.991 12.0006H21M3 12.0006H3.00898"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Sun01Icon
