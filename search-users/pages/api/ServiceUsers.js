import axios from 'axios'

const url = 'https://randomuser.me/api/?seed=rush&nat=br&results=10';
const getUsers = async () => {
  try {
    const res = await axios.get(url)
    const data = await res.data
    return data
  } catch (error) {
    return console.log(error)
  }
}

export default getUsers
