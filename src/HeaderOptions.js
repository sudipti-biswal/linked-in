import React from "react";
import "./HeaderOption.css"
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

const HeaderOptions =({avatar,Icon,title,onClick})=>{

const user =useSelector(selectUser);

	return(
        
        <div onClick={onClick} className="headerOption">
         {Icon && <Icon className="headerOption-icon" />}
         {avatar &&
         	<Avatar className="headerOption-icon">{user?.email[0]}</Avatar>}
         <h3 className="headerOption-title">{title}</h3>
		</div>
        
		)
}
export default HeaderOptions;