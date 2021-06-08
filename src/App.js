import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Contact from "./pages/ContactData/ContactData";
import Book from "./pages/Book/Book";
import Navbar from "./components/Navbar";
import HomeWithAuth from "./pages/HomeWithAuth";
import { Switch, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import "./App.css";

Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/login/" component={HomeWithAuth} />
        <Route exact path="/book/" component={Book} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/about/" component={Error} />
      </Switch>
    </>
  );
}

export default App;
