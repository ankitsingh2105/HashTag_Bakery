import Contact from "./Components/Files/Contact/Contact"
import SameDay from "./Components/Files/About Section/SameDay";
import Customization from "./Components/Files/About Section/Customization";
import Flowers from "./Components/Files/About Section/Flowers";
import Anniversary from "./Components/Files/About Section/Aniversary";
import Surprise from "./Components/Files/About Section/Surprise";
import Birthday from "./Components/Files/About Section/Birthday";
import Display from "./Components/Files/Cart/Display";
import { PdtList, Number } from "./Components/Files/Cart/Cart";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const data = JSON.parse(localStorage.getItem("context"));
  const [list, setlist] = useState(data || []);
  const [itemNumber, setitemNumber] = useState(data ? data.length : 0);
  return (
    <div className="App">
      <BrowserRouter>
        <PdtList.Provider value={{ list, setlist }}>
          <Number.Provider value={{ itemNumber, setitemNumber }}>
            <Routes>
              <Route path="/cart" element={<Display />} />
              <Route path='/' element={<Layout><SameDay title="Same Day Cakes" /></Layout>}></Route>
              <Route path='/Customization' element={<Layout><Customization title="Customization Cakes" /></Layout>}></Route>
              <Route path='/Anniversary' element={<Layout><Anniversary title="Anniversary Cakes" /></Layout>}></Route>
              <Route path='/Surprise' element={<Layout><Surprise title="Surprise Cakes" /></Layout>}></Route>
              <Route path='/Birthday' element={<Layout><Birthday title="Birthday Cakes" /></Layout>}></Route>
              <Route path='/Flowers' element={<Layout><Flowers title="Flowers" /></Layout>}></Route>
              <Route path='/secondone' element={<Layout><Display /></Layout>}></Route>
            </Routes>
          </Number.Provider>
        </PdtList.Provider>
        <Contact />
      </BrowserRouter>
    </div>
  );
}
export default App;
