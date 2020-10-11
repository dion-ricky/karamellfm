import { MediaPlayer } from './mediaplayer';
import React from "react";
import ReactDOM from "react-dom";
import 'regenerator-runtime/runtime';
import "../css/tw-main.css";
import ellipse from "../ellipse.png";

class KaramellMixtape extends React.Component {

    constructor() {
        super();


    }

    render() {
        return (
            <div className="container mx-auto">
                <div className="mx-auto sm:min-w-full w-1/2 shadow rounded grid grid-cols-4">
                    <div className="relative col-span-1">
                        <img className="absolute" src={ellipse} />
                    </div>
                    <div className="col-span-3">
                        lorem ipsum dolor sit amet
                    </div>
                </div>
            </div>
        );
    }

}

let App = document.getElementById('app');

ReactDOM.render(<KaramellMixtape/>, App);