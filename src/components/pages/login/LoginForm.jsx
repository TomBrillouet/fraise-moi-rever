import React, { useState } from "react";
import { Link } from "react-router";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous ! </h1>
      <br />
      <h2>Connectez vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        value={inputValue}
        onChange={handleChange}
        required
      />
      <Link to="/order">
        <button>Accéder à votre espace</button>
      </Link>
    </form>
  );
}
