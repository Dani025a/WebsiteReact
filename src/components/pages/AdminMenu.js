import React, { useEffect, useState } from "react";
import './Menu.css'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


export default function AdminMenu() {

  const [data, setData] = useState([]);


  useEffect(() => {
    getAllMenuItems()
  }, []);


  const getAllMenuItems = () => {
    fetch("http://localhost:5000/getAllMenuItems", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "MenuItems");
        setData(data.data);
      });
  };



  const deleteMenuItem = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:5000/deleteMenuItem", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          id: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllMenuItems();
          console.log("dwdwd")
        });
    } else {
    }
  };

  return (
<div className="pricing-container">
<div className="pricing-container2">
        <button className="button-3">
  Add Menu Item
</button>
</div>
  <div>
  <h1>Menu</h1>
  </div>
  <table className="pricing-table">
    <thead>
        <tr>
          <th className="th1">Name</th>
         <th className="th1">Price</th>
         <th className="th2">Edit</th>
         <th className="th2">Delete</th>
        </tr>
    </thead>
    <tbody >
    {data.map(data => (
      <tr key={data._id}>
        <td className="td1">{data.name}</td>
        <td className="td1">$ {data.price}</td>
        <td className="td2"><AiFillEdit  color="#fcb900" size="28px"  onClick={() => deleteMenuItem(data._id, data.name)}></AiFillEdit></td>
        <td className="td2"><AiFillDelete  color="#b80000" size="28px"></AiFillDelete></td>
      </tr>
    ))}
    </tbody>
  </table>
</div>
  );
}

