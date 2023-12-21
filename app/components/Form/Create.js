"use client";

import { useState } from "react";

const Create = () => {
  const [order, setOrder] = useState({
    ID_Kelas_Makam: 1, // Set the initial value for ID_Kelas_Makam
    Nama_belasungkawa: "", // Initialize with empty string
    Nama_Pemesan: "", // Initialize with empty string
    Tanggal_Wafat: "", // Initialize with empty string
    Telp_pemesan: "", // Initialize with empty string
    // Status_order: "", // Initialize with empty string
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "ID_Kelas_Makam" ? parseInt(value) : value;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: updatedValue }));
    // setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };
  const handleSubmit = async () => {
    console.log(order);
    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Add A makam</h1>
      <div className="flex flex-col justify-center">
        <input
          type="text"
          name="Nama_belasungkawa"
          placeholder="Nama Belasungkawa"
          value={order.Nama_belasungkawa}
          onChange={handleChange}
        />
        <input
          type="number"
          name="ID_Kelas_Makam"
          placeholder="1 - 4"
          list="ID_Kelas_Makam"
          value={order.ID_Kelas_Makam}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Nama_Pemesan"
          placeholder="Nama Pemesan"
          value={order.Nama_Pemesan}
          onChange={handleChange}
        />
        <input
          type="date"
          name="Tanggal_Wafat"
          placeholder="Tanggal Wafat"
          value={order.Tanggal_Wafat}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Telp_pemesan"
          placeholder="Nomor Telepon"
          value={order.Telp_pemesan}
          onChange={handleChange}
        />
        <button className="" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Create;
