import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import NewsBoard from "./components/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  return (
    <>
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      <NewsBoard category={category} country={country} />
    </>
  );
}

export default App;
