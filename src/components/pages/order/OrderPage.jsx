import { Link, useParams } from "react-router";
export default function OrderPage() {
  //state
  const { inputValue } = useParams();

  return (
    <div>
      <h1>Bonjour {inputValue}</h1>
      {/* Prénom rentrer dans la page login */}
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
