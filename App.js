import { useFonts } from 'expo-font'
import { Header } from './src/components/Header'
import { Login } from './src/Pages/Login'
import { Home } from './src/Pages/Home'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {


  const [loaded] = useFonts({
    'montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    'montserratSemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'montserratItalic': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
    'notoSerif': require('./assets/fonts/NotoSerif-Regular.ttf'),
  })

  useEffect(() => {
    function prepare() {
      SplashScreen.preventAutoHideAsync
    }
    prepare()
  }, [])

  if (!loaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
