import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {auth} from "./firebase"
import { logIn } from './features/userSlice';
import "./Login.css";

const Login =() => {

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[name,setName]=useState("");
const[profilePic,setProfilePic]=useState("");
const dispatch = useDispatch()

    const loginToApp =(e)=>{
    	e.preventDefault()


    	auth.signInWithEmailAndPassword(email,password)
    	.then(userAuth=>{
    		dispatch(logIn({
    			   email:userAuth.user.email,
                   uid:userAuth.user.uid,
                   displayName:userAuth.user.displayName,
                   photoUrl:userAuth.user.photoURL,
    		})
    		)
    	}).catch(error=>alert(error))
    	
    }
	const register = ()=>{
      if(!name){
      	return alert("Please enter your name");
          }

      	auth
      	.createUserWithEmailAndPassword(email,password)
      	.then((userAuth)=>{
      		userAuth.user.updateProfile({
      			displayName:name,
      			photoURL:profilePic,
      		})
      		.then(()=>{
      			dispatch(logIn({
                   email:userAuth.user.email,
                   uid:userAuth.user.uid,
                   displayName:name,
                   photoUrl:profilePic,
      			})
      			)
      		})
      	}).catch(error => alert(error))
      
	}
	return(
		<>
		  <div className="login">
		    <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="logo" />
		    <form>

		      <input 
		         value={name} 
		         onChange={(e)=>setName(e.target.value)} 
		         type="text" 
		         placeholder="full name(require)"
		       />
		      <input 
		         value={profilePic} 
		         onChange={(e)=>setProfilePic(e.target.value)} 
		         type="text" 
		         placeholder="profile picture url(optional)"
		      />
		      <input 
		         value={email} 
		         onChange={(e)=>setEmail(e.target.value)} 
		         type="email" 
		         placeholder="Email id(require)" 
		      />
		      <input 
		         value={password} 
		         onChange={(e)=>setPassword(e.target.value)} 
		         type="password" 
		         placeholder="Password(require)" 
		      />
               <button type="submit" onClick={loginToApp}>Sing In</button>
		    </form>
		    <p>Not a Member ?
                <span className="login-register" onClick={register}>Register Now</span>
		    </p>
		  </div>
		</>
		)
}
export default Login;