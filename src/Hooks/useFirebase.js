import firebaseInitial from "../Pages/LoginPage/Firebase/Firebase.init";
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signOut,signInWithPopup,getIdToken,updateProfile , GoogleAuthProvider ,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
//initialize firebase app
firebaseInitial()

//create a hook
const useFirebase = () => {
     const [user, setUser]=useState({})
    const [ error, setError ] = useState('');
    const [ isLoading, setLoading ] = useState(true);
    const [ admin, setAdmin ] = useState(false)
    const [token, setToken]=useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password,name, history) => {
          setLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
              .then((result) => {
             history.push('/')
           
              const newUser = { email, displayName: name }
                  setUser(newUser);
                  
                  //send to the save user
                  saveUser(email, name,'POST');

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
                      const destination = location?.state?.from || '/';
                      history.push(destination);
                    const user = result.user;
                    saveUser(user.email, user.displayName, 'PUT')
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
                    getIdToken(user).then(idToken =>{setToken(idToken);})
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


    //save user data in mongodb
    const saveUser = (email, displayName,method) => {
        const user = { email, displayName };
        fetch('https://infinite-sea-38686.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        }).then()
    }

    //check admin
    useEffect(() => {
        fetch(`https://infinite-sea-38686.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])
    
    return {
        user,
        error,
        token,
        isLoading,
        registerUser,
        signInWithGoogle,
        loginUser,
        logOut,
        admin
    }
}

export default useFirebase;