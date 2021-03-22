import React from "react";

const initialState = {
    name: "",
    desc: "Describe your event here.",
    category: "",
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

    return (
        <>
            <h2 class="tableTitle">Add Event</h2>
            <form id="eventSubmission" action="#eventSubmission">
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
                onclick="EventBoard.getSubmittedEvent()" 
                action="#eventSubmission">
                    Add Event
                </button>
            </form>
        </>
    );
}

export default EventAddForm;