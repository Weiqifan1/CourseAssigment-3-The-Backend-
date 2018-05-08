import React, { Component } from "react"
import facade from "./AppFacade";
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView, Touchable, TextInput, Image  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Form from 'react-native-form'


export  class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" , LoggedIn: false}
  }

/*   login = async (evt) => {

 evt.preventDefault();
evt.stopPropagation()
    try{
 await facade.login(this.state.username, this.state.password);
    }catch(error){
console.log(error)
    }
 
 alert ("logn" +this.state.username) 
  } */



  render() {
    return (
      <View style={{ padding: 20 }}>
  <Image source={require('./yodaicon.jpg')}/>
        <Text
          style={{ fontSize: 27 }}>
          Login
              </Text  >
              <Text
          style={{ fontSize: 16 }}>
          (virker ikke)
              </Text  >
          <TextInput placeholder='Username'  onChangeText={(username)=> this.setState({username:username})} />
          <TextInput placeholder='Password'onChangeText={(password)=> this.setState({password:password})} />
        <Button
           onPress={async ()=> facade.login(this.state.username,this.state.password)
            .then(res => Login.setState({ loggedIn: true }))}
            title="Submit"
          /> 
       
      </View>
    )
  }
}

export class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: []};
  }
  componentDidMount() {
   facade.fetchData().then(res => this.setState({ dataFromServer: res }));
    alert("something"+this.state.dataFromServer)
  }
  render() {
    return (
      <View>
        <Text>Data Received from server
      {this.state.dataFromServer}</Text>

        <Button onPress={this.props.logout}
          title="Logout"
        />
      </View>
    )
  }
}




export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false }
  }

  logout = async () => {
  await  facade.logout();
    this.setState({ loggedIn: false });
  }



  
  onChange = async(evt) => {
 await this.setState({ [evt.target.id]: evt.target.value })
  }
  handleSubmit = async(evt) => {
   await this.props.login(this.state.username, this.state.password);
  }


  render() {

    return (
      <View style={{ padding: 20 }}>
        {!this.state.loggedIn===true ? (<LogIn  />) :
          <LoggedIn />

        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
/* npm install
  npm install -g create-react-native-app
 npm install navigationbar-react-native
  npm install react-navigation --save */

