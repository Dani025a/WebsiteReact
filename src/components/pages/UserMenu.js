import React, { useEffect, useState } from "react";
import './Menu.css'



export default function UserMenu() {
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



  return (
    <div>
<div className="pricing-container">
  <div>
  <h1>Menu</h1>
  </div>
  <table className="pricing-table">
    <thead>
        <tr>
          <th className="th1">Name</th>
         <th className="th1">Price</th>
        </tr>
    </thead>
    <tbody >
    {data.map(data => (
      <tr key={data._id}>
        <td className="td1">{data.name}</td>
        <td className="td1">$ {data.price}</td>
      </tr>
    ))}
    </tbody>
  </table>
  <div>
  </div>
</div>
</div>
  );
}
