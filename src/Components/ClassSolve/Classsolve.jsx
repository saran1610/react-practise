import React, { Component } from 'react'

export class Classsolve extends Component {
  render() {
    const allbooks =this. props.bookname;
  const filtered = allbooks.filter((book) => {
    return book.year < 2014;
  });
  function filteryear() {
    console.log(filtered);
  }
    return (
      <div>
        <h1>props using class</h1>
         <h3>Books</h3>
      <ol>
        {allbooks.map((item, i) => (
          <li key={i}>
            {item.name} --- {item.year}
          </li>
        ))}
      </ol>
      <button onClick={filteryear}>Click</button>
      </div>
    )
  }
}

export default Classsolve
