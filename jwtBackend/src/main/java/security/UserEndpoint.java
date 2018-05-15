package security;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entity.UserFacade;
import java.io.IOException;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("users")

public class UserEndpoint {

    @GET
    //@Path("/allusers")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUsers() throws IOException { //@PathParam("place")
        String userNames = UserFacade.getInstance().getaUserList().toString();

        JsonObject responseJson = new JsonObject();
        responseJson.addProperty("usernames", userNames);
        return Response.ok(new Gson().toJson(responseJson)).build();
    }

    public static void main(String[] args) throws IOException {

        //System.out.println(getUsers());
    }

}
