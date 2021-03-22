import React from "react";
//import favorite from "../graphics/favorite.png";

function Event(props){

    return (
      <tr className="eventListItem">
        {/* Event Date */}
        <td className="eventDate" headers="th-date">
          {props.eventDate}
        </td>

        {/* Event Description */}
        <td className="description" headers="th-description">
          <h4 className="eventName">{props.eventName}</h4>
          <p className="eventDescription">{props.eventDescription}</p>
        </td>

        {/* Event Category */}
        <td className="category" headers="th-category">
          {props.eventCategory}
        </td>

        {/* Fave Status 
            
            <td className="fave" headers="th-fave">
                <img src=`{favorite}` className="Fave" />
            </td>
*/}
      </tr>
    );
}

export default Event;
