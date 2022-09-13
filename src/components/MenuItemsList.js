import { useEffect, useState } from "react";

import "../styles/SubItems.css";

const MenuItemsList = ({ category }) => {
  const [menuItem, setMenuItem] = useState("");
  const [menuItemData, setMenuItemData] = useState([]);

  console.log("category", category);

  function getMenuItems(menuItem) {
    return category.filter((enteredMenuItem) => {
      if (enteredMenuItem.name.toLowerCase().includes(menuItem.toLowerCase())) {
        return enteredMenuItem.name;
      }
    });
  }

  useEffect(() => {
    const resMenuItem = getMenuItems(menuItem);

    setMenuItemData(resMenuItem);
  }, [menuItem]);

  return (
    <div>
      <input
        placeholder="Enter menu item"
        onChange={(e) => setMenuItem(e.target.value)}
      />
      {menuItemData?.map((menuItem) => (
        <>
          <li id={menuItem.id}>{menuItem.name}</li>
          {menuItem["sub-items"].map((subItemName) => {
            return (
              <ul className="SubItems">
                <li id={subItemName.id}>{subItemName.name}</li>
              </ul>
            );
          })}
        </>
      ))}
    </div>
  );
};

export { MenuItemsList };
