import { useState } from "react";

import "../styles/SubItems.css";

const MenuItemsList = ({ category }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState();

  return (
    <div>
      <h3>Available foods</h3>
      {category.map((menuItem) => {
        return (
          <>
            <button onClick={() => setSelectedMenuItem(menuItem)}>
              {menuItem.name}
            </button>
            <br />
          </>
        );
      })}
      <h3>Ingredients</h3>
      {selectedMenuItem
        ? selectedMenuItem["sub-items"].map((item) => {
            return (
              <div className="SubItems">
                <ul>
                  <li key={item.id}>{item.name}</li>
                </ul>
              </div>
            );
          })
        : []}
    </div>
  );
};

export { MenuItemsList };
