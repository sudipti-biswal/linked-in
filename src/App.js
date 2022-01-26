import React,{useEffect} from 'react';
import { selectUser,logOut,logIn } from './features/userSlice';
import {useSelector,useDispatch} from "react-redux";
import {auth} from "./firebase"
import './App.css';
import Login from "./Login";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";



function App() {
 
 const user = useSelector(selectUser);
  const dispatch= useDispatch();
 useEffect(()=>{
  auth.onAuthStateChanged((userAuth) =>{
    if(userAuth){
       //user is logined 
       dispatch(logIn({
                   email:userAuth.email,
                   uid:userAuth.uid,
                   displayName:userAuth.displayName,
                   photoUrl:userAuth.photoUrl,
       }))
    }else{
       //user is logout
       dispatch(logOut())
    }
  })
 })

  return (
    <div className="app">  
    
    {!user ? <Login/> :(<>
       <Header/>
      <div className="app-body">
        <Sidebar/>
         <Feed/>
         <Widgets/>

      </div>
      </>
      )}

    
    
   
   

    </div>
  );
}

export default App;
