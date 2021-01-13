import React from "react";

function Task({ text, category }) {


  function deleteComment (e) {
    //    console.log(e.target.parentElement)
       let thisParent = e.target.parentElement
       thisParent.remove()
    }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteComment} className="delete">X</button>
    </div>
  );
}

export default Task;
