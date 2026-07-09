import Button from "./atoms/Button";

function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <Button
      text="Click Me"
      onClick={handleClick}
    />
  );
}

export default App;