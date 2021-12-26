import React from "react";
import Maincard from "../components/Maincard";
class Home extends React.Component {
    render() {
        return(
            <div>
                <center>
                <Maincard 
                title="When the going gets tough, the tough get going"
                desc="The New Balance 997"
                contact="Get it at your local dealer, or not. We won't judge."
                ></Maincard> 
                </center>
            </div>
        )
    };
};

export default Home;