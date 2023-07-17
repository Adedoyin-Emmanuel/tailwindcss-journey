
import React from "react";
import {Link, useNavigate} from "react-router-dom";

interface ContactProps {
    
}

const Contact:React.FC = (): JSX.Element => {
    const navigateTo = useNavigate();
    return (
        <React.Fragment>
            <h1>Contact works!</h1>
        </React.Fragment>
    );  
}

export default Contact;
    