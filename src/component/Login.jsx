import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

const CLIENT_ID = '904762651204-f7592jsjl3r1d02fhb95g2odu3o80nav.apps.googleusercontent.com';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const onSuccess = (response) => {
  
    console.log(response);
    setLoggedIn(true);
  };

  const onFailure = (response) => {

    console.log(response);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <GoogleLogout
          clientId={904762651204-f7592jsjl3r1d02fhb95g2odu3o80nav.apps.googleusercontent.com}
          buttonText="Logout"
          onLogoutSuccess={logout}
        />
      ) : (
        <GoogleLogin
          clientId={904762651204-f7592jsjl3r1d02fhb95g2odu3o80nav.apps.googleusercontent.com}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          responseType="code,token"
        />
      )}
    </div>
  );
}

export default Login;
