import React, { useState } from "react";

function Sorting() {
  const mobiles = [
    {
      id: "001",
      name: "oneplus11",
      price: 56999,
      isPurchased: true,
    },
    {
      id: "003",
      name: "Vivi Y100",
      price: 24999,
      isPurchased: false,
    },
    {
      id: "002",
      name: "Redmi 10",
      price: 56999,
      isPurchased: true,
    },
    {
      id: "004",
      name: "iphone 13",
      price: 62990,
      isPurchased: false,
    },
    {
      id: "005",
      name: "Nokia",
      price: 12000,
      isPurchased: true,
    },
    {
      id: "006",
      name: "Poco M4",
      price: 13999,
      isPurchased: true,
    },
  ];
  const [iniVal, setVal] = useState(mobiles);

  //   function ascending() {
  //     setVal(iniVal.sort((a, b) => a.id - b.id));
  //   }
  function ascending() {
    let assign=[...iniVal]
    setVal(assign.sort((a, b) => a.price - b.price));
    console.log(assign.sort((a, b) => a.price - b.price));
  }
  function descending() {
    let desval=[...iniVal]
    setVal(desval.sort((a, b) => b.price - a.price));
    console.log(desval.sort((a, b) => b.price - a.price));
  }
  function ascenprice() {
    let price=[...iniVal]
    setVal(price.sort((a, b) => a.name.localeCompare(b.name))) ;
    console.log(price.sort((a, b) => a.name.localeCompare(b.name)));
  }
  function descenprice() {
    let desprice=[...iniVal]
    setVal(desprice.sort((a, b) => b.name.localeCompare(a.name))) ;
    console.log(desprice.sort((a, b) => b.name.localeCompare(a.name)));
  }
  function filtering() {
    // setVal(iniVal.filter((sort)=>sort.isPurchased == "true"))
    let filtertrue=[...iniVal]
    const filterlist = filtertrue.filter((item) => {
      if (item.isPurchased == true) {
        return item;
      }
    });
    console.log(filterlist);
  }
  return (
    <div>
      <h1>Sorting using state functional component:</h1>
      <ul>
        {iniVal.map((item, i) => (
          <li key={i}>
            {item.name} --- {item.price}
          </li>
        ))}
      </ul>
      <button onClick={ascending}>ascen-price</button>
      <button onClick={descending}>Descen-price</button>
      <button onClick={ascenprice}>ascen-name</button>
      <button onClick={descenprice}>descen-name</button>
      <button onClick={filtering}>filter</button>
    </div>
  );
}

export default Sorting;
