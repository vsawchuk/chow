import axios from 'axios';
import { LOCAL_IP } from 'react-native-dotenv';
import { loginUser } from './LoginUser';

axios.defaults.baseURL = `http://${LOCAL_IP}`;

export const attemptLogin = (googleResponse) => {
  const user = {
    username: googleResponse.user.name,
    email: googleResponse.user.email,
    googleId: googleResponse.user.id,
    photoUrl: googleResponse.user.photoUrl,
  };
  return (dispatch) => {
    axios.post('/users', user)
      .then((response) => {
        console.log(response);
        dispatch(loginUser(response.data));
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
