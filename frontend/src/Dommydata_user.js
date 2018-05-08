import React, { Component } from "react";

<p>Access an array value of a JSON object.</p>


var user, x;

    user = {
    "firstName" : "John",
    "lastName" :"Doe",
    "userName" : "John01",
    "age" : 50,
    "userhistory" : "userhistorylist",
    "userprofilephoto" : "jd01",
    "userphotoes":[ "jd01", "img02", "img34" ],
    "usersearches":[ "cafewoody", "McDonalds", "RaadvadKro", "Lyngby", "Cafeer" ],
    "usercheckings":[ "cafewoody", "McDonalds", "RaadvadKro" ],
    "venues-visited-by-user":[ "cafewoody", "McDonalds", "RaadvadKro" ],
    "venues_liked_by_user":[ "cafewoody", "RaadvadKro" ]
};

x = user.venues_liked_by_user[1];
document.getElementById("demo").innerHTML = x;


/*
{
    "users" [
      {
        "userId": "1",
        "displayname": "Fred"
      },
      {
        "userId": "2",
        "displayname": "Ben"
      },
      {
        "userId": "3",
        "displayname": "Sarah"
      }
    ]
  }
  */


