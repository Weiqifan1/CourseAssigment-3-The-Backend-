import React from "react";
import data from './dummyData/TestUsers.json';
import AddEditUsers from "./AddEditUsers";

//Users shows a list of all the users to the admin
export default class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userid: "" }
    }

    onEdit = async (evt) => {
        this.setState({ userid: evt.target.id })
        evt.preventDefault();

        await console.log(evt)
    }
    onDelete = (evt) => {
        this.setState({ [evt.target.id]: evt.target.value })
    }

    render() {
        const row = data.users.map((user) => {

            return (

                <tr key={user.id}>
                    <td>{user.id}</td><td>{user.userName}</td><td>{user.email}</td><td>{user.userRole}</td>
                    <td><a href="" onClick={this.onEdit} id={user.id}>Edit</a> <a href="" onClick={this.onDelete} id={user.id}>Delete</a></td>
                </tr>
            )
        });

        return (
            <div id="5g">

                <table className="table">

                    <thead>
                        <tr><th>Id</th><th>Name</th><th>Email</th><th>User Role</th></tr>
                    </thead>

                    <tbody>
                        {row}
                    </tbody>

                </table>

                <AddEditUsers id="5h" />

            </div >
        );
    }
}
