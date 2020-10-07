import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
export default class IntroSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
          <Text>
            End
          </Text>
        </View>
      );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
  },
});

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require('../../assets/IntroSlider/introSlider1.png'),
    imageStyle: styles.image,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    titleStyle: styles.title,
    text: 'Upto 25% off on Domestic Flights',
    image: require('../../assets/IntroSlider/introSlider2.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Great Offers',
    titleStyle: styles.title,
    text: 'Enjoy Great offers on our all services',
    image: require('../../assets/IntroSlider/introSlider3.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Best Deals',
    titleStyle: styles.title,
    text: ' Best Deals on all our services',
    image: require('../../assets/IntroSlider/introSlider4.png'),
    imageStyle: styles.image,
    backgroundColor: '#3395ff',
  },
];
