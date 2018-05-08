import React from 'react';
import ApiFacade from './ApiFacade';

//The loginAs componenet shows if you are logged in as user or admin.
const LoginAs = () => {
    var view;
    const userRole = ApiFacade.getRole();
    const userName = ApiFacade.getUserName();
    
    if(userRole === "admin") {
        view = <p>Hello {userName}. You are logged in as: admin.</p>
    } if(userRole === "user") {
        view = <p>Hello {userName}. You are logged in as: user.</p>
    } else {
        view = <p>Please login or create an account.</p>
    }

    return (
        <div>
            
            {view}
        
        </div>
    )
}

export default LoginAs;
