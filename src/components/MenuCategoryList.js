import { useEffect, useState } from "react";
import restourantData from "../data/restourant.json";
import "../styles/Categories.css";

import { MenuItemsList } from "./MenuItemsList";

const MenuCategoryList = () => {
  const [menuCategory, setMenuCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);

  function getMenuCategory(category) {
    return restourantData.data.categorys.filter((enteredCategory) => {
      if (enteredCategory.name.toLowerCase().includes(category.toLowerCase())) {
        return enteredCategory.name;
      }
    });
  }

  useEffect(() => {
    const resCategory = getMenuCategory(menuCategory);
    setCategoryData(resCategory);
  }, [menuCategory]);

  return (
    <div className="Categories">
      <h3>Menu category</h3>
      <input
        placeholder="Enter category"
        onChange={(e) => setMenuCategory(e.target.value)}
      />
      <ol>
        {categoryData?.map((category) => (
          <div>
            <li key={category.id}>{category.name}</li>
            <ul>
              <MenuItemsList category={category["menu-items"]} />
            </ul>
          </div>
        ))}
      </ol>
    </div>
  );
};

export { MenuCategoryList };
