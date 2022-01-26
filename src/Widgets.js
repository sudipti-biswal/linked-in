import React from "react";
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

const newsArticle = (heading,subtitle) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
      <FiberManualRecordIcon/>
      </div>
      <div className="widgets-articleRight">
      <h4>{heading}</h4>
      <p>{subtitle}</p>
      </div>
    </div>
)

	return(
		<>
		  <div className="widgets">
		  <div className="widgets-header">
		    <h2>LinkedIn News</h2>
		    <InfoIcon/>
		  </div>
		  {newsArticle("LinkedIn with REACT.JS (with Redux & Firebase)","Top News-2929 viewers")}
		  {newsArticle("LinkedIn with REACT.JS (with Redux & Firebase)","Top News-2929 viewers")}
		  {newsArticle("LinkedIn with REACT.JS (with Redux & Firebase)","Top News-2929 viewers")}
		  {newsArticle("LinkedIn with REACT.JS (with Redux & Firebase)","Top News-2929 viewers")}
		  {newsArticle("LinkedIn with REACT.JS (with Redux & Firebase)","Top News-2929 viewers")}
		  
		  
		  </div>
		</>
		)
}
export default Widgets;