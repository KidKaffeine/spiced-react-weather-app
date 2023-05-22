import React from "react";

export default function Form({onAddActivity}) {

    function handleFormSubmit(event){
      event.preventDefault();   
        const input = new FormData(event.target); 
        const data = Object.fromEntries(input)
         onAddActivity(data)
         event.target.reset(); 
         event.target.elements.activity.focus()
    }

return (
<form onSubmit={handleFormSubmit} htmlFor="form">
    <h1>This is a form</h1>
    <label htmlFor="activity">Name</label>
    <input type="text" name="activity" id="activity"/>
    <label htmlFor="activity">Good weather activity</label>
    <input type="checkbox" name="checkbox" id="checkbox"/> 
    <input type="submit" name="button "id="button"/>
</form>

)

}