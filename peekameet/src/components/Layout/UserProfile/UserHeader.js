import React, { useContext, useEffect } from 'react'
import AboveGreen from '../../../assets/images/userprofile/userProfileHeader.svg';
// import UserImage from '../../../assets/images/userprofile/userImage.jpg';
import MsgBtn1 from '../../../assets/images/userprofile/msgbtn1.svg';
import MsgBtn2 from '../../../assets/images/userprofile/msgbtn2.svg';
import { AuthContext } from '../../../store/auth-context';
import { UserContext } from '../../../store/user-context';
import './UserHeader.css';
import { Details } from './Details';
import { Notes } from './Notes';

export const UserHeader = () => {

    const authCtx = useContext(AuthContext);
    // console.log(authCtx.userData.data[0].token);
    const userCtx = useContext(UserContext);
    useEffect(()=>{
        userCtx.getAPIData();
    }, [])
    
    return (
        <>
        <div className="main">
         <div className="headerContainer mt-3 d-flex justify-content-center">
            <div className="imageContainer">
                <img src={AboveGreen} alt="green"/>
                {
                    console.log("userdetails",userCtx)
                }
                <div className="userImage">
                    <video className="mainimage" src={userCtx.userDetails && userCtx.userDetails.data && userCtx.userDetails.data[0] && userCtx.userDetails.data[0].customer.buisnessLogo.url
                     &&   userCtx.userDetails.data[0].customer.buisnessLogo.url} alt="userImage"/>
                </div>
            </div>
         </div>   
            <div className="userStuff">
            <h1>{userCtx.userDetails && userCtx.userDetails.data && userCtx.userDetails.data[0] && userCtx.userDetails.data[0].customer.name}</h1>
            <h3>{userCtx.userDetails && userCtx.userDetails.data && userCtx.userDetails.data[0] && userCtx.userDetails.data[0].customer.jobTitle}</h3>
            <h4>{userCtx.userDetails && userCtx.userDetails.data && userCtx.userDetails.data[0] && userCtx.userDetails.data[0].customer.company}</h4>
            <button type="button" className="msg btn1 btn btn-success"><img className="msgbtn" src={MsgBtn1}/>Message</button>
            <button type="button" className="msg btn2 btn btn-success"><img className="msgbtn" src={MsgBtn2}/>Save Contact</button>
            </div>
            </div>
        </>
    )
}
