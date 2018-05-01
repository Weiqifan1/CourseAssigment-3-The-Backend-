/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Ejer
 */
public class StatisticsFacadeIT {
    
    public StatisticsFacadeIT() {
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
        int a = 3;
        int b = 6;
        int expResult = 9;
        int result = StatisticsFacade.addReviewsDatabaseAndApi(a, b);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
    
    }
    
}
