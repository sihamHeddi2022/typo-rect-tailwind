


function App() {

  return (
    <>
      {/* <div className="flex flex-col hover:flex-row">
         <a href="">home</a>
         <a href="">about</a>
         <a href="">contact</a>
      </div> */}
      <nav className="animate-pulse flex justify-center items-center text-xl  text-indigo-600 hover:text-fuchsia-950/90		gap-2 my-5	">
        <a href="" className="hover:overline"> Home</a>
        <a href="">Contact</a>
        <a href="">About Us</a>
        <a href="">Good Bye</a>
      </nav>
      <div className=" animate-pulse rounded-lg mx-5 h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <button className="animate-pulse border bg-midnight text-tahiti rounded-full border-fuchsia-700	border-solid	">Save Changes</button>

    </>
  )
}

export default App
