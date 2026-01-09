import { Link } from "react-router";
export default function OrderPage() {
  return (
    <div>
      <h1>Bonjour </h1>
      {/* Prénom rentrer dans la page login */}
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
