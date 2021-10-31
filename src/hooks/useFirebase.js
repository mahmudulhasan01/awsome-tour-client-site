import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider , onAuthStateChanged, signOut} from "firebase/auth";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true);


    console.log(user);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const singInUseingGoogle = ()=>{
      setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
        
        .finally(() => setIsLoading(false));
    };


     const singInUseingGithub = () =>{
          signInWithPopup(auth, gitHubProvider)
          .then(result => {
            setUser(result.user);
            //   const user = result.user
              console.log(user)
          })
     }

    useEffect( ()=>{
        onAuthStateChanged(auth,(user)=>{
            if (user){
                // console.log('inside state change',user)
                setUser(user)
            }
            else {
              setUser({})
          }
          setIsLoading(false);

        })
    },[]);

    const logOut = () =>{
      setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(() => setIsLoading(false));
    }
    return{
        user,
        error,
        isLoading,
        singInUseingGoogle,
        singInUseingGithub,
        logOut
    }
};


export default useFirebase;

