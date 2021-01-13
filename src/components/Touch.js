
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  PixelRatio,
  Animated,
  TouchableHighlight,
  Touchable,
} from "react-native";
import SliderComponent from "./Slider";

const { width, height } = Dimensions.get('screen');
const fiftyPixel = PixelRatio.getPixelSizeForLayoutSize(50);

class Touch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      xCoord: new Animated.Value(width / 2 - fiftyPixel / 2),
      yCoord: new Animated.Value(height / 2 - fiftyPixel / 2),
      duration: 500,
    };
  }

  onTouchEvent(name, ev) {
    const { xCoord, yCoord, duration } = this.state;
    const x = ev.nativeEvent.locationX - fiftyPixel / 2;
    const y = ev.nativeEvent.locationY - fiftyPixel / 2;
    Animated.parallel([
      Animated.timing(xCoord, {
        duration: duration,
        toValue: x,
        useNativeDriver: true,
      }),
      Animated.timing(yCoord, {
        duration: duration,
        toValue: y,
        useNativeDriver: true,
      })
    ]).start();

  }


  handleGetSliderValue = (value) => {
    this.setState({
      duration: value
    })
  }


  render() {
    const { xCoord, yCoord } = this.state;
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={() => true}
        onResponderGrant={this.onTouchEvent.bind(this, "onResponderGrant")}
      >
        <Animated.View 
        style={[styles.box, {
          width: fiftyPixel,
          height: fiftyPixel, transform: [{ translateX: xCoord }, { translateY: yCoord }]
        }]}
          pointerEvents="none"/>

        <TouchableHighlight
          style={styles.slider}
          pointerEvents="none"
        >
          <SliderComponent handleGetSliderValue={this.handleGetSliderValue} />
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  box: {
    backgroundColor: '#1f093e',
    position: 'absolute',
  },
  container: {
    position: 'relative',
    zIndex: 10,
    height: height,
    width: width,
  },
  slider: {
    position: 'absolute',
    bottom: 64,
    left: 0,
    flex: 1,
    width: width,
    zIndex: 1,
  }

})

export default Touch;
