import React, { Component } from 'react';
import CheckboxForFoodTypes from './CheckboxForFoodTypes'
import UserSearchResult from './UserSearchResult';
import RestaurantsSearchResult from './RestaurantsSearchResult'
import FoursquareFacade from './FoursquareFacade';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { lokation: "" , myString: "constructor"};
    }
  

    onSearch = (evt) => {
        //this.setState({userlocation: evt});
        evt.preventDefault(); 
        console.log(this.state.lokation);
      
       //this.setState({arr: FoursquareFacade(this.state.lokation)});
       //console.log("er arr i state?");
       //console.log(this.state.arr);
       this.setState({myString: FoursquareFacade(this.state.lokation)});
       console.log("onSearch: "+this.state.myString);
    }

    onChange = (evt) => {
        console.log(evt.target.value)
        this.setState({ [evt.target.id]: evt.target.value })
       
    }


    render() {
        return (
            <div>

                <form onSubmit={this.onSearch} onChange={this.onChange} >
                    <div id="search">
                        <input placeholder="Location" id="lokation" />
                        <button id="8">search</button>
                    </div>

                    <div className="container">
                        <CheckboxForFoodTypes id="3" />
                        <RestaurantsSearchResult id="5u"/>
                        
                    </div>

                    <div>
                        <p>hello chr kl. 15.02</p>
                        <p>{this.state.lokation}</p>
                        <p>{this.state.arr}</p>
                    </div>
                </form>


            </div>
        )
    }
}

export default Search;

//<RestaurantsSearchResult id="5u"/> 
//<p>{this.state.userlocation}</p>
// brugerlokation={this.state.lokation}