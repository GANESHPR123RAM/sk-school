

import IndexHome from './component/HomePage/indexHome';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/FooterPage'
import Teachers from './component/AboutUsPage/Teachers'
import Event from './component/EventPage/Event'
import Gallery from './component/Gallery/Gallery'

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ContactUs from './component/ContactUsPage/ContactUs';
function App() {
  return (
    <>
      <Router>

        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <Routes>
          <Route path='/Home' element={<IndexHome />}>
          </Route>
          <Route path='/' element={< Navigate to='Home' />}>
          </Route>
          <Route path='/About' element={<Teachers />}>
          </Route>
          <Route path='/Event' element={<Event />}>
          </Route>
          <Route path='/Gallery' element={<Gallery />}>
          </Route>
          <Route path='/Contact' element={<ContactUs />}>
          </Route>
        </Routes>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>

    </>
  );
}

export default App;
