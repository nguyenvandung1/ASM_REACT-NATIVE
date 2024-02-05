import { StatusBar } from 'expo-status-bar';
import Navigation_app from './src/navigation';
import { Favorite_context } from './src/context/Favorite.context';

export default function App() {
  return (
    <Favorite_context>
      <Navigation_app />
    </Favorite_context>
  );
}


