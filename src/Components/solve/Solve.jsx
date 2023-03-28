import React from "react";

function Solve(props) {
  const allbooks = props.bookname;
  const filtered = allbooks.filter((book) => {
    return book.year < 2014;
  });
  function filteryear() {
    console.log(filtered);
  }

  return (
    <>
    <h1>props using functional</h1>
      <h3>Books</h3>
      <ol>
        {allbooks.map((item, i) => (
          <li key={i}>
            {item.name} --- {item.year}
          </li>
        ))}
      </ol>
      <button onClick={filteryear}>Click</button>
    </>
  );
}

export default Solve;
