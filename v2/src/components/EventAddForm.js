import React from "react";

const initialState = {
    name: "Event Name",
    desc: "Describe your event here.",
    category: "Event Category",
    date: new Date(),

};

function reducer(state, action) {
    switch(action.type){
        case "editDate":
            return {...state, date: action.value};

        case "editName":
            return {...state, name: action.value};
            
        case "editDesc":
            return {...state, desc: action.value};

        case "editCat":
            return {...state, category: action.value};
            
        default:
            return state;
    };
}

function EventAddForm(){
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

      window.location = "/";
    } catch (err) {
        console.error(err.message);
    }
      };

    return (
        <>
            <h2 class="tableTitle">Add Event</h2>
            <form id="eventSubmission" action="#eventSubmission" onSubmit={onSubmitForm}>
                <label for="in-eDate">Event Date:</label>
                <input 
                id="in-eDate" 
                type="datetime-local" 
                value={state.date} 
                onChange={ 
                    (e) => { dispatch({ type: "editDate", value: e.target.value }) } 
                }
                />

                <label for="in-eName">Event Name:</label>
                <input 
                id="in-eName" 
                type="text" 
                value={state.name} 
                onChange={ 
                    (e) => { dispatch({ type: "editName", value: e.target.value }) }
                }
                />

                <label for="in-eDescription">Event Description:</label>
                <textarea 
                id="in-eDescription" 
                rows="10" 
                cols="30" 
                value={state.desc} 
                onChange={
                    (e) => { dispatch({ type: "editDesc", value: e.target.value }) } 
                }
                />
               
                <label for="in-eCategory">Event Category:</label>
                <input 
                id="in-eCategory" 
                type="text"  
                value={state.category} 
                onChange={ 
                    (e) => { dispatch({ type: "editCat", value: e.target.value }) }
                }
                />
                
                <button 
                id="submitEvent" 
                onclick="onSubmitForm()">
                    Add Event
                </button>
            </form>
        </>
    );
}

export default EventAddForm;