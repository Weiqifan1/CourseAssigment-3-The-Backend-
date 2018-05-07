/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.util.ArrayList;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Ticondrus
 */
public class StatisticsFacadeTest {
    
    public StatisticsFacadeTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of addReviewsDatabaseAndApi method, of class StatisticsFacade.
     */
    @Test
    public void testAddReviewsDatabaseAndApi() {
        System.out.println("addReviewsDatabaseAndApi");
        int a = 1;
        int b = 2;
        int expResult = 3;
        int result = StatisticsFacade.addReviewsDatabaseAndApi(a, b);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
    }

    /**
     * Test of calculateAverageReview method, of class StatisticsFacade.
     */
    @Test
    public void testCalculateAverageReview() {
        System.out.println("calculateAverageReview");
        ArrayList<Double> AverageReviewList = new ArrayList<>();
        AverageReviewList.add(4.0);
         AverageReviewList.add(2.0);
          AverageReviewList.add(7.0);
        double expResult = 4.3;
        double result = StatisticsFacade.calculateAverageReview(AverageReviewList);
        assertEquals(result, expResult, 0.1);
         // TODO review the generated test code and remove the default call to fail.
       // fail("The test case is a prototype.");
    }

   
    /**
     * Test of main method, of class StatisticsFacade.
     */
  
    
}
