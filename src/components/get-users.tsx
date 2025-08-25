import { useState, useEffect } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

function GetUsers() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Erro ao buscar usuários");

      const data: IUser[] = await response.json();
      setUsers(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>

      {loading && <p>Buscando lista de usuários...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        !error &&
        users.map((user) => (
          <div key={user.id}>
            <strong>Nome:</strong> {user.name} <br />
            <strong>E-mail:</strong> {user.email}
            <hr />
          </div>
        ))}
    </div>
  );
}

export default GetUsers;
