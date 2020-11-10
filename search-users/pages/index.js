import Head from 'next/head'
import { useEffect, useState } from 'react'
import Toggle from '../components/toggle'
import getUsers from './api/ServiceUsers'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [users, setUsers ] = useState([])
  const [showUsers, setShowUsers] = useState(false)

  const handleShowUsers = (isChecked) => {
    console.log(isChecked)
    setShowUsers(isChecked)
  }
  useEffect(() => {
    const api = getUsers()



  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Searsh Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>React Lifecycle</h3>
        <div className="divider"></div>
        <div className="section">
          <Toggle description="Show users" enabled={showUsers} onToggle={handleShowUsers} />
        </div>
        <div className="divider"></div>
        <div className="section">
          {showUsers && <Users users={users} />}
        </div>
      </main>

    </div>
  )
}
