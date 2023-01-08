import Contact from "./Components/Files/Contact/Contact"
import SameDay from "./Components/Files/About Section/SameDay";
import Customization from "./Components/Files/About Section/Customization";
import Flowers from "./Components/Files/About Section/Flowers";
import Anniversary from "./Components/Files/About Section/Aniversary";
import Surprise from "./Components/Files/About Section/Surprise";
import Birthday from "./Components/Files/About Section/Birthday";
import Display from "./Components/Files/Cart/Display";
import { PdtList } from "./Components/Files/Cart/Cart";
import Layout from "./Layout";
import { Suspense } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  let list = [];
  return (
    <div className="App">
       <Suspense className='App' fallback={
        <div className='align'>
          <SyncLoader size={'20px'} color='#FF5757' className='loader App' />
        </div>
      }>
      <BrowserRouter>
        <PdtList.Provider value={list} >
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
        </PdtList.Provider>
        <Contact />
      </BrowserRouter>
      </Suspense>
    </div>
  );
}
export default App;

// import React, { Suspense } from 'react';
// import './App.css';
// import SyncLoader from "react-spinners/SyncLoader";
// const Newhome = React.lazy(() => import('./COMPONENTS/Newhome'));
// function App() {
//   return (
//     <div>
//       <Suspense className='App' fallback={
//         <div className='align'>
//           <SyncLoader size={'20px'} color='#FF5757' className='loader App' />
//         </div>
//       }>
//         <Newhome />
//       </Suspense>
//     </div>
//   );
// }
// export default App;
