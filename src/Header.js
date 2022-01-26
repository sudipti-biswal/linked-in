import React from "react";
import HeaderOptions from './HeaderOptions';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch} from "react-redux";
import {auth} from "./firebase";
import { logOut } from './features/userSlice';


const Header = () => {

const dispatch = useDispatch();

const logOutApp = () => {
    dispatch(logOut());
    auth.signOut()
}

	return(
		<>
		<div className="header">
		 <div className="header-left">
		  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/30px-LinkedIn_logo_initials.png" alt="logo" />
		  <div className="header-search">
		  <SearchIcon/>
		    <input type="text" placeholder="Search" />
		  </div>
		 </div>
		 <div className="header-right">
		 <HeaderOptions Icon={HomeIcon} title="home" />
		 <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
		 <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
		     <HeaderOptions  
		         Icon={ChatIcon} 
		         title="Messages" />
		     <HeaderOptions 
		         Icon={NotificationsIcon} 
		         title="Notifications" />
         <HeaderOptions       
           avatar={true} 
           title="me" />

         <HeaderOptions 
         onClick={logOutApp}
           Icon={ExitToAppIcon} 
           title="LogOut" />
		 </div>
		</div>
 		</>
		)
}
export default Header;