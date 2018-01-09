import Expo from 'expo';
import { GOOGLE_OAUTH_IOS_CLIENT_ID} from 'react-native-dotenv';
import { confirmLogin } from './ConfirmLogin';
import { closeLoginModal } from './CloseLoginModal';

export const attemptLogin = () => {
  return (dispatch) => {
    Expo.Google.logInAsync({
      iosClientId: GOOGLE_OAUTH_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    })
      .then((googleResponse) => {
        dispatch(confirmLogin(googleResponse));
        dispatch(closeLoginModal());
      })
      .catch((error) => {
        console.log('ERROR GOOGLE LOGIN');
      });
  };
};
