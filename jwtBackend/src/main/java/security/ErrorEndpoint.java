/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import java.io.IOException;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.google.gson.Gson;
/**
 *
 * @author Ejer
 */
@Path("error")
public class ErrorEndpoint {
      Gson gson = new Gson();
    
     @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getError() throws IOException {
     return gson.toJson(new Error("An error occured, please try again or contact the webadministrator", 0));
    }
    
    public static void main(String[] args) throws IOException {
       ErrorEndpoint eere= new ErrorEndpoint();
        System.out.println(eere.getError());  
               
}}
