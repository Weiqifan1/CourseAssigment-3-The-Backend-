import React, { Component } from 'react';

//RegisterUser component is used if a new user is going to register.
class RegisterUser extends Component {

    render() {

        return (
            <div>

                <form id="9">
                    <div>
                        <label>Name</label>
                        <input placeholder="Enter Name" />
                    </div>

                    <div>
                        <label>Email</label>
                        <input placeholder="Enter Email" />
                    </div>

                    <div>
                        <label>Password</label>
                        <input placeholder="Enter Password" />
                    </div>

                    <button type="submit">Submit</button>

                </form>

            </div>
        );
    }
}

export default RegisterUser;
