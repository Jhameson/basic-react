import { useEffect, useMemo, useState } from "react";

export const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { id: 1, name: "Ana" },
    { id: 2, name: "Bruno" },
    { id: 3, name: "Carlos" },
  ]);
  console.log("Componente renderizado!");

  // Filtra usuários cujo nome começa com 'A', só recalcula se 'users' mudar
  const filteredUsers = useMemo(() => {
    console.log("Filtrando usuários...");
    return users.filter((user) => user.name.startsWith("A"));
  }, [users]);

  useEffect(() => {
    if (count == 5) {
      setUsers([
        ...users,
        { id: users.length + 1, name: `Novo Usuário ${users.length + 1}` },
      ]);
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrementar: {count}</button>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
