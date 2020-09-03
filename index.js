
import { Navigation } from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('Welcome', () => App)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Welcome'
            }
          }
        ]
      }
    }
  });
});

App.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
}