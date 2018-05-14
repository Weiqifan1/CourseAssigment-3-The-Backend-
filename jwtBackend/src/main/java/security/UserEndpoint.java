

package security;

import entity.User;
import entity.UserFacade;
import java.io.IOException;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;



@Path("/User")

public class UserEndpoint {
    

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public static String getUsers( ) throws IOException {
        String output = UserFacade.getInstance().getaUserList().toString();
        return output;
    }
    
    public static void main(String[] args) throws IOException {
        
        System.out.println(getUsers());
    }
    
}
