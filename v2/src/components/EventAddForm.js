import React, { useEffect, useState } from "react";

//Empty add form
const initialState = {
  name: "Event Name",
  desc: "Describe your event here.",
  category: "Category",
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

    case "wipe":
        return  {...initialState};
    default:
      return state;
  }
}

//ADD FORM, CHILD OF EVENTBOARD
function EventAddForm(props) {
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
      window.alert("Event submitted!");

      props.fetchData();
      dispatch({type: "wipe", value: {initialState}});

      window.location = "/";

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h2 className="tableTitle">Add Event</h2>
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

        <input id="submitEvent" type="submit" />
      </form>
    </>
  );
}

export default EventAddForm;