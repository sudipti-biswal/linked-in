import React from 'react';
import "./Sidebar.css";
import {Avatar} from "@material-ui/core"
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
const Sidebar =()=>{
    
const user =useSelector(selectUser);

    const recentItems = (topic)=>(
    	<div className="sidebar-recentItem">
    	  <p>{topic}</p>
    	</div>
    )

	return(
		<>
		<div className="sidebar">
		  <div className="sidebar-top">
		    <img src="https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g" alt="" />
		    <Avatar src={user.photoUrl} className="sidebar-avatar">{user.email[0]}</Avatar>
		    <h2>{user.displayName}</h2>
		    <h4>{user.email}</h4>
          </div>
          <div className="sidebar-stars">
	          <div className="sidebar-star">
	           <p>Who viewed your profile</p>
	           <p className="sidebar-starNo">1,555</p>
	          </div>
	          <div className="sidebar-star">
	           <p>Views of your video</p>
	           <p className="sidebar-starNo">2,555</p>
	          </div>
          </div>
          <div className="sidebar-bottom">
             {recentItems('Groups')}
             {recentItems('Events')}
             {recentItems('Followed Hashtags')}

          </div>
		</div>
		</>
		)
}
export default Sidebar;