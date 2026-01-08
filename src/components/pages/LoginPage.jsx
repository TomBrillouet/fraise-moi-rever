import { useRef } from "react";

export default function LoginPage() {
  //state

  const inputRef = useRef("");

  //comportements
  const handleSubmit = (e) => {
    let prenom = inputRef.current.value;
    e.preventDefault();
    prenom = "";
    alert(`Bonjour ${prenom}`);
  };

  //render
  return (
    <div>
      <h1>Bienvenue chez nous ! </h1>
      <p>Connectez vous</p>
      <form action="">
        <input ref={inputRef} type="text" placeholder="Entrez votre prénom" />
        <button onClick={handleSubmit}>Accéder à votre espace</button>
      </form>
    </div>
  );
}
