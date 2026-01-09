import React from "react";

export default function ErrorPage() {
  const handleClick = () => {
    document.location.href = "/";
  };
  return (
    <div>
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Retourner à la page d'accueil</button>
    </div>
  );
}
