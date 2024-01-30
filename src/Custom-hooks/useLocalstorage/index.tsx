import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
const LocalStorage = () => {
  const [value, setValue] = useState("");

  const { setItem, getItem, removeItem } = useLocalStorage("value");
  return (
    <>
      <div>
        <h1>useLocalStorage</h1>
        <input
          type="text" placeholder="type the value "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => setItem(value)} type="submit">
          Set
        </button>
        <button onClick={() => getItem()} type="submit">
          Get
        </button>
        <button onClick={removeItem} type="submit">
          Remove
        </button>
        <div />
      </div>
    </>
  );
};

export default LocalStorage;
