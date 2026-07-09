import { useState } from "react";
import InputField from "./atoms/InputField";

function App() {
  const [name, setName] = useState("");

  return (
    <InputField
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

export default App;