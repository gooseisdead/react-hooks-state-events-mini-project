import React from "react";

function CategoryFilter({ categories }) {

  const categoryButtons = categories.map((catbutt) => <button onClick={() => console.log("clicked")} key={catbutt}>{catbutt}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
