import React from "react";
import {Text} from "@arwes/core";
import logo from "../logo.svg";
import border from "../border.svg";

const duration = {enter: 1000};

const Base = () => {

    return (
        <div className="base">

                <div className="base_wrap">
                    <img src={logo} className="base_logo" alt="logo"/>
                    <Text as='h1' animator={{duration}}>serverless</Text>
                </div>

                <img className="base_border" src={border} alt="border"/>

        </div>

    );
}
export default Base;