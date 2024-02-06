import { useHistory } from "react-router-dom";

const NavigationExample = () => {
  let history = useHistory();
  const handleClick = (id) => {
    history.push(`/page/${id}`);
  };
  return (
    <div>
      <h2>Choose an item:</h2>
      <button onClick={() => handleClick(1)}>Item 1</button>
      <button onClick={() => handleClick(2)}>Item 2</button>
      <button onClick={() => handleClick(3)}>Item 3</button>
    </div>
  );
};
