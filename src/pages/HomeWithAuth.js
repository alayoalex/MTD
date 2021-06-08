import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import useIsLoggedIn from "../components/IsAuth";
import { withAuthenticator } from "@aws-amplify/ui-react";

const HomeWithAuth = () => {
  const isLoggedIn = useIsLoggedIn();

  const login = !isLoggedIn ? (
    <Link to="/login" className="btn-primary">
      {" "}
      log in{" "}
    </Link>
  ) : null;

  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
          {login}
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default withAuthenticator(HomeWithAuth);
