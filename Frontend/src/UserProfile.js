import React, { Component } from 'react';
import data from './dummyData/TestUsers.json';

//UserProfile shows the profile information for the user.
class Profile extends Component {

    render() {

        //Move the user data to a const
        const usersData = data.users;

        //Find one user
        const oneUser = usersData.find(u => u.id === "2");

        //Get venue history out of the object and into an array thats easier to manipulate.
        const userName = oneUser.userName;
        const userRole = oneUser.userRole;
        const email = oneUser.email;

        return (
            <div>

                <form>

                    <div>
                        <label>Name: </label>
                        {userName}
                        <input placeholder="Change Name" />
                    </div>

                    <div>
                        <label>Email: </label>
                        {email}
                        <input placeholder="Change Email"/>
                    </div>

                    <div>
                        <label>Your Role: </label>
                        {userRole}
                    </div>

                    <button type="submit">Submit</button>

                </form>

            </div>
        );
    }
}

export default Profile;
