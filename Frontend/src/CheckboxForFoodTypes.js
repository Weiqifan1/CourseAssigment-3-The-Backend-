import React, { Component } from 'react';

// Three unfoldable menus where the user can filter the restaurants that showed up in the search.
export default class foodType extends Component {
  render() {
    return (

      <form>

                Choose :

                Fastfood
        <input id="type" type="checkbox" value="fastfood" name="fastfood" />
                Family
        <input id="type" type="checkbox" value="family" name="family" />
                Local
        <input id="type" type="checkbox" value="local" name="local" />
                Gourmet
        <input id="type" type="checkbox" value="gourmet" name="gourmet" />
                Asian
        <input id="type" type="checkbox" value="asian" name="asian" />
      </form>
    );
  }
}
