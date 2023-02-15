import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Loading from '../screens/utils/Loading';

import Auth from './AuthStack';
import Main from './MainStack';

const Navigation = () => {
  // const auth = useContext(AuthContext);
  // const user = auth.user;
  const user = false;
  //const session = null;
  return (
    <NavigationContainer>
      {/* {user == null ? <Loading /> : user == true ? <Main /> : <Auth />} */}
      {/* {user === true && <Main />} */}
      {user === null && <Loading />}
      {user === false && <Auth />}
    </NavigationContainer>
  );
};

export default Navigation;
