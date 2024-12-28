import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const BooksContent = createContext()

function BooksContextProvider({children}) {
    let [books,setBooks] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/books")
          .then((res) => setBooks(res.data)
          )
      }, [])

    const value = {
        books,
        setBooks
    }
  return (
    <BooksContent.Provider value={value}>
      {children}
    </BooksContent.Provider>
  )
}

export default BooksContextProvider
