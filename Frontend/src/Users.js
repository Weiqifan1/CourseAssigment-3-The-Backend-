// Linting rules that is disabeled for this file.
/* eslint arrow-parens: 0 */
/* eslint jsx-a11y/anchor-is-valid: 0 */
/* class-methods-use-this: 0 */

import React from 'react';
import AddEditUsers from './AddEditUsers';
import UserFacade from './UserFacade';

// Users shows a list of all the users to the admin
export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userid: '', users: [] };
  }


  onEdit = async (evt) => {
    this.setState({ userid: evt.target.id });
    evt.preventDefault();
  }
  onDelete = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  //Kalder fetch her. Viser først siden tom. Derefter compoundDidMount. 
  async componentDidMount() {
    const allUsers = await UserFacade.fetchAllUsers();
    
    //Når state er sat, så render den igen.
    this.setState({ users: allUsers });
  }


  render() {

    const userList = this.state.users.map((user, index) => (<li key={index}>{user}</li>))
    return (
      <div id="5g">
        <ul>
          {userList}
        </ul>
      </div >
    );
  }
}
