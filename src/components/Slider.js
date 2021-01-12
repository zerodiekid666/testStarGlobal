import React from "react";
import Slider from "react-native-slider";
import { StyleSheet, View, Text } from "react-native";

class SliderComponent extends React.PureComponent {
  state = {
    value: 0.5
  };

  render() {
    const { handleGetSliderValue } = this.props;
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.value}
          onValueChange={value => {
            handleGetSliderValue(value * 1000)
            this.setState({ value })
          }}
        />
        <Text>
          Value transition: {Math.floor(this.state.value * 1000)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});


export default SliderComponent;