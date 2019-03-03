import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <div>
            <div className="container-fluid">
                <div className="header-row row">
                    <div className="col-2  d-flex justify-content-center align-items-center"></div>
                    <div className="col-4  d-flex justify-content-center align-items-center">{props.message}</div>
                    <div className="col-3  d-flex justify-content-center align-items-center">Score:{props.score}</div>
                    <div className="col-3  d-flex justify-content-center align-items-center">Top Score:{props.topScore}</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
