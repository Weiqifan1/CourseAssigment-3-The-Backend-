import React from 'react';
import { Text, View, Platform, ScrollView, TouchableOpacity, StyleSheet, Button, WebView, Image } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import FetchExample from './NetWorking';
import Login from './Login'
import LoggedIn from './Login'
import facade from "./AppFacade";


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Seed App Project' };
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <ScrollView>
    
    
        <Text style={{ textAlign: "center", fontSize: 20 }}>Welcome </Text> 
        <Text style={{ textAlign: "center", fontSize: 16 }}>to Start mobile app for the DataBuilders seed</Text> 
        <Touchable onPress={() => navigate('HomeScreen')} title="Home" />
        <Touchable onPress={() => navigate('FetchExample')} title="NetWorking" />
        <Touchable onPress={()=> navigate('Login')} title="Login" />
        <Image source={require('./starwars-theme.jpg')} style={height = undefined } />
    </ScrollView>
    )
  }
}
export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
Home: { screen: HomeScreen },
FetchExample: {screen: FetchExample},
Login: {screen: Login},
LoggedIn: {screen: LoggedIn},

});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})