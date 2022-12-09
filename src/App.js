import React, {Component} from "react";
import Project from "./Projects";
import Socials from "./Socials";
import profile from "./assets/profile.jpg"

class App extends Component
{
    state = {displayBio: false}

toggleDisplayBio = () =>

{
    this.setState({displayBio: !this.state.displayBio});
}


    render()
    {
        return(
            <div>
                <img src={profile} alt="Profile" className="profile"></img>
                <h1>
                    Hello!
                </h1>
                <p>I am Srishti Singh, an application developer</p>
                <p>
                    I like to learn and work on meaningful projects
                </p>
                {
                    this.state.displayBio ? (<div>
                        <p>I live in Haldwani, Nainital</p>
                        <p>
                            I am currently learning React
                        </p>
                        <p> My hobbies include Digital Art </p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>) : (<>
                    <button onClick={this.toggleDisplayBio}>
                        Read More</button></>)
                }
                <hr/>
                <Project />
                <hr/>
                <Socials />
            </div>
        );
    }
}

export default App;
