import React from "react";
import favoriteHeart from "../graphics/favorite.png";
import notfaveHeart from "../graphics/notfavorite.png";

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

        {/* Fave Status */}
        { props.fave ? (
          <td className="fave" headers="th-fave">
            <img src={favoriteHeart} className="Fave" />
          </td>
        ) : (
          <td className="fave" headers="th-fave">
            <img src={notfaveHeart} className="Fave" />
          </td>
        )}
      </tr>
    );
}

export default Event;
