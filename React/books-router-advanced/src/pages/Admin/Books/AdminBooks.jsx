import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'


function AdminBooks() {
  let [books, setBooks] = useState([])


  useEffect(() => {
    axios.get(" http://localhost:4000/books")
      .then((res) => {
        setBooks(res.data)
        console.log(books);
        
      })
  }, [])

  return (
    <div className='admin-books'>
      <button id='addButton'><Link to ="/admin/add" style={{color:"white",textDecoration:"none"}}>Add Books</Link></button>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Info</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

        {
          books.map((book) => (
            <tr key={book.id}>
              <td><img src={book.image} alt={book.title} style={{ height: "150px", width: "100px", objectFit: "cover" }} /></td>
              <td>{book.title}</td>
              <td>{book.price}$</td>
              <td><button>Info</button></td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
          ))
        }

      </table>
    </div>
  )
}

export default AdminBooks
