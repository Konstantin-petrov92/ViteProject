import { useEffect, useState } from "react";
import Button from "./button/Button";
import Modal from "./modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  //Ссылка - jsonplaceholder.typicode.com/users

  async function fetchUsers() {
    setLoading(true);
    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={() => setModal(true)}>Открыть информацию</Button>
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          itaque, in eaque dolore ipsa sunt, quasi, magni molestiae perferendis
          laborum iste adipisci accusamus neque nisi velit molestias sapiente
          blanditiis commodi!
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>

      {loading && <p>Loading ..</p>}
      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
