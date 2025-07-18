﻿import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface LocationIconProps {
  size?: number
  color?: string
}

const Location02Icon: React.FC<LocationIconProps> = ({
                                                     size = 24,
                                                     color = 'black',
                                                   }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M14.5 10C14.0697 8.55426 12.5855 7.5 11 7.5C9.067 7.5 7.5 9.067 7.5 11C7.5 12.7632 8.80385 14.2574 10.5 14.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M19.9504 10C19.4697 5.53446 15.5596 2 11 2C6.12944 2 2 6.03298 2 10.9258C2 15.9137 6.2039 19.3616 10.073 21.7567C10.3555 21.9162 10.675 22 11 22C11.325 22 11.6445 21.9162 11.927 21.7567C12.1816 21.6009 12.4376 21.4403 12.6937 21.2748"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M17.5 12C19.9353 12 22 14.0165 22 16.4629C22 18.9482 19.9017 20.6924 17.9635 21.8783C17.8223 21.9581 17.6625 22 17.5 22C17.3375 22 17.1777 21.9581 17.0365 21.8783C15.1019 20.6808 13 18.9568 13 16.4629C13 14.0165 15.0647 12 17.5 12Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M17.5 16.5H17.509"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Location02Icon
