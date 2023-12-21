"use client";
import React, { useEffect, useState } from "react";

const Order = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await fetch(`http://localhost:3000/api/order`, {
          method: "GET",
        });
        const res = await data.json();
        setOrder(res);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrder();
  }, []);

  const handleAccept = async (id) => {
    const res = await fetch(`http://localhost:3000/api/order/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Status_order: "Disetujui" }),
    });
    const data = await res.json();
    const updatedData = order.map((item) =>
      item.ID_Order_makam === id ? { ...item, Status_order: "Disetujui" } : item
    );
    setOrder(updatedData);
  };

  const handleDecline = async (id) => {
    const res = await fetch(`http://localhost:3000/api/order/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Status_order: "Ditolak" }),
    });
    const data = await res.json();
    const updatedData = order.map((item) =>
      item.ID_Order_makam === id ? { ...item, Status_order: "Ditolak" } : item
    );
    setOrder(updatedData);
  };
  return (
    <div>
      <h1>order</h1>
      <div>
        {order.map((item) => {
          return (
            <div key={item.ID_Order_makam} className="flex flex-row">
              <p>{item.ID_Order_makam}</p>
              <p>
                {item.Nama_belasungkawa === null
                  ? "null"
                  : item.Nama_belasungkawa}
              </p>
              <p>{item.ID_Kelas_Makam}</p>
              <p>{item.Tanggal_Wafat === null ? "null" : item.Tanggal_Wafat}</p>
              <p>{item.Nama_Pemesan}</p>
              <p>{item.Telp_pemesan}</p>
              <p
                className={`${
                  item.Status_order === "Disetujui"
                    ? "bg-green-600 px-2 py-1 rounded-full"
                    : item.Status_order === "Ditolak"
                    ? "bg-red-500 px-2 py-1 rounded-full"
                    : "bg-gray-400 px-2 py-1 rounded-full"
                }`}
              >
                {item.Status_order === null ? "Pending" : item.Status_order}
              </p>
              <button
                onClick={() => handleAccept(item.ID_Order_makam)}
                disabled={
                  item.Status_order === "Disetujui" ||
                  item.Status_order === "Ditolak"
                }
              >
                Accept
              </button>
              <button
                onClick={() => handleDecline(item.ID_Order_makam)}
                disabled={
                  item.Status_order === "Disetujui" ||
                  item.Status_order === "Ditolak"
                }
              >
                Decline
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
