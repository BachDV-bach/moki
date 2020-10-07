import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
export const { width, height } = Dimensions.get("window");
const title_height = height * 0.13;
import Login from './src/components/login';
const slides = [
  {
    key: "1",
    title: "This is title", 
    text: "Đồ ăn",
    image: require("./assets/IntroSlider/introSlider1.png"),
    abstract: "The abstract here",
  },
  {
    key: "2",
    title: "This is title",
    text: "Thực phẩm",
    image: require("./assets/IntroSlider/introSlider2.png"),
    abstract: "The abstract here",
  },
  {
    key: "3",
    title: "Tạp hóa",
    image: require("./assets/IntroSlider/introSlider3.png"),
    abstract: "The abstract here",
  },
  {
    key: "4",
    title: "Tạo thực đơn",
    image: require("./assets/IntroSlider/introSlider4.png"),
    abstract: "The abstract here",
  },
];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    marginVertical: 32,
    zIndex: -2,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  abstract: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 26,
  },
  titleContainer: {
    position: "absolute",
    height: title_height,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    marginBottom: "30%",
  },
  // buttonCircle: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 40/2,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showApp: false,
    };
  }

  // _renderNextButton = () => {
  //   return (
  //     <View style={styles.buttonCircle}>
  //       <Text> > </Text>        
  //     </View>
  //   );
  // };

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image resizeMode="stretch" style={styles.image} source={item.image} />
        <View
          style={[
            { bottom: 0, paddingVertical: height * 0.13 },
            styles.titleContainer,
          ]}
        >
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.abstract}>{item.abstract}</Text>
        </View>
      </View>
    );
  };

  _onDone = () => {
    this.setState({ showApp: true });
  };
  render() {
    if (this.state.showApp) {
      return <Screen1 />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          // renderDoneButton={this._renderDoneButton}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
          bottomButton
        />
      );
    }
  }
}

class Screen1 extends React.Component {
   render() {
    return (
      <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
        <Login/>
      </View>
    );
  };
}
