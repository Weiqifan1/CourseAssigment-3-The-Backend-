import React from 'react';
import { FlatList, ActivityIndicator, Text, View , Image  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  /* componentDidMount(){
    return fetch('https://benedikteeva.dk/jwtBackend-1.0-SNAPSHOT/api/remote/people?=results')
      .then((response) => response.json())
      .then((data) => {

        this.setState({
          isLoading: false,
          dataSource: data.results,
        }, function(){

        });

      })
      .catch((error) =>{

      });
  } */


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 1, paddingTop:20}}>
 <Text> Get data from remoteserver through our own server</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}, {item.gender}</Text>}
          keyExtractor={(item, index) => index}

        />  <Image source={require('./Luke_Skywalker.png')}  />

      </View>
    );
  }
}
