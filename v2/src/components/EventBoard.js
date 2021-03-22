import React, { useEffect, useState } from "react";
import Event from "./Event.js";
const bodyParser = require("body-parser");

function EventBoard() {
  const [tableData, setTable] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetch("http://localhost:3001/events");
      let eventResults = await res.json();
      console.log(eventResults);

      setTable(eventResults);

      if (!tableData) {
        setTimeout(setTable(eventResults), await res.text());
      }
    } catch (e) {
      alert("Error: Data not fetched!", e);
      console.log("Error: Data not fetched!");
    }
  }

  useEffect(() => {
    fetchData();

  }, []);

  
  /*async function renderTable() {
    await apiResponse;
    
  };*/

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
              {
              tableData ? (
                tableData.map((item, index) => {
                  return (
                    <Event
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
                    <p>"oof"</p>
                  </td>
                </tr>
              )}
            </tbody>
          }
        </table>
      </>
    );
  
}

export default EventBoard;