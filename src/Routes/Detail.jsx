import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {
  const [detail, setDetail] = useState({})
  const [notFound, setNotFound] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      setNotFound(!response.ok)
      let info = await response.json()
      return info
    }
    fetchData().then((data) => {
      setDetail(data)
    })
  }, [id])
 
  return (
    <>
      {notFound ? (
        <h1>Dentista N°{id} no encontrado!</h1>
      ) : (
        <>
          <h1>Detail Dentist id {id}</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{detail.name}</td>
                <td>{detail.email}</td>
                <td>{detail.phone}</td>
                <td>{detail.website}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  )
}

export default Detail