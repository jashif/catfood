import { Amplify } from 'aws-amplify';

import { Authenticator ,AmplifyProvider} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import ActionCardCollection from './ui-components/ActionCardCollection';
Amplify.configure(awsExports);

export default function App() {
  return (
    <AmplifyProvider>
     <ActionCardCollection></ActionCardCollection>
    </AmplifyProvider>
  );
}