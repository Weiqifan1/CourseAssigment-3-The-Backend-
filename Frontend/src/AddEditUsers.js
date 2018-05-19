import React, { Component } from 'react';
class AddEditUsers extends Component {

    render() {

        return (
            <div>

                <form>
                    <div>
                        <p>Add and edit users</p>
                        <label>Name:</label>
                        <input placeholder="Enter Name" />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input placeholder="Enter Email" />
                    </div>

                    <div>
                        <label>User Role:</label>
                        <input placeholder="Enter User Role" />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddEditUsers;
