import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../containers/Welcome';
import Home from '../../containers/Home';

const Stack = createStackNavigator();

const StackScreens: React.FC<{ initialRoute: 'Welcome' | 'Home' }> = ({ initialRoute }) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#ffffff' } }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackScreens;