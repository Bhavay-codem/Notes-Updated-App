import React from "react";
import deleteIcon from "../../assets/delete.svg";
import Format from "./Format";
import "./Note.css";


function Note(props) {
  const formatDate = (value) => {

    var showdate=new Date();
    var display_date=showdate.getDate() 
    var display_month=showdate.getMonth() 
    var display_year=showdate.getFullYear();
    var displaytime=showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds()

    return `${displaytime} ${display_date}/${display_month}/${display_year}`;
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <p>{formatDate(props.note.time)}</p><br/>
      <Format/>
      <div className="note_footer">
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
