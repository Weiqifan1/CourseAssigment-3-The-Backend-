import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button, FlatList, TextInput, List, ListItem } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
//import { List, ListItem } from "react-native-elements";
import GoogleFacade from './GoogleFacade';

// Se mere her https://docs.expo.io/versions/v27.0.0/sdk/location


class className extends Component {
    state = {
        location: null,
        errorMessage: null,
        restaurants: [],
        restaurantTable: '',
    };

    /*  componentWillMount() {
         if (Platform.OS === 'android' && !Constants.isDevice) {
             this.setState({
                 errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
             });
         } else {
             this._getLocationAsync();
         }
     } */

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });

        this.getRestaurantsFromFetch();
    };

    getRestaurantsFromFetch() {
        latitude = this.state.location.coords.latitude;
        longitude = this.state.location.coords.longitude;
        latlng = latitude + "," + longitude;
        this.setState({ restaurants: GoogleFacade.fetchRestaurantsByCoordinates(latlng) });
    }

    onPressButton = (evt) => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }



    render() {
        let text = 'Waiting..';
        let latitude;
        let longitude;
        let latlng;

        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {

            //Get lantitude and longtitude
            latitude = this.state.location.coords.latitude;
            longitude = this.state.location.coords.longitude;

            //Make a new variable to our backend method based on latitude and longtitude
            latlng = latitude + "," + longitude;

            //Set the data from the fetch based on latitude and longtitude in state
            //this.setState({ restaurants: GoogleFacade.fetchRestaurantsByCoordinates(latlng) });

            //Print the location object. Remove it.
            //text2 = JSON.stringify(this.state.location);

            //Creates the table
            /* const restaurantArray = this.state.restaurants.map(restaurant =>
                (
    
                    <div>
    
                        <table className="table">
                            <thead />
                            <tbody>
                                <tr key={restaurant.id}>
                                    <td><img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM`} height="75" alt="noimage" /></td>
                                    <td><p>{restaurant.name}</p>{restaurant.formatted_address}</td>
                                    <td>Rating: {restaurant.rating}</td>
                                    <td />
    
                                </tr>
    
                            </tbody>
                        </table>
                    </div>
                ),
            );
    
            this.setState({ restaurantTable: restaurantArray }); */
        }

        let restarantsFromFetch = this.state.restaurants;
        console.log(restarantsFromFetch);
        if(restarantsFromFetch === "null") {
           var view = "null";
        }


        return (

            <View style={styles.container} >

                <Text>Search for a restaurant based on your location</Text>

                <TextInput style={styles.inputField} placeholder="Does not work."
                    multiline={true}
                    numberOfLines={1}
                />

                <Button
                    onPress={() => this.onPressButton()}
                    title="Gps location"
                />

                <Text>{restarantsFromFetch}</Text>
                <Text>{view}</Text>
                
                <Text style={styles.paragraph}>{text}</Text>
                <Text style={styles.paragraph}>Latitude: {latitude}</Text>
                <Text style={styles.paragraph}>Longtitude: {longitude}</Text>
                <Text style={styles.paragraph}>Longtitude and Longtitude: {latlng}</Text>


            </View>
        );
    }
}

export default className;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
    inputField: {
        borderColor: '#000000',
        borderWidth: 1,
        width: 110,
    },
});

//https://rationalappdev.com/react-native-list-app-complete-how-to-guide/#outline-list-component-class

// https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
{/* <List>
                    <FlatList
                        data={this.state.restaurants}
                            renderItem={({ restaurant }) => (
                            <ListItem
                                roundAvatar
                                title={`${restaurant.name} ${restaurant.formatted_address}`}
                                subtitle={restaurant.formatted_address}
                                avatar={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM` }}
                            />
                        )}
                    />
                </List>
 */}

/*  <FlatList
                    data={this.state.restaurants}
                    renderItem={({ restaurant }) => <Text>{restaurant.name}, {restaurant.formatted_address}</Text>}
                    keyExtractor={(restaurant, index) => index}
                /> */