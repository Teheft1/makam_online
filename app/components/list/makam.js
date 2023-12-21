const Makam = async () => {
  const data = await fetch(`http://localhost:3000/api/makam`, {
    method: "GET",
  });
  const res = await data.json();
  console.log(res);
  return (
    <div>
      makam
      <ul>
        {res.map((item) => {
          return (
            <div key={item.Nomor_Makam}>
              <p>{item.Nomor_Makam}</p>
              <p>{item.Nama_belasungkawa}</p>
              <p>{item.Status_Makam}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Makam;
