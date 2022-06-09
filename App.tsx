import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import AppContainer from './components/app-container';
import Navigator from './navigation/'
import useCachedResources from './hooks/useCachedResources';
import MainScreen from './screens/main-screen';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppContainer>
        <Navigator />
      </AppContainer>
    );
  }
}
