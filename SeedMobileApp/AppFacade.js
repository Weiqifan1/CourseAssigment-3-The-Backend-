import React from 'react'
import AsyncStorage from 'react-native'



const URL = "https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT";

async function handleHttpErrors(res) {
    if (!res.ok) {
     throw { message: res.statusText, status: res.status };
    }
    console.log(res.json)
    return await res.json();
}

class AppFacade {

    fetchData = async () => {
     const options =  await this.makeFetchOptions("GET");
     return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
    }

    setToken = async (token) => {
        try {
            await AsyncStorage.setItem('jwtToken', token)
        } catch(error){
            console.log("in setToken  ",error)
        }
    }

    getToken =async () => {
      try {
        const value = await AsyncStorage.getItem('jwtToken');
        if (value !== null){
            // We have data!!
            console.log(value);
            return value;
          }
        } catch (error) {
          console.log(error, "value = null")
        }
    }
  
    
    loggedIn = async() => {
        console.log("når vi til loggedin?")
        const loggedIn =await this.getToken() != null;
        return loggedIn;
    }
    logout = async () => {
        try {
            await AsyncStorage.removeItem('jwtToken');
        } catch(error){
            console.log("logout ",error)
        }
    }

    login = async(user, pass) => {
        console.log(user, " Du er nu nået til facade.login")
//nu er der hul igennem godt gjort man skal til at tænke selv 
        const options = await this.makeFetchOptions("POST", { username: user, password: pass });
        return fetch(URL + "/api/login", options, true)
        
            .then(handleHttpErrors)

            .then(res => { 
                console.log(res, "hgjhghjghjgh")
                this.setToken(res.token) })
                .then(res => this.setState({ loggedIn: true }));


    }

    makeFetchOptions = async (type, userInfo) => {
        console.log(" du er i makefetchoptions "+type+" b "+userInfo.username)
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (this.loggedIn()) {
            console.log("her kommer det spændende med gettoken")
            headers["x-access-token"] =this.getToken();
        }
        return {
            method: type,
            headers,
            body: JSON.stringify(userInfo)
            
        }
    }
}
const facade = new AppFacade();

export default facade;


