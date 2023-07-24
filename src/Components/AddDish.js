import { React, useState } from "react";

const AddDish = (props) => {
//   console.log("addDish component ");
  const [uniqueId, setUniqueId] = useState("");
  const [dishName, setDishName] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [tableName, setTableName] = useState("table 1");

  const idChangeHandler = (event) => {
    setUniqueId(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setDishName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setDishPrice(event.target.value);
  };

  const tableChangeHandler = (event) => {
    console.log(event.target.value);
    setTableName(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddDish(uniqueId, dishName, dishPrice, tableName);
    setUniqueId("");
    setDishName("");
    setDishPrice("");
    setTableName("table 1");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>unique Id</label>
        <input
          id="id"
          type="number"
          onChange={idChangeHandler}
          value={uniqueId}
        ></input>
        <label>Dish Name</label>
        <input
          id="dishName"
          type="text"
          onChange={nameChangeHandler}
          value={dishName}
        ></input>
        <label>price</label>
        <input
          id="price"
          type="number"
          onChange={priceChangeHandler}
          value={dishPrice}
        ></input>
        <select
          id="tableDropDown"
          onChange={tableChangeHandler}
          value={tableName}
        >
          <option value="table 1">table 1</option>
          <option value="table 2">table 2</option>
          <option value="table 3">table 3</option>
        </select>
        <button type="submit">Add Bill</button>
      </form>
    </div>
  );
};

export default AddDish;
