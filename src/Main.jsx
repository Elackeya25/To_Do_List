import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
const Main = () => {
  const [works, setWorks] = useState([]);
  const [newwork, setNewwork] = useState("");
  function handleCheck(id) {
    const newlist = works.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setWorks(newlist);
  }
  function handleDelete(id) {
    const newlist = works.filter((item) => item.id !== id);
    setWorks(newlist);
  }
  function handleInsert(e) {
    e.preventDefault();
    if (newwork !== "") {
      const newlist = { id: works.length + 3, checked: false, value: newwork };
      setWorks([...works, newlist]);
      setNewwork("");
    }
  }

  return (
    <div className="new">
      <main>
        <div className="form-section">
          <form action="#">
            <input
              type="text"
              placeholder="Add items"
              value={newwork}
              onChange={(e) => setNewwork(e.target.value)}
            />
            <IoIosAddCircleOutline
              role="button"
              onClick={(e) => handleInsert(e)}
            />
          </form>
        </div>
      </main>
      <div className="table-space">
        <div className="table-section">
          {works.length ? (
            <ul>
              {works.map((item) => (
                <li key={item.id}>
                  <div className="form-inner">
                    <div className="box-inner">
                      <input
                        type="checkbox"
                        name="work"
                        id="work"
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                      />
                      <label htmlFor="works">{item.value}</label>
                    </div>
                    <div>
                      <FaRegTrashAlt
                        role="button"
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>List is Empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
