
import React from "react";
import {
  View,
  Text,
} from "react-native";


class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "App",
    };
  }

  componentDidMount() {

  }


  render() {
    const { currentPage } = this.state;
    return (
      <View>
        <Text>currentPage</Text>
      </View>
    );
  }
}

export default App;
