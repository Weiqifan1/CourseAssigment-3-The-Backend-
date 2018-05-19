/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

/**
 *
 * @author Ejer
 */
public class Error {
    
   private String errormessage;
   private int errorid;

    public Error(String errormessage, int errorid) {
        this.errormessage = errormessage;
        this.errorid = errorid;
    }

    Error() {
     
    }

    public String getErrormessage() {
        return errormessage;
    }

    public void setErrormessage(String errormessage) {
        this.errormessage = errormessage;
    }

    public int getErrorid() {
        return errorid;
    }

    public void setErrorid(int errorid) {
        this.errorid = errorid;
    }
   
    
}
