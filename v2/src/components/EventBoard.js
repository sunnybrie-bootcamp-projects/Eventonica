import React, { useEffect, useState } from "react";
import Event from "./Event.js";

const bodyParser = require("body-parser");
//Empty add form
const initialState = {
  name: "Event Name",
  desc: "Describe your event here.",
  category: "Event Category",
  date: new Date(),
};

function reducer(state, action) {
  switch (action.type) {
    case "editDate":
      return { ...state, date: action.value };

    case "editName":
      return { ...state, name: action.value };

    case "editDesc":
      return { ...state, desc: action.value };

    case "editCat":
      return { ...state, category: action.value };

    default:
      return state;
  }
}

function EventAddForm({tableData, setTable}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = state;
      //console.log("Attempting to post...", JSON.stringify(body)); // TEST

      const response = await fetch("http://localhost:3001/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const update = await response.json();
      setTable(update);

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h2 class="tableTitle">Add Event</h2>
      <form
        id="eventSubmission"
        action="#eventSubmission"
        onSubmit={onSubmitForm}
      >
        <label for="in-eDate">Event Date:</label>
        <input
          id="in-eDate"
          type="datetime-local"
          value={state.date}
          onChange={(e) => {
            dispatch({ type: "editDate", value: e.target.value });
          }}
        />

        <label for="in-eName">Event Name:</label>
        <input
          id="in-eName"
          type="text"
          value={state.name}
          onChange={(e) => {
            dispatch({ type: "editName", value: e.target.value });
          }}
        />

        <label for="in-eDescription">Event Description:</label>
        <textarea
          id="in-eDescription"
          rows="10"
          cols="30"
          value={state.desc}
          onChange={(e) => {
            dispatch({ type: "editDesc", value: e.target.value });
          }}
        />

        <label for="in-eCategory">Event Category:</label>
        <input
          id="in-eCategory"
          type="text"
          value={state.category}
          onChange={(e) => {
            dispatch({ type: "editCat", value: e.target.value });
          }}
        />

        <button id="submitEvent" onclick="onSubmitForm()">
          Add Event
        </button>
      </form>
    </>
  );
}

function EventBoard() {
  const [tableData, setTable] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetch("http://localhost:3001/events");
      let eventResults = await res.json();
      //console.log(eventResults);

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
        <EventAddForm tableData={tableData} setTable={setTable}/>
      </>
    );
  
}

export default EventBoard;