import Svg, { Path } from 'react-native-svg'

const ArrowLeft02Icon = ({ size = 24, color = '#000000', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" {...props}>
    <Path
      d="M4 12H20"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 17C9 17 4 13.318 4 12C4 10.682 9 7 9 7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ArrowLeft02Icon
