import React, { useContext } from 'react'
import AboveGreen from '../../../assets/images/userprofile/userProfileHeader.svg';
// import UserImage from '../../../assets/images/userprofile/userImage.jpg';
import MsgBtn1 from '../../../assets/images/userprofile/msgbtn1.svg';
import MsgBtn2 from '../../../assets/images/userprofile/msgbtn2.svg';
import { AuthContext } from '../../../store/auth-context';
import './UserHeader.css';

export const UserHeader = () => {

    const authCtx = useContext(AuthContext);
    console.log(authCtx.getData.data[0].token);
    return (
        <>
         <div className="headerContainer mt-3 d-flex justify-content-center">
            <div className="imageContainer">
                <img src={AboveGreen} alt="green"/>
                <div className="userImage">
                    <video className="mainimage" src={authCtx.getData.data[0].customer.buisnessLogo.url} alt="userImage"/>
                </div>
            </div>
         </div>   
            <div className="userStuff">
            <h1>sdsd</h1>
            <h3>CEO</h3>
            <h4>Gold Brands </h4>
            <button type="button" className="msg btn1 btn btn-success"><img className="msgbtn" src={MsgBtn1}/>Message</button>
            <button type="button" className="msg btn2 btn btn-success"><img className="msgbtn" src={MsgBtn2}/>Save Contact</button>
            </div>
        </>
    )
}
