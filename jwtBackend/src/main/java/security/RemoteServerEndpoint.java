/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Ejer
 */
@Path("/restaurants")

public class RemoteServerEndpoint {

    @GET
    @Path("name/{lokation}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getVehicles(@PathParam("lokation") String lokation) throws IOException {
        String output = get4SquareByLokation(lokation);
        return output;
    }

     @GET
    @Path("locationtype/{lokationAndType}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getByType(@PathParam("lokationAndType") String lokationAndType) throws IOException {
        String output = get4SquareCategoriesLocation(lokationAndType);
        return output;
    }
    
    @GET
    @Path("ll/{ll}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getEatLL(@PathParam("ll") String ll) throws IOException {
        String output = get4SquareByCoordinatesAsString(ll);
        return output;
    }
//   
//   //hvis man vil lave en query på bestemt slags mad &query="sushi"
//    public static String getRemoteData4SquareByLokation(String lokation ) throws MalformedURLException, IOException{
//   
//       String urlInput="https://api.foursquare.com/v2/venues/explore?near="+lokation
//               +"&section='food'&client_id=KL1DJ3CJHMBRNKAXEZEMMDDIIOQFTIW3CHIC1W03GBTE4QES&client_secret=2EPVZLOWM51X51JJU5YXQOH2YHBRM5EZJRAZWMB2VBMDSABK&v=20180418";
//        URL url = new URL(urlInput);//new URL("https://swapi.co/api/people/"+id);
//    HttpURLConnection con = (HttpURLConnection) url.openConnection();
//    con.setRequestMethod("GET");
//    con.setRequestProperty("Accept", "application/json;charset=UTF-8");
//  
//    Scanner scan = new Scanner(con.getInputStream());
//    String jsonStr = null;
//    if (scan.hasNext()) {
//      jsonStr = scan.nextLine();
//    }
//    scan.close();
//    return jsonStr;
    private static final String client_id = "KL1DJ3CJHMBRNKAXEZEMMDDIIOQFTIW3CHIC1W03GBTE4QES";
    private static final String client_secret = "2EPVZLOWM51X51JJU5YXQOH2YHBRM5EZJRAZWMB2VBMDSABK&v=20180501";
    private static final String clientAut = "&client_id=" + client_id + "&client_secret=" + client_secret;
    private static final String FSVenURL = "https://api.foursquare.com/v2/venues/";
    //String urlInput="https://api.foursquare.com/v2/venues/explore?near="+lokation+"&section='food'&client_id=KL1DJ3CJHMBRNKAXEZEMMDDIIOQFTIW3CHIC1W03GBTE4QES&client_secret=2EPVZLOWM51X51JJU5YXQOH2YHBRM5EZJRAZWMB2VBMDSABK&v=20180501";

    //documentation: https://developer.foursquare.com/docs/api/venues/explore
    // returns a list of recommended venues near the current location.
    public static String get4SquareByLokation(String location) throws MalformedURLException, IOException {
        String urlInput = FSVenURL + "explore" + "?near=" + location + "&section='food'" + clientAut;
        return jsonResponse(urlInput);

    }

    public static String get4SquareByLokationAndCategory(String location, String category) throws MalformedURLException, IOException {
        String urlInput = FSVenURL + "explore" + "?near=" + location + "&section='food'" + "&query=" + category + clientAut;
        
        return jsonResponse(urlInput);

    }
    public static String get4SquareByVenueId(String venueId){
        String urlInput=FSVenURL+venueId;
        return urlInput;
    }

    //documentation: https://developer.foursquare.com/docs/api/venues/explore
    // returns a list of recommended venues near the current location.
    public static String get4SquareByLocation(String location, int radiusMeter) throws MalformedURLException, IOException {
        String urlInput = FSVenURL + "explore" + "?near=" + location
                + "&radius=" + radiusMeter
                + "&section='food'" + clientAut;
        return jsonResponse(urlInput);
    }

