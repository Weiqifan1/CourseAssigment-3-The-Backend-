/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import sun.launcher.resources.launcher;

/**
 *
 * @author Ejer
 */
public class StatisticsFacade {

    public static int addReviewsDatabaseAndApi(int a, int b) {
        int c = a + b;
        return c;
    }

    
    public static double calculateAverageReview(ArrayList<Double> AverageReviewList) {

   

        Double average = AverageReviewList.stream().mapToDouble(val -> val).average().orElse(0.0);

        return average;
    }

//    public static void main(String[] args) {
//    //    Double testmethoedvalculation = calculateAvera;
//        System.out.println(testmethoedvalculation);
//    }

}
