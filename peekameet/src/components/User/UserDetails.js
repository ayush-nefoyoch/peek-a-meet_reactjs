import React, { useContext } from 'react'
import './UserDetails.css';
import LeftQuote from '../../assets/images/userprofile/leftquote.svg';
import RightQuote from '../../assets/images/userprofile/rightquote.svg';
import { AuthContext } from '../../store/auth-context';

export const UserDetails = () => {

    const userCtx = useContext(AuthContext);

    return (<>
        <div className="upperContainer">
        <div className="upperContainerContent">
        <div className="content">
            <img src={LeftQuote}/><div className="inspired">Inspired by the world and everything it has to offer.</div><img src={RightQuote}/>
            </div>
            </div>
            <p className="upperpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eros sit amet sem viverra porttitor vel quis justo. Sed tempus, lorem suscipit vulputate mollis, mi dolor bibendum mi, non auctor nisi est nec nunc. More</p>
        <div className="displayData">
            <div className="industry">
            <p className="displayPara">Industry(s)</p>
                <span className="web">Web Development</span>
                <span className="fine">{userCtx.userData.data[0].customer.industry[0]}</span>
            </div>
            <div className="groups">
            <p className="displayPara">Organizations and Groups</p>
                <span className="iaw">IAW</span>
                <span className="rugby">{userCtx.userData.data[0].customer.organisationGroups[0]}</span>
            </div>
            <div className="interests">
            <p className="interests">Interests and Activities</p>

                <span className="hiking">Hiking</span>
                <span className="speaking">Professional Speaking</span>
                <span className="guitar">{userCtx.userData.data[0].customer.interestActivities[0]}</span>
            </div>
            <div className="alumni">
            <p className="displayPara">Alumni</p>
                <span className="spark">Spark Colorado</span>
                <span className="uc">{userCtx.userData.data[0].customer.alumni[0]}</span>
            </div>
            <div className="languages">
            <p className="displayPara">Languages</p>
                <span className="english">{userCtx.userData.data[0].customer.languages[0]}</span>
                <span className="spanish">Spanish</span>
                <span className="hebrew">Hebrew</span>
            </div>
        </div>
            <div className="exchange">
                <p className="exchangeContent">Exchange Phone Number & Email</p>
            </div>
            <div className="address">
                <p className="business">Business Address</p>
                <p className="digital">{userCtx.userData.data[0].customer.businessAddress}</p>
                <p className="sycamore">123 Sycamore Dr</p>
                <p className="torrington">Torrington CT, {userCtx.userData.data[0].customer.businessPhone}</p>
            </div>
        </div>
        </>
    )
}
