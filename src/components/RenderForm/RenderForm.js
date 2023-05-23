import "./RenderForm.css"

export default function RenderForm ({ entry, onDeleteButton }) {

 return (  
    <>
    <ul className="unordered__list">
      {entry.map((note) => {
        return  <li key={note.id} className="list__item"> <button id={note.id} onClick={() => { onDeleteButton(note.id)}} className="list__button"> x</button> {note.activity}</li>
      })}
    </ul>
    </>
 )

}