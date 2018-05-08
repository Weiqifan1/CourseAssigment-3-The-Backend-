/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.ws.rs.GET;
/**
 *
 * @author Christian
 */
@Path("googleplaces")

public class GoogleAPI {
    
    @GET
    @Path("/{place}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getPlaceByText(@PathParam("place") String search) throws IOException {
        String outPut = getplaceByTextSearch(search);
        return outPut;
}

    private static final String UrlFirstPart = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
    private static final String StandardRadius = "&radius=500";
//  private static final String UrlKey = "AIzaSyBbdu5tPAp2P0EGbFgdGfzk_Vz7GUbsNO0"; //Bos
// private static final String UrlKey = "AIzaSyDr5OFAHNYW2AdC2R8hqd3vH6QzirUkeNg"; // benediktes
 private static final String UrlKey= "AIzaSyDNGntL1NjT4xTfiMxnq2Blu6M5yjfPmMM";
    
    private static final String URLexample = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&key=AIzaSyBbdu5tPAp2P0EGbFgdGfzk_Vz7GUbsNO0";
    private static final String USER_AGENT = "Mozilla/5.0";
    private static final String TextSerarchUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json";
    
    
    private static String getplaceByTextSearch(String search) throws IOException {
        String trim = search.replace(" ", "+").trim();
        System.out.println(trim);
        
        String requestUrl = TextSerarchUrl + "?query=" + trim + "&key=" + UrlKey;
        System.out.println(requestUrl);
        return sendGET(requestUrl);
}
    private static String getGooglePlaceByCoor(String latAndLng, int radius) throws IOException {
        String mystr
                = UrlFirstPart + "?location=" + latAndLng + radius + "&key=" + UrlKey;
        return sendGET(mystr);
    }

    private static String getGooglePlaceByCoor(String latAndLng) throws IOException {
        String mystr
                = UrlFirstPart + "?location=" + latAndLng + StandardRadius + "&key=" + UrlKey;
        return sendGET(mystr);
    }

    private static String regexBetwTags(String text, String tag1, String tag2) {
        final Pattern pattern = Pattern.compile(tag1 + "(.+?)" + tag2);
        final Matcher matcher = pattern.matcher(text);
        matcher.find();
        return matcher.group(1);
    }

    private static String getGoogleCityByCoor(String googleJSON) {
        String firstWork = regexBetwTags(googleJSON, "name", ",");
        String secondWork = firstWork.substring(3);
        secondWork = secondWork.trim();
        secondWork = secondWork.substring(1, secondWork.length() - 1);
        return secondWork;
    }

    private static String getGoogleStreetByCoor(String googleJSON) {
        String firstWork = regexBetwTags(googleJSON, "rating(.*)vicinity", "\"");
        firstWork = regexBetwTags(firstWork, "vicinity", "}");
        String secondWork = firstWork.substring(3);
        secondWork = secondWork.trim();
        secondWork = secondWork.substring(1, secondWork.length() - 1);
        return secondWork;
    }

    private static String sendGET(String myUrl) throws IOException {
        String output = "";
        URL obj = new URL(myUrl);//GET_URL
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", USER_AGENT);
        int responseCode = con.getResponseCode();
        //System.out.println("GET Response Code :: " + responseCode);
        if (responseCode == HttpURLConnection.HTTP_OK) { // success
            BufferedReader in = new BufferedReader(new InputStreamReader(
                    con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // print result
            output = response.toString();
        } else {
            output = "GET request did not work";
        }
        return output;
    }

    public static void main(String[] args) throws IOException {
//        System.out.println(getGooglePlaceByCoor("-33.8670522,151.1957362"));
//        System.out.println(getGoogleCityByCoor(getGooglePlaceByCoor("-33.8670522,151.1957362")));
//        System.out.println(getGoogleStreetByCoor(getGooglePlaceByCoor("-33.8670522,151.1957362")));
 System.out.println(getplaceByTextSearch("fastfood koge"));
    }

}
