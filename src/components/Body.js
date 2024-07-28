import React from "react";


export default function Body(props) {
    return (
        <div className="body">
            <div className="body--img-box">
            <img src={require(`../assets/${props.item.imageUrl}`)} alt={props.item.title} className="body--img"/>
            </div>
            <div className="body--infos">
            <h2 className="body--location">{props.item.location}</h2>
            <a href={props.item.googleMapsUrl} className="body--location-url">View on Google Maps</a>
            <h3 className="body--title">{props.item.title}</h3>
            <p className="body--date">{props.item.startDate} - {props.item.endDate}</p>
            <p className="body--description">{props.item.description}</p>
            </div>
        </div>
    )
}