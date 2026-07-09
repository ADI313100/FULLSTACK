import SearchBar from "../molecules/SearchBar";

function Card() {
  return (
    <div
      style={{
        width: "350px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2>Student Details</h2>

      <p><strong>Name:</strong> Adithya</p>
      <p><strong>Course:</strong> Java Full Stack</p>
      <p><strong>College:</strong> XYZ College</p>

      <hr />

      <SearchBar />
    </div>
  );
}

export default Card;