import jwtDecode from 'jwt-decode';

//We fetch the user and login from our backend in the ApiFacade.
//Right now it is only used on login and get userrole.

//const URL = "http://localhost:8084/jwtbackend";
const URL = "https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT";

function handleHttpErrors(res) {
    if (!res.ok) {
        throw { message: res.statusText, status: res.status };
    }
    return res.json();
}

class ApiFacade {

    fetchData = () => {
        const userRole = this.getRole();
        if (userRole === "user") {
            const options = this.makeFetchOptions("GET");
            return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
        } else if (userRole === "admin") {
            const options = this.makeFetchOptions("GET");
            return fetch(URL + "/api/info/admin", options).then(handleHttpErrors);
        } else {
            console.log('Error in fetchData - apiData.js');
        }

    }

    // læser fra token hver gang den ikke er null (hvilket også gælder med refreshes, redirects osv.)
    getRole = () => {
        if (facade.getToken() !== null) {
            var userToken = this.getToken();
            var decoded = jwtDecode(userToken);
            var userRoles = decoded.roles;
        } else {
            const userRole = "";
        }

        return userRoles;
    }

    getUserName = () => {
        if (facade.getToken() !== null) {
            var userToken = this.getToken();
            var decoded = jwtDecode(userToken);
            var userName = decoded.sub;
        } else {
            const userName = "";
        }

        return userName;
    }

    setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }

    getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    loggedIn = () => {
        const loggedIn = this.getToken() != null;
        return loggedIn;
    }
    logout = () => {
        localStorage.removeItem("jwtToken");
    }

    login = (user, pass) => {
        try {
            const options = this.makeFetchOptions("POST", { username: user, password: pass });
            return fetch(URL + "/api/login", options, true)
                .then(handleHttpErrors)
                .then(res => { this.setToken(res.token) })
        } catch (error) {

        }

    }

    makeFetchOptions = (type, b) => {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (this.loggedIn()) {
            headers["x-access-token"] = this.getToken();
        }
        return {
            method: type,
            headers,
            body: JSON.stringify(b)
        }
    }
}

const facade = new ApiFacade();

export default facade;
