import Card from "../organisms/Card";

function CardTemplate({ name, course, college }) {
  return (
    <Card
      name={name}
      course={course}
      college={college}
    />
  );
}

export default CardTemplate;