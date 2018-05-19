import React from 'react';
import { Text, View, Platform, ScrollView, TouchableOpacity, StyleSheet, Button, WebView, Image } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import FetchExample from './NetWorking';
import Login from './Login'
import LoggedIn from './Login'
import facade from "./AppFacade";
import SearchRestaurant from './SearchRestaurant';



const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Cuisine By Choice' };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.centerHeader}>
        <ScrollView>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Welcome to Cuisine By Choice</Text>
          <Touchable onPress={() => navigate('Login')} title="Login" />
          <Image source={require('./LOGO3.png')} style={styles.logo3Style} />
       

          <SearchRestaurant />
        </ScrollView>
      </View>
    )
  }
}
export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: Login },
  LoggedIn: { screen: LoggedIn },

});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: 'green'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  },
  logo3Style: {
    width: 100,
    height: 100,
    alignSelf: 'center',

  },
  centerHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }


})