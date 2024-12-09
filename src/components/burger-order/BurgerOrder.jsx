import { useState } from "react";

export default function BurgerOrder() {
  const [toppings, setToppings] = useState([]);
  const [burger, setBurger] = useState("");

  function handleToppingChange(event) {
    if (event.target.checked) {
      setToppings([...toppings, event.target.value]);
    } else {
      setToppings(toppings.filter((topping) => topping !== event.target.value));
    }
  }

  function handleBurgerChange(event) {
    setBurger(event.target.value);
  }

  return (
    <div>
      <h3>Pick your burger:</h3>
      {["cheeseburger", "handburger"].map((burger) => (
        <label key={burger}>
          {burger}
          <input
            id={burger}
            value={burger}
            type="radio"
            name="burger"
            onChange={handleBurgerChange}
          />
        </label>
      ))}

      <h3>Pick your toppings: </h3>
      {["lettuce", "tomato", "onion", "pickles"].map((topping) => (
        <label key={topping}>
          <input
            id={topping}
            value={topping}
            type="checkbox"
            onChange={handleToppingChange}
          />
          {topping}
        </label>
      ))}
      <br />
      <button
        onClick={() =>
          alert(
            `You ordered a ${burger} with ${
              toppings.length > 0 ? toppings.join(", ") : "no toppings"
            }.`
          )
        }
      >
        Order Food
      </button>
    </div>
  );
}
