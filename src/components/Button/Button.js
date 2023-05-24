import "./Button.css"

export default function Button ( {entry, handleButtonDelete}  ) {

    console.log( handleButtonDelete)
 return ( <button id={entry.id} onClick={() => { handleButtonDelete(entry.id)}} className="list__button"> x</button>)

}

