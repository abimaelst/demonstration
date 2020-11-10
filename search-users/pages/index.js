import Head from "next/head";
import { useEffect, useState } from "react";
import InputSearch from "../components/inputSearch";
import Card from "../components/card";
import getUsers from "./api/ServiceUsers";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const handleShowUsers = (isChecked) => {
    console.log(isChecked);
    setShowUsers(isChecked);
  };

  useEffect(() => {
    const setData = async () => {
      const res = await getUsers();
      const data = await res.results.map((user) => {
        const { name, picture, dob, login, gender } = user;
        return {
          login: login.username,
          name: name.first + " " + name.last,
          dob: dob.age,
          picture: picture.thumbnail,
          gender,
        };
      });
      setUsers(data);
      setFilteredUsers(data);
    };
    setData();
  }, []);

  const handleFilterChange = (filterText) => {
    const filterUsers = users.filter((item) => {
      return item.name.includes(filterText);
    });
    setFilteredUsers(filterUsers);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Searsh Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>BUSCAR USUÁRIOS</h3>
        <div className="divider"></div>
        <div className="section">
          <InputSearch
            description="Show users"
            placeholder="digite o texto aqui..."
            searchUsers={handleFilterChange}
          />
        </div>
        <Card users={filteredUsers} />
      </main>
    </div>
  );
}
