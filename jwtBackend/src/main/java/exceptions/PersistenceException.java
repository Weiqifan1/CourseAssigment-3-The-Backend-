/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exceptions;


import java.sql.SQLException;
import java.util.logging.Level;

/**
 *
 * @author Ticondrus
 */
public class PersistenceException extends Exception {
    
    public PersistenceException(String message) {
        super(message);
    }

    public PersistenceException() {
        super("SQL Database Connection issue. ");
    }  
}
    
