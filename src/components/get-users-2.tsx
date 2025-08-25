import { useState, useEffect, useMemo } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

function GetUsers2() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filter, setFilter] = useState<string>("");
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

  // useMemo para otimizar a filtragem
  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [users, filter]);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {loading && <p>Buscando lista de usuários...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        !error &&
        filteredUsers.map((user) => (
          <div key={user.id}>
            <strong>Nome:</strong> {user.name} <br />
            <strong>E-mail:</strong> {user.email}
            <hr />
          </div>
        ))}
    </div>
  );
}

export default GetUsers2;
