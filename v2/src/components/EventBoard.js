import React, { useEffect, useState, useCallback } from "react";
import Event from "./Event.js";
import EventAddForm from "./EventAddForm";

function EventBoard(props) {
  const [tableData, setTable] = useState([]);
  const [needsUpdate, updateSwitch] = useState(false);

  const fetchData = async () => {
    try {
      let res = await fetch("http://localhost:3001/events");
      let eventResults = await res.json();
      //console.log(eventResults);

      setTable(eventResults);

    } catch (e) {
      alert("Error: Data not fetched!", e);
      console.log("Error: Data not fetched!");
    }
  }

  useEffect(() => {
    fetchData();
    updateSwitch(false);

  }, [tableData]);

    return (
      <>
        <h2 className="tableTitle">Upcoming Events</h2>

        <table id="eventTable">
          <thead id="eventListHeader" className="listHeader">
            <tr>
              <th id="th-date">
                <h3>date</h3>
              </th>{" "}
              <th id="th-description">
                <h3>event</h3>
              </th>{" "}
              <th id="th-category">
                <h3>category</h3>
              </th>{" "}
              <th id="th-fave">
                <h3>♡</h3>
              </th>
            </tr>
          </thead>

          {
            <tbody id="eventList">
              {tableData ? (
                tableData.map((item, index) => {
                  return (
                    <Event
                      fave={(props.currentUser.favorite_events).includes(item.event_id)}
                      key={item.event_id}
                      eventName={item.name}
                      eventDescription={item.description}
                      eventDate={item.event_date}
                      eventCategory={item.category}
                    />
                  );
                })
              ) : (
                <tr>
                  <td>
                    <p>Something went wrong... :c</p>
                  </td>
                </tr>
              )}
            </tbody>
          }
        </table>
        <EventAddForm fetchData={fetchData}/>
      </>
    );
  
}

export default EventBoard;