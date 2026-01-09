import { Link, useParams } from "react-router";
export default function OrderPage() {
  //state
  const { username } = useParams();

  return (
    <div>
      <h1>Bonjour {username}</h1>
      {/* Prénom rentrer dans la page login */}
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
