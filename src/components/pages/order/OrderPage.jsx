import React from "react";

export default function OrderPage() {
  const handleClick = () => {
    document.location.href = "/";
  };

  return (
    <div>
      <h1>Bonjour </h1>
      {/* Prénom rentrer dans la page login */}
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
}
