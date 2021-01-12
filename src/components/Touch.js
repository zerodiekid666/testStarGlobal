
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PixelRatio,
  Animated,
  Easing,
} from "react-native";

const { width, height } = Dimensions.get('screen');
const fiftyPixel = PixelRatio.getPixelSizeForLayoutSize(50)

class Touch extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "Touch",
      xCoord: new Animated.Value(width / 2 - fiftyPixel / 2),
      yCoord: new Animated.Value(height / 2 - fiftyPixel / 2),
    };
  }

  componentDidMount() { }

  onTouchEvent(name, ev) {
    const x = ev.nativeEvent.locationX - fiftyPixel / 2;
    const y = ev.nativeEvent.locationY - fiftyPixel / 2;
    Animated.timing(this.state.xCoord, {
      duration: 500,
      toValue: x,
      easing: Easing.linear,
    }).start();
    Animated.timing(this.state.yCoord, {
      duration: 500,
      toValue: y,
      easing: Easing.linear,
    }).start();
  }


  render() {
    const { xCoord, yCoord } = this.state;
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={(ev) => true}
        onResponderGrant={this.onTouchEvent.bind(this, "onResponderGrant")}
      >
        <Animated.View style={[styles.box, {
          width: fiftyPixel,
          height: fiftyPixel, transform: [{ translateX: xCoord }, { translateY: yCoord }]
        }]} />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  box: {
    backgroundColor: 'red',
    position: 'absolute',
  },
  container: {
    position: 'relative',
    height: height,
    width: width,
    backgroundColor: 'orange'
  }
})

export default Touch;
