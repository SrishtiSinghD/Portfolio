import React , { Component } from "react";
import SOCIALS from "./data/socials";


class Social extends Component
{
    render()
    {
        const {name, image, link} = this.props.social;
        return(
            <div style={{display: "inline-block" , margin: 10} }>
                <a href = {link}><img src={image} alt={name} style={{height: 100, width:100}}></img></a>

            </div>
        );
    }
}

class Socials extends Component
{
    render()
    {
        return(

            <div>
                <h3>Connect with Me</h3>
                <div>
                    {SOCIALS.map(SOCIAL => {
                        return(
                            <Social key={SOCIAL.id} social={SOCIAL}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}


export default Socials;