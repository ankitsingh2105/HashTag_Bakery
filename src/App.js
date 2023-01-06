import Home from "./Components/Files/Home/Home";
import Product from "./Components/Files/About Section/Product"
import Contact from "./Components/Files/Contact/Contact"
import SameDay from "./Components/Files/About Section/SameDay";
import Customization from "./Components/Files/About Section/Customization";
import Flowers from "./Components/Files/About Section/Flowers";
import Anniversary from "./Components/Files/About Section/Aniversary";
import Surprise from "./Components/Files/About Section/Surprise";
import Birthday from "./Components/Files/About Section/Birthday";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Product />
        <Routes>
          <Route path='/' element={<SameDay title="Same Day Cakes" />}></Route>
          <Route path='/Customization' element={<Customization title="Customization Cakes"/>}></Route>
          <Route path='/Anniversary' element={<Anniversary title="Anniversary Cakes"/>}></Route>
          <Route path='/Surprise' element={<Surprise title="Surprise Cakes"/>}></Route>
          <Route path='/Birthday' element={<Birthday title="Birthday Cakes"/>}></Route>
          <Route path='/Flowers' element={<Flowers title="Flowers"/>}></Route>
        </Routes>
        <Contact/>
      </BrowserRouter>
    </div>
  );
}
export default App;
