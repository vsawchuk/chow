import axios from 'axios';
import { loginUser } from './LoginUser';
import { getWishlists } from './GetWishlists';

export const confirmLogin = (googleResponse) => {
  const user = {
    username: googleResponse.user.name,
    email: googleResponse.user.email,
    googleId: googleResponse.user.id,
    photoUrl: googleResponse.user.photoUrl,
  };
  return (dispatch) => {
    axios.post('/users', user)
      .then((response) => {
        dispatch(loginUser(response.data));
        // TODO: replace static ID with user's ID
        // dispatch(getWishlists(response.data.id));
        dispatch(getWishlists(1));
      })
      .catch((error) => {
        console.log('got an error :(');
        console.log(error);
      });
  };
};
