import { MouseEvent } from "react";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const message = items.length === 0 && <p>No item found</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>List</h1>
      {message}
      <ul className="list-group active">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
