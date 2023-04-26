import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import axios from "axios";
// import ImageSlider from "./components/Slider";

function App() {
  const [selectedValue, setSelectedValue] = useState("all");
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);

  useEffect(() => {
    if (selectedValue === "all") setProducts(data);
    else {
      if (selectedValue === "inc") {
        setProducts([...data].sort((a, b) => a.price - b.price));
      } else if (selectedValue === "dec") {
        setProducts([...data].sort((a, b) => b.price - a.price));
      } else
        setProducts(
          data.filter((product) => product.category === selectedValue)
        );
    }
  }, [selectedValue, data]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <div className='App'>
        <Navbar
          selectedValue={selectedValue}
          handleSelectChange={handleSelectChange}
        />
        <Routes>
          <Route
            path='/'
            element={<Home data={products} selectedValue={selectedValue} />}
          />
          {/* <Route path='/images' element={<ImageSlider />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
