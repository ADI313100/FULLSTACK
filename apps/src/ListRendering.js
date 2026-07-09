const fruits = ["apple","banana","Orange"];
function ListRendering() {
  return (
    <div>
      <h1>List Rendering</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListRendering;
