import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../components/Login/Firebase/firebase.init";



initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [users,setUsers] = useState({})
    const googleProvider = new GoogleAuthProvider();
   


    const signInUsingGoogle = () => {
     return signInWithPopup(auth,googleProvider)
      
    }

    useEffect( () =>{
      const unsubscribe =  onAuthStateChanged(auth, user => {
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
            
        })
        return () => unsubscribe
    } , [])

    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUsers( { } )
        })

    }

    return{
        users,
        signInUsingGoogle,
        logOut,

    }
}
export default useFirebase;