import firebaseInitial from "../Pages/LoginPage/Firebase/Firebase.init";
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut,signInWithPopup,updateProfile , GoogleAuthProvider ,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
//initialize firebase app
firebaseInitial()

//create a hook
const useFirebase = () => {
     const [user, setUser]=useState({})
    const [ error, setError ] = useState('');
    const [isLoading, setLoading]=useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password,name, history) => {
          setLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
              .then((result) => {
             history.push('/')
           
              const newUser = { email, displayName: name }
                setUser(newUser);
                //send name in firebase
                  updateProfile(auth.currentUser, {
                    displayName: name
                    }).then(() => {
                   
                    }).catch((error) => {
                   
                    });

             setError('')
        })
        .catch((error) => {
            setError(error.message);
        
        })
       .finally(()=> setLoading(false));
    }
    
    const signInWithGoogle = (location, history) => {
                 setLoading(true)
                signInWithPopup(auth,googleProvider)
                .then((result) => {
                
                    const user = result.user;
                    setError('')
                }).catch((error) => {
                        setError(error.message);
                }).finally(()=> setLoading(false));
    }

    //observer
    useEffect(() => {
         setLoading(true)
       const unsubscribe=  onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                     setError('')
                } else {
                    setUser({});
                }
           setLoading(false)
         });
           return ()=> unsubscribe
    },[])

    const logOut = () => {
         setLoading(true)
        signOut(auth).then(() => {
            setError('')
        }).catch((error) => {
              setError(error.message)
        })
         .finally(()=> setLoading(false));
    }

    const loginUser = (email, password,location, history) => {
         setLoading(true)
           signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                   const destination = location?.state?.from || '/';
                   history.push(destination);
                  setError('')
            })
            .catch((error) => {
                 setError(error.message);
            })
            .finally(()=> setLoading(false));

    }
    
    return {
        user,
        error,
        isLoading,
        registerUser,
        signInWithGoogle,
        loginUser,
        logOut
    }
}

export default useFirebase;