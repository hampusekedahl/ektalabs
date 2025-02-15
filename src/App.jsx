import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./About";
import NotFound from "./NotFound";

import Shop from "./pages/Shop";
import Pricing from "./pages/Pricing";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="blog" element={<NotFound />} />
          <Route path="sign-in" element={<NotFound />} />
          <Route path="register" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
