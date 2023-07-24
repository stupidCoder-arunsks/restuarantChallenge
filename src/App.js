import { useState } from "react";
import "./App.css";
import AddDish from "./Components/AddDish";
import OrderedDish from "./Components/OrderedDish";

function App() {
  // const [totalDish, setTotalDish] = useState([]);
  const [tableOneOrders, setTableOneOrders] = useState([]);
  const [tableTwoOrders, setTableTwoOrders] = useState([]);
  const [tableThreeOrders, setTableThreeOrders] = useState([]);

  const addDishHandelr = (id, name, price, tname) => {
    if (tname === "table 1") {
      setTableOneOrders((preData) => {
        return [
          ...preData,
          { uniqueId: id, dishName: name, dishPrice: price, tableName: tname },
        ];
      });
    } else if (tname === "table 2") {
      setTableTwoOrders((preData) => {
        return [
          ...preData,
          { uniqueId: id, dishName: name, dishPrice: price, tableName: tname },
        ];
      });
    } else {
      setTableThreeOrders((preData) => {
        return [
          ...preData,
          { uniqueId: id, dishName: name, dishPrice: price, tableName: tname },
        ];
      });
    }
  };

  const deleteDishHandler = (id, tname) => {
    if (tname === "table 1") {
      setTableOneOrders((data) => {
        const prevData = [...data];
        for (let i = 0; i < prevData.length; i++) {
          if (prevData[i].uniqueId === id) {
            prevData.splice(i, 1);
          }
        }
        return prevData;
      });
    } else if (tname === "table 2") {
      setTableTwoOrders((data) => {
        const prevData = [...data];
        for (let i = 0; i < prevData.length; i++) {
          if (prevData[i].uniqueId === id) {
            prevData.splice(i, 1);
          }
        }
        return prevData;
      });
    } else {
      setTableThreeOrders((data) => {
        const prevData = [...data];
        for (let i = 0; i < prevData.length; i++) {
          if (prevData[i].uniqueId === id) {
            prevData.splice(i, 1);
          }
        }
        return prevData;
      });
    }
    console.log("button pressed !!!! ");
    console.log("id ", id, "tname ", tname);
  };

  return (
    <div>
      <AddDish onAddDish={addDishHandelr} />
      <div style={{ marginTop: 30 }} />
      <OrderedDish
        tone={tableOneOrders}
        ttwo={tableTwoOrders}
        tthree={tableThreeOrders}
        onDelete={deleteDishHandler}
      />
    </div>
  );
}

export default App;
