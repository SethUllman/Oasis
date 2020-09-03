
import { Navigation } from 'react-native-navigation';
import App from './App';

const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
    </View>
  );
};

Navigation.registerComponent('Welcome', () => App)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Welcome'
      }
    }
  });
});