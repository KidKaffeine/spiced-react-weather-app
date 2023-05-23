import "./Form.css"

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
<form onSubmit={handleFormSubmit} htmlFor="form" className="form">
    <label htmlFor="activity" className="form__label">My next activity:</label>
    <input type="text" name="activity" id="activity" className="form__input-activity"/>
    <label htmlFor="checkbox" className="form__label">Good weather activity</label>
    <input type="checkbox" name="checkbox" id="checkbox" className="form__input-checkbox" /> 
    <input type="submit" name="button "id="button" className="form__button"/>
</form>

)

}