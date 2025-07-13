﻿import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface MapMarkerIconProps {
  size?: number
  color?: string
}

const FindIcon: React.FC<MapMarkerIconProps> = ({
                                                       size = 24,
                                                       color = 'black',
                                                     }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M17 17L21 21"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default FindIcon
