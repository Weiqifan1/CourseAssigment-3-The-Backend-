package entity;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import exceptions.AuthenticationException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.persistence.Query;

/**
 *
 * @author lam@cphbusiness.dk
 */
public class UserFacade {
    
    

    //Default EntityManagerFactory
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
    private static final UserFacade instance = new UserFacade();
    
    
    
    private UserFacade(){}
    
    /**
     * UserFacade(): Gets an instance of the whole UserFacade class and returns it.
     * @return instance
     */
    
    public static UserFacade getInstance(){
        return instance;
    }
    
    /**
     * getVeryfiedUser(): Gets a user that pass the login autothication by EntityManager function, and returns it.
     * @param username
     * @param password
     * @return user
     * @throws AuthenticationException 
     * 
     */
    
    public User getVeryfiedUser(String username, String password) throws AuthenticationException {
        
        EntityManager em = emf.createEntityManager();
        User user;
        try {
            user = em.find(User.class, username);
            if (user == null || !user.verifyPassword(password)) {
                throw new AuthenticationException("Invalid user name or password");
            }
        } finally {
            em.close();
        }
        return user;
    }
    
   public static List< User> getaUserList(EntityManager em) {

       // Query q = em.createQuery("SELECT u.userName FROM User u");
         Query q = em.createQuery("SELECT u.userName, r.roleName FROM User u, Role r INNER JOIN r.userList, u.roleList");
        List<User> userList =q.getResultList();
        System.out.println(userList);
//        for (int i = 0; i < userList.size(); i++) {
//         
//            userList.add( userList.get(i));//persons.put(i, personnes.get(i));
//        }

        return userList;

    }
   
   public static List<Role> getaUserListRole(EntityManager em) {

        Query q = em.createQuery("SELECT r.roleName FROM Role r");
        List<Role> userListRole =q.getResultList();
        System.out.println(userListRole);

        return userListRole;

    }
    

    public static void main(String[] args) {
          EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
            EntityManager em = emf.createEntityManager();
        System.out.println(getaUserList(em));
    }
   
}
