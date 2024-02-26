import { StatusBar } from 'expo-status-bar';
import Navigation_app from './src/navigation';
import { Favorite_context } from './src/context/Favorite.context';

// import Constants from 'expo-constants'

export default function App() {
  // const localhost = Constants.manifest.debuggerHost;

  // console.log(localhost);


  return (
    <Favorite_context>
      <Navigation_app />
    </Favorite_context>
  );
}


