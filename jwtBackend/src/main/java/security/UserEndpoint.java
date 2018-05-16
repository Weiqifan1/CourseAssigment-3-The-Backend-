package security;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entity.User;
import entity.UserFacade;
import java.io.IOException;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("users")

public class UserEndpoint {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUsers() throws IOException { 
        List<User> userNames = UserFacade.getInstance().getaUserList();

        return Response.ok(new Gson().toJson(userNames)).build();
    }

    public static void main(String[] args) throws IOException {

        //System.out.println(getUsers());
    }

}
