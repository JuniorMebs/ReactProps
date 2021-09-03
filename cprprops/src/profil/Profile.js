import React from 'react';
import PropTypes from "prop-types";


const Profile = props => {
    return (
    <>
        <h2>{props.FullName}</h2>
        <h2>{props.bio} </h2>
        <h2>{props.Profession}</h2>
        <div style={{color : "red", textAlign : "center"}}>{props.children}</div>
        <button onClick={(handleclick) => props.alertMyInput(``)}>
    ClickMe
</button>
    
    </>
    );
};

Profile.defaulProps = {
    FullName : "junior Ousman",
    bio : "informaticien gameur expert",
    Profession : "dev app",
    children : "",
}

Profile.PropTypes = {
    FullName:PropTypes.string,
    bio:PropTypes.string,
    Profession:PropTypes.string,
    children:PropTypes.string,
}


export default Profile;