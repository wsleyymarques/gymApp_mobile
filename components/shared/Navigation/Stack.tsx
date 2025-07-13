import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../containers/Welcome';

const Stack = createStackNavigator();

const StackScreens: React.FC = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false,cardStyle: { backgroundColor: '#ffffff' } }}>
        <Stack.Screen name="Welcome" component={Welcome}  />
      </Stack.Navigator  >
    </>
  )
}

export default StackScreens