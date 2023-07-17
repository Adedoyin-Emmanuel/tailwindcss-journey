
import React from "react";
import {Link, useNavigate} from "react-router-dom";

interface AboutProps {
    
}

const About:React.FC = (): JSX.Element => {
    const navigateTo = useNavigate();
    return (
        <React.Fragment>
            <h1>About works!</h1>
        </React.Fragment>
    );  
}

export default About;
    