import React from "react";
import data from './dummyData/TestUsers.json';

//UserHistory shows the users history to the user.
const UserHistory = () => {
    var userData;

    //Move the user data to a const
    const usersData = data.users;

    //Find one user
    const oneUser = usersData.find(u => u.id === "2");
   
    //Get venue history out of the object and into an array thats easier to manipulate.
    let venueHistory = [];
    venueHistory = oneUser.venuehistory;

    let venueLikes = [];
    venueLikes = oneUser.venuelikes;
    
    let venueCheckins = [];
    venueCheckins = oneUser.checkins;
    

    //Add <td></td> tag around the element and print it as ul.
    //Note to myself. dangerouslySetInnerHtml is Reacts way of using innerHtml. Read more https://reactjs.org/docs/dom-elements.html
    function makeUl(arrayList) {
        let unorderedList = arrayList.map(function (name) {
            const createMarkup = {__html: "<td>" + name + "</td>"};
            return <div dangerouslySetInnerHTML={createMarkup} />;
        });

        return unorderedList;
    }

    //Create the markdown to be used in the table.
    const venueHistoryUl = makeUl(venueHistory);
    const venueLikesUl = makeUl(venueLikes);
    const venueCheckinsUl = makeUl(venueCheckins);

    //The row for the table. It does not need to be a table.
    if (oneUser) {
        userData = <div>
            <h3> History for {oneUser.userName}</h3>
                        
            <table className="table">

                <thead>
                    <tr><th>Venue Visited</th><th>Venues I like</th><th>Checkins</th></tr>
                </thead>

                <tbody>
                    <td>{venueHistoryUl}</td>
                    <td>{venueLikesUl}</td>
                    <td>{venueCheckinsUl}</td>
                </tbody>
                
            </table>
</div>
    } else {
        userData = <h2> Sorry. User does not exist! </h2>;
    }

    return (
        <div>

            {userData}

        </div >
    );
}

export default UserHistory;
