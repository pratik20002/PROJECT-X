import React from "react";

export default function Silder2Card(props) {
    return (
        <div className="card3">
            <img className="product--image" src={props.url} />
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <p>Discrpition2</p>
            <p>
                <button> Apply </button>
            </p>
        </div>
    );
}
