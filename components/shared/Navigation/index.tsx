import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import StackScreens from './Stack';
import { StatusBar } from 'react-native';
import { selectIsAuthenticated } from '../Store/authSlice';

const Aplication: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" />
      <StackScreens initialRoute={isAuthenticated ? 'Home' : 'Welcome'} />
    </NavigationContainer>
  );
};

export default Aplication;