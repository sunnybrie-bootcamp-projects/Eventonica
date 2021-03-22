import React, { useEffect } from "react";
import Event from "./Event.js";
const bodyParser = require("body-parser");

async function EventBoard() {
  const [tableData, setTable] = React.useState(null);

  
  /*setAPIResponse(() => {
           //let data = "";
           // res.forEach(row => {
           //   data += (JSON.stringify(row)) + "-,-";
           // });*

          let data = res.map((row) => {
            return JSON.stringify(row);
          });

          return data;
        })*/

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch("http://localhost:9000/testAPI");
        let eventResults = await res.text();
          
        setTable(JSON.stringify(eventResults));
      } catch (e) {
        console.log("Error: Data not fetched!");
      }
    }

    fetchData();
  }, []);

  /*async function renderTable() {
    await apiResponse;
    return ( 
    <>
      <h2 className="tableTitle">Upcoming Events</h2>
      <h3>{typeof apiResponse}</h3>
      
      <h3>{async () => { await apiResponse.length}}</h3>

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
          {(apiResponse) 
          ? apiResponse.map((item, index) => {
            return (
            <Event
              key={index}

              eventName={item.name}
              eventDescription={item.description}
              eventDate={item.event_date}
              eventCategory={item.category}
            />
            )
          })
          : <tr><td><p>"oof"</p></td></tr>}
        </tbody>
        }
      </table>
    </>
    );
  };*/

  return <h2>{tableData}</h2>;
}

export default EventBoard;