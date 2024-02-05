const Btns = () => {
  const handle = () =>{
    alert('hi')
    console.log('bye')
  };
  return (
    <div>
      <button className="bg-green-500 px-6 py-4 text-xl">Yes</button>
      <button className="bg-red-500 px-6 py-4 text-xl" onClick={handle}>No</button>
    </div>
  );
};

export default Btns;
