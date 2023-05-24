import "./RenderForm.css"

export default function RenderForm ({ entry, onDeleteButton }) {
 console.log(onDeleteButton)
 return (  
    <>
    <ul className="unordered__list">
      {entry.map((note) => {
        return  <li key={note.id} className="list__item"> 
        <button id={entry.id} onClick={() => {onDeleteButton(note.id)}} className="list__button">x</button> 
        {note.activity}
        </li>
      })}
    </ul>
    </>
 )

}