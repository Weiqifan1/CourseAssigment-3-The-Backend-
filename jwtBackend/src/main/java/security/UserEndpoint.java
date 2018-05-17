package security;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entity.User;
import com.mysql.jdbc.CommunicationsException;
import entity.UserFacade;
import exceptions.PersistenceException;
import java.io.IOException;
import java.util.List;
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
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUsers() throws PersistenceException {

        try {
            List<User> userNames = UserFacade.getInstance().getaUserList();

            return Response.ok(new Gson().toJson(userNames)).build();

        } catch (Exception ex) {
            Logger.getLogger(PersistenceException.class.getName()).log(Level.SEVERE, "Fejl i Database forbindelse", ex);
            System.out.println("Her fremvises Ezceptions besked:  " + ex.getMessage());
            throw new PersistenceException(ex.getMessage());
        }

    }

    public static void main(String[] args) throws IOException, PersistenceException {

        // System.out.println(getUsers());
    }

}
