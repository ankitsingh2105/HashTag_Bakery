import { lazy } from "react";
import Display from "./Components/Files/Cart/Display";
import { PdtList, Number } from "./Components/Files/Cart/Cart";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
const SameDay = lazy(() => import("./Components/Files/About Section/TypesOfCakes/SameDay"));
const Customization = lazy(() => import("./Components/Files/About Section/TypesOfCakes/Customization"));
const Flowers = lazy(() => import("./Components/Files/About Section/TypesOfCakes/Flowers"));
const Anniversary = lazy(() => import("./Components/Files/About Section/TypesOfCakes/Aniversary"));
const Surprise = lazy(() => import("./Components/Files/About Section/TypesOfCakes/Surprise"));
const Birthday = lazy(() => import("./Components/Files/About Section/TypesOfCakes/Birthday"));
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
              <Route path='/' element={<Layout><SameDay /></Layout>}></Route>
              <Route path='/Customization' element={<Layout><Customization /></Layout>}></Route>
              <Route path='/Anniversary' element={<Layout><Anniversary /></Layout>}></Route>
              <Route path='/Surprise' element={<Layout><Surprise /></Layout>}></Route>
              <Route path='/Birthday' element={<Layout><Birthday /></Layout>}></Route>
              <Route path='/Flowers' element={<Layout> <Flowers /></Layout>}></Route>
              <Route path='/secondone' element={<Layout><Display /></Layout>}></Route>
            </Routes>
          </Number.Provider>
        </PdtList.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
