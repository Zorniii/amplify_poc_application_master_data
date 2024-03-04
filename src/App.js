import './App.css';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import LandingPage from "./LandingPage";
Amplify.configure(awsExports);

export default function App() {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                    <LandingPage username={user.username} signOut={signOut}/>
                </main>
            )}
        </Authenticator>
    );
}
