import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Button, TextInput, List, FlatList, ScrollView } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { ListItem } from "react-native-elements";




// Se mere her https://docs.expo.io/versions/v27.0.0/sdk/location
const URLGETRESTAURANTSBYCOORDINATES = 'https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT/api/googleplaces/latlgt/';

class SearchRestaurant extends Component {

    constructor() {
        super();
        this.state = {
            location: null,
            errorMessage: null,
            restaurants: [],
            coordinates: '',
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
        let imageurl;

        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {

            //Get lantitude and longtitude
            latitude = this.state.location.coords.latitude;
            longitude = this.state.location.coords.longitude;
            //Make a new variable to our backend method based on latitude and longtitude
            latlng = latitude + "," + longitude;

        }
 
        console.log(imageurl)
        return (

            <ScrollView>
                <Text>Search for a restaurant based on your location</Text>

                <Button
                    color='green'
                    style={styles.button}
                    onPress={() => this.onPressButton()}
                    title="Gps location"
                />

                <Text style={styles.paragraph}>Longtitude and Longtitude: {latlng}</Text>
                <FlatList
                    data={this.state.restaurants}
                    renderItem={({ item }) => (
                        <ListItem
                            roundAvatar
                            title={item.name}
                            subtitle={item.vicinity}
                            rightTitle={item.rating}
                          //  avatar={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photos[0].photo_reference}&key=AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM` }}
                        avatar= {require('./LOGO3.png')}
                        />
                    )}
                />

            </ScrollView>

        );
    }
}

export default SearchRestaurant;

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
    button: {
        margin: 3,
        alignItems: 'center',
        backgroundColor: 'green',

    },
});
