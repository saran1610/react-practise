import React, { Component } from "react";

export class SortingClass extends Component {
  constructor() {
    super();
    this.state = { 
         mobiles : [
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
          ]
    };
  }
  ascending = () => {
   this.setState(
        this.state.mobiles.sort((a, b) => a.price - b.price)
    );
  };
  descending = () => {
    this.setState(
         this.state.mobiles.sort(((a, b) => b.price - a.price))
     );
   };
   ascenprice = () => {
    this.setState(
         this.state.mobiles.sort((a, b) => a.name.localeCompare(b.name))
     );
   };
   descenprice = () => {
    this.setState(
         this.state.mobiles.sort((a, b) => b.name.localeCompare(a.name))
     );
   };
   filtering = () => {
    this.setState(
         this.state.mobiles.filter((item) =>{
            if (item.isPurchased == true) {
              return item;
            }
          })
     );
   };



  render() {
    return (
      <div>
        <h1>Sorting using state class component:</h1>
        <ul>
          {this.state.mobiles.map((item, i) => (
            <li key={i}>
              {item.name} --- {item.price}
            </li>
          ))}
        </ul>
            <button onClick={this.ascending}>ascen-price</button>
            <button onClick={this.descending}>Descen-price</button>
            <button onClick={this.ascenprice}>ascen-name</button>
            <button onClick={this.descenprice}>descen-name</button>
            <button onClick={this.filtering}>filter</button> 
      </div>
    );
  }
}

export default SortingClass;
