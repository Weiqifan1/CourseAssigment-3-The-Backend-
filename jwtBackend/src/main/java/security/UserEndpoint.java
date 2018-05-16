package security;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.mysql.jdbc.CommunicationsException;
import entity.UserFacade;
import exceptions.PersistenceException;
import java.io.IOException;
import java.sql.SQLException;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.faces.component.UpdateModelException;
import javax.persistence.NoResultException;
import org.eclipse.persistence.exceptions.JPQLException;
@Path("users")

public class UserEndpoint {

    @GET
    //@Path("/allusers")
    @Produces(MediaType.APPLICATION_JSON)
    public static Response getUsers() throws PersistenceException { //@PathParam("place")
        
    try {
        String userNames = UserFacade.getInstance().getaUserList().toString();

        JsonObject responseJson = new JsonObject();
        responseJson.addProperty("usernames", userNames);
        return Response.ok(new Gson().toJson(responseJson)).build();
   
        } catch (Exception ex) {
          Logger.getLogger(PersistenceException.class.getName()).log(Level.SEVERE, "Fejl i Database forbindelse", ex);
          System.out.println("Her fremvises Ezceptions besked:  " + ex.getMessage());
            throw new PersistenceException(ex.getMessage());
        }
    }
       


    public static void main(String[] args) throws IOException, PersistenceException {

        System.out.println(getUsers());
    }

}
