import React from 'react'

function Books() {
  return (
    <div className='user-books-container'>
      <div className="user-books">
        <div className="user-book">
          <div className="image">
          <img src="https://static.insales-cdn.com/images/products/1/4761/171070105/9963d7a96b3e03dad6271412348121bd.jpg" alt="Səndən Öncə Mən" />
            <div className="content">
              <h2>Book Title:Səndən Öncə Mən</h2>
              <p>Decription:Əlil gəncin həyatına daxil olan bir qadının onun dünyasını necə dəyişdiyini izah edən emosional bir roman.</p>
              <p>Author:Jojo Moyes</p>
              <p>Price:20$</p>
              <p>Language:Azerbaycanca</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books
