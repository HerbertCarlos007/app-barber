import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { Header } from './src/components/Header'
import { Login } from './src/Pages/Login'

export default function App() {
  return (
    <>
      <Header/>
      <Login/>
    </>
  );
}
