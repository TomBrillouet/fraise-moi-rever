import { useState } from "react";

export default function LoginPage() {
  //state
  const [inputValue, setInputValue] = useState("");
  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  //render
  return (
    <div>
      <h1>Bienvenue chez nous ! </h1>
      <br />
      <h2>Connectez vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