    //documentation: https://developer.foursquare.com/docs/api/venues/explore
    // returns a list of recommended venues near the current location.
    public static String get4SquareByCoordinates(Double lat, Double lng) throws MalformedURLException, IOException {
        String urlInput = FSVenURL + "explore" + "?ll=" + lat + "," + lng + "&section='food'" + clientAut;
        return jsonResponse(urlInput);
    }

    public static String get4SquareByCoordinatesAsString(String ll) throws MalformedURLException, IOException {
        String urlInput = FSVenURL + "explore" + "?ll=" + ll
                + "&radius=" + 10000 + "&section='food'" + clientAut;
        return jsonResponse(urlInput);
    }

    //documentation: https://developer.foursquare.com/docs/api/venues/explore
    // returns a list of recommended venues near the current location.
    public static String get4SquareByCoordinates(Double lat, Double lng, int radiusMeter) throws MalformedURLException, IOException {
        String urlInput = FSVenURL + "explore" + "?ll=" + lat + "," + lng
                + "&radius=" + radiusMeter
                + "&section='food'" + clientAut;
        return jsonResponse(urlInput);
    }

    //documentation: https://developer.foursquare.com/docs/api/venues/categories
    // returns a hieracichal list of categories applied to venues. 
    // (inkludere alle slags venues, ikke kun mad)
    public static String get4SquareCategoriesLocation(String locationtype ) throws MalformedURLException, IOException {
        String urlInput = FSVenURL + "search"+ "?near=" + locationtype
                + clientAut;//+ "?section='food'";//+ clientAut;//section='food'
        return jsonResponse(urlInput);
    }

    //documentation: https://developer.foursquare.com/docs/api/venues/categories
    // returns a hieracichal list of categories applied to venues. 
    // (inkludere alle slags venues, ikke kun mad)
    public static String get4SquareCategories() throws MalformedURLException, IOException {
        String urlInput = FSVenURL + "categories" + "?" + clientAut;//+ "?section='food'";//+ clientAut;//section='food'
        return jsonResponse(urlInput);
    }

    public static String jsonResponse(String urlInput) throws MalformedURLException, IOException {
        URL url = new URL(urlInput);//new URL("https://swapi.co/api/people/"+id);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Accept", "application/json;charset=UTF-8");

        String jsonStr;
        try (Scanner scan = new Scanner(con.getInputStream())) {
            System.out.println(url);
            jsonStr = null;
            if (scan.hasNext()) {
                jsonStr = scan.nextLine();
            }
        }
        return jsonStr;
    }

    public static String getValueFromServer(String inputUrl) {

        String jsonOutput = "virker ikke";

        try {

            URL url = new URL(inputUrl);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod(
                    "GET");
            con.setRequestProperty(
                    "Accept", "application/json;charset=UTF-8");
            Scanner scan = new Scanner(con.getContentType());
            String jsonStr = null;

            if (scan.hasNext()) {
                jsonStr = scan.nextLine();
            }

            scan.close();

            System.out.println(jsonStr);
            jsonOutput = jsonStr;
        } catch (Exception e) {
            jsonOutput = "catch error: " + e;
        }
        return jsonOutput;
    }

    public static void main(String[] args) throws IOException{

 
//     System.out.println(get4SquareByLokation("nyc"));
//     
//        System.out.println("Chr test...");
//        System.out.println(get4SquareByCoordinates(55.46, 12.30, 250));
        System.out.println(get4SquareByLokation("roskilde"));
        //System.out.println("Benedikte test");
//        System.out.println(get4SquareByCoordinatesAsString("55.45,12.30"));n {
//        System.out.println("swapi test");
//       // System.out.println(getValueFromServer("http://restcountries.eu/rest/v1/alpha"));
//        System.out.println(getValueFromServer("https://swapi.co/
////////////////    System.out.println (get4SquareByLokation("koge"));
        //System.out.println(get4SquareByCoordinates(55.46, 12.30));
        //System.out.println(get4SquareCategoriesLocation("koge&categoryId=4d4b7105d754a06374d81259&query=family"));
    }
    }
