type CardProps = {
  name: string;
  calorie: number;
  macro: string;
  image: string;
};

const Card = ({ name, calorie, macro, image }: CardProps) => {
  const CardStyle = {
    title: {
      fontSize: "3rem",
      textAlign: "center",
      textDecoration: "underline",
      margin: "5rem",
    },
    card: {
      border: "solid 1px gray",
      borderRadius: "10px",
      margin: "1rem",
      padding: "1rem",
    },
    cardImg: {
      width: "20rem",
      height: "15rem",
      borderRadius: "10px",
    },
  };

  return (
    <div title={name} style={CardStyle.card}>
      <img src={image} alt={name} style={CardStyle.cardImg} />
      <p
        style={CardStyle.title as React.CSSProperties}
      >{`Calorie: ${calorie}`}</p>
      <p style={CardStyle.title as React.CSSProperties}>{`Macro: ${macro}`}</p>
    </div>
  );
};

export const FruitsList = () => {
  const FruitListStyle = {
    fluitList: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  };
  const fruits = [
    {
      name: "Apple",
      calorie: 52,
      macro: "Carb: 14g, Protein: 0.3g, Fat: 0.2g",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
    },
    {
      name: "Banana",
      calorie: 89,
      macro: "Carb: 23g, Protein: 1.1g, Fat: 0.3g",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/265px-Bananas.jpg",
    },
    {
      name: "Grape",
      calorie: 69,
      macro: "Carb: 18g, Protein: 0.7g, Fat: 0.2g",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/265px-Table_grapes_on_white.jpg",
    },
  ];

return (
    <div style={FruitListStyle.fluitList as React.CSSProperties}>
        {fruits.map((fruit, index) => (
            <Card key={index} {...fruit} />
        ))}
    </div>
);
};
