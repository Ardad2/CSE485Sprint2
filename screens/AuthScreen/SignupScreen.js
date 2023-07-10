import { useState } from 'react';
import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { createUser } from '../../util/auth';
import { Alert } from 'react-native';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { authenticateAuthTokens, logoutAuthTokens } from '../../store/redux/users';


function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const dispatch = useDispatch();

  const authToken = useSelector( (state) => state.authTokens.data[0]); 


  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      dispatch(authenticateAuthTokens(
        {
          token: token
        }
      ));
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;