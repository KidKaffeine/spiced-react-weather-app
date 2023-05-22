import React from "react";

export default function RenderForm ({ entry, checkButton }) {

    if(checkButton)
 return (
    <ul>

        {entry.map((note) => {
            return   <li key={note.id} className={note.checkbox}> {note.activity}</li>
        })}
    
    </ul>
 )

}