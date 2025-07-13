import './global.css';
import Aplication from './components/shared/Navigation';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { ThemeProvider } from './components/shared/Theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  })

  return (
    <>
      <ThemeProvider>
        <Aplication/>
      </ThemeProvider>
    </>
  )
}
