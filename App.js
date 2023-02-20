import { useFonts } from 'expo-font'
import { Header } from './src/components/Header'
import { Login } from './src/Pages/Login'
import { Home } from './src/Pages/Home'
import { Scheduling } from './src/Pages/Scheduling'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

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

  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer >
      <Drawer.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Drawer.Screen name="Login"  component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Scheduling" component={Scheduling} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
