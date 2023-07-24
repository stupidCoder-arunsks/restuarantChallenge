const OrderedDish = (props) => {
  return (
    <div>
      <label>table 1</label>
      <ul>
        {props.tone.map((ele, index) => {
          return (
            <li key={ele.uniqueId}>
              {ele.dishName}
              <button
                style={{ marginLeft: 10 }}
                onClick={() => props.onDelete(ele.uniqueId, "table 1")}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <label>table 2</label>
      <ul>
        {props.ttwo.map((ele, index) => {
          return (
            <li key={ele.uniqueId}>
              {ele.dishName}
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
      <label>table 3</label>
      <ul>
        {props.tthree.map((ele, index) => {
          return (
            <li key={ele.uniqueId}>
              {ele.dishName}
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OrderedDish;
