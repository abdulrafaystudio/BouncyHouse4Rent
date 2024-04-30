import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'; 

const App = () => {
  return (
    <WebView 
    source={{ uri: 'http://www.BouncyHouse4Rent.com' }}  
    style={styles.container}
    />
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    
  }
})