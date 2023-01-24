import { useFonts } from 'expo-font'
import { Header } from './src/components/Header'
import { Login } from './src/Pages/Login'

export default function App() {

  const [loaded] = useFonts({
    'montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    'montserratSemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserratItalic': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
    'notoSerif': require('./assets/fonts/NotoSerif-Regular.ttf'),
  })

  return (
    <>
      <Header />
      <Login />
    </>
  );
}
