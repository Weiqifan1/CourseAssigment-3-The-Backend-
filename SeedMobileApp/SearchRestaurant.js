import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button, FlatList, TextInput, List, ListItem, ScrollView } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
//import { List, ListItem } from "react-native-elements";



// Se mere her https://docs.expo.io/versions/v27.0.0/sdk/location
const URLGETRESTAURANTSBYCOORDINATES = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/latlgt/';

class className extends Component {

    constructor() {
        super();
        this.state = {
            location: null,
            errorMessage: null,
            restaurants: [],
            restaurantTable: '',
            coordinates: '',
            test: '',
        };
    }



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
        fetch(`${URLGETRESTAURANTSBYCOORDINATES + latlng}`)
            .then((results) => {
                if (!results.ok) {
                    throw Error(results.statusText);
                }
                return results.json();
            })
            .then((data) => {

                this.setState({ restaurants: data.results })
                // console.log("linje 52 " + this.state.restaurants.name)
                //this.setState({ test: this.state.restaurants[1].name })
                /*                 const restaurantsArray = (
                             
                
                
                                )
                
                                this.setState({ restaurantTable: restaurantsArray }) */

            })

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
        // console.log("linqjqqqeqq ",this.state.restaurants[0])
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


        }

        let restarantsFromFetch = this.state.restaurants;


        if (restarantsFromFetch === undefined) {
            var view = "null";
        }
        view = this.state.restaurantTable


        return (
            <View style={styles.container} >
                <ScrollView  >
                    <Text>{this.state.test}</Text>
                    <Text>Search for a restaurant based on your location</Text>
                    <Text> {this.state.test}</Text>

                    <TextInput style={styles.inputField} placeholder="Does not work."
                        multiline={true}
                        numberOfLines={1}
                    />

                    <Button
                        onPress={() => this.onPressButton()}
                        title="Gps location"
                    />

                    <FlatList
                        data={this.state.restaurants}
                        renderItem={({ item }) => <Text>{item.name}</Text>}
                    />

                    <Text style={styles.paragraph}>{text}</Text>
                    <Text style={styles.paragraph}>Latitude: {latitude}</Text>
                    <Text style={styles.paragraph}>Longtitude: {longitude}</Text>
                    <Text style={styles.paragraph}>Longtitude and Longtitude: {latlng}</Text>

                </ScrollView>
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
