/*import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = 'YOUR_CLIENT_ID.apps.com';

function Login(){
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }; 
    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };
    
    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;
*/