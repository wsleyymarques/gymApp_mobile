import Svg, { Path } from 'react-native-svg'

const MoreVerticalCircle01Icon = ({
  size = 24,
  color = '#000000',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
    <Path
      d="M13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6C12.8284 6 13.5 5.32843 13.5 4.5Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21C12.8284 21 13.5 20.3284 13.5 19.5Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </Svg>
)

export default MoreVerticalCircle01Icon
