import { ListCard, Text } from "@freee_jp/vibes";
import { useState } from "react";

const initialCards = [
  { name: "John Doe", age: 25, sex: "Male", profession: "Engineer" },
  { name: "Jane Smith", age: 30, sex: "Female", profession: "Designer" },
  { name: "Mike Johnson", age: 35, sex: "Male", profession: "Developer" },
];

type CardProps = {
  name: string;
  age: number;
  sex: string;
  profession: string;
};

const Card = ({ name, age, sex, profession }: CardProps) => {
  return (
    <ListCard title={name} ma={0.5}>
      <Text ma={0.5}>{`Age: ${age}`}</Text>
      <Text ma={0.5}>{`Sex: ${sex}`}</Text>
      <Text ma={0.5}>{`Profession: ${profession}`}</Text>
    </ListCard>
  );
};

export const ProfileCard = () => {
  const [cards, setCards] = useState(initialCards);
  const [newCard, setNewCard] = useState({
    name: "",
    age: 0,
    sex: "",
    profession: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setNewCard((prevCard) => ({
      ...prevCard,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const addCard = () => {
    setCards((prevCards) => [...prevCards, newCard]);
    setNewCard({ name: "", age: 0, sex: "", profession: "" });
  };

  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={newCard.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={newCard.age}
        onChange={handleInputChange}
      />
      <select name="sex" value={newCard.sex} onChange={handleInputChange}>
        <option value="">Select Sex</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        type="text"
        placeholder="Profession"
        name="profession"
        value={newCard.profession}
        onChange={handleInputChange}
      />
      <input type="button" value="Add Card" onClick={addCard} />
    </div>
  );
};
