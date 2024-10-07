import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Button
          title="Press"
          onPress={() => console.log("Button pressed")}
          color="midnightblue"
        />
      <Modal>
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text> Modal content</Text>
          <Button title="Close" color="midnightblue"/>
        </View>
      </Modal>
    </View>
  );
}
