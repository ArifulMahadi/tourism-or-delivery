import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../components/Login/Firebase/firebase.init";



initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [users,setUsers] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
   


    const signInUsingGoogle = () => {
        setIsLoading()
     return signInWithPopup(auth,googleProvider)
     .finally(()=> setIsLoading(false))     
    }
    useEffect( () =>{
      const unsubscribe =  onAuthStateChanged(auth, user => {
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe
    } , [])

    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUsers( { } )
        })
        .finally(() => setIsLoading(false))
    }

    return{
        users,
        isLoading,
        signInUsingGoogle,
        logOut,

    }
}
export default useFirebase;