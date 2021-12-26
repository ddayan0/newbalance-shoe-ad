import React from "react";
import "./Maincard.css";
import newbalance from './NB997.png';


class Maincard extends React.Component {
    render() {
        return(
            <div className="hero .container-fluid">
                <div class="text-center">
                <h1>{this.props.title}</h1>
                <img src={newbalance} alt='new balance 997'/>
                <div class="main-text">
                        <h2>{this.props.desc}</h2>
                        <h3>{this.props.contact}</h3>
                    </div>
                </div>
            </div>
        )
    };
};

export default Maincard;