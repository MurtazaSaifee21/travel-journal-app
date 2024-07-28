import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
import data from "./data"

export default function journal() {
  const cards = data.map(item => {
    return (
        <Body
            key={item.id}
            item={item}
        />
    )
})   
  return (
      <div>
        <Navbar />
        <section className="body--list">{cards}</section>
      </div>
    )
  }