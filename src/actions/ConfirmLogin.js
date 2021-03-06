import axios from 'axios';
import { loginUser } from './LoginUser';
import { getWishlists } from './GetWishlists';
import { clearLoading } from './ClearLoading';

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
        dispatch(clearLoading());
        dispatch(loginUser(response.data));
        dispatch(getWishlists(response.data.id));
      })
      .catch((error) => {
        dispatch(clearLoading());
        console.log('got an error :(');
        console.log(error);
      });
  };
};
