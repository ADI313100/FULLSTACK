import { useState } from "react";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";

function SearchBar() {
  const [search, setSearch] = useState("");

  const atomComponents = [
    "Button",
    "InputField",
    "Label",
    "Checkbox",
    "RadioButton",
    "TextArea"
  ];

  function handleSearch() {
    const result = atomComponents.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

    if (result.length > 0) {
      alert("Found: " + result.join(", "));
    } else {
      alert("No component found");
    }
  }

  return (
    <div>
      <InputField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Atom Component"
      />

      <Button
        text="Search"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;













// export default function SearchBar(){
// return(
//  </>