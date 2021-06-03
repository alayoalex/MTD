import { useState, useEffect } from "react";
import Auth from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";

/**
 * userUserStatus is a react hook that tracks the user's login status and provides a "isLoggedIn" flag that can be checked in code.
 */

const _guessInitialLoginStatus = () => {
  //   if (isServer()) {
  //     // Not sure how to do this on the server. Maybe check a header flag??
  //   } else {
  const flagValue = localStorage.getItem(`isUserLoggedIn`);

  // If the flag is null, then the user probably isn't logged in (if you add this to your code, the user will experience a one-time-only bad guess). Otherwise, check the flag's value.
  const isLoggedIn = null !== flagValue && flagValue === "true";

  return isLoggedIn;
  //   }
};

const _setFlag = value => {
  const valAsString = value ? "true" : "false";
  localStorage.setItem("isUserLoggedIn", valAsString);
};

function useIsLoggedIn() {
  const initialGuess = _guessInitialLoginStatus();
  let [isLoggedIn, setIsLoggedIn] = useState(initialGuess);

  const _updateLoggedInState = value => {
    setIsLoggedIn(value);
    _setFlag(value);
  };

  useEffect(() => {
    let updateUser = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        _updateLoggedInState(true);
      } catch {
        _updateLoggedInState(false);
      }
    };
    Hub.listen("auth", updateUser); // listen for login/signup events
    // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove("auth", updateUser); // cleanup
  }, []);

  return isLoggedIn;
}

export default useIsLoggedIn;
