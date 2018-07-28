import Expo from 'expo';
import { GOOGLE_OAUTH_IOS_CLIENT_ID } from 'react-native-dotenv';
import { confirmLogin } from './ConfirmLogin';
import { closeLoginModal } from './CloseLoginModal';
import { setLoading } from './SetLoading';
import { clearLoading } from './ClearLoading';

export const attemptLogin = () => {
  return (dispatch) => {
    Expo.Google.logInAsync({
      iosClientId: GOOGLE_OAUTH_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    })
      .then((googleResponse) => {
        dispatch(closeLoginModal());
        dispatch(confirmLogin(googleResponse));
      })
      .catch((error) => {
        console.log('ERROR GOOGLE LOGIN');
      });
  };
};
