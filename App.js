import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          <Text style={styles.boldText}>
            Style inheritance
          </Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow, styles.androidShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.boxShadow, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  darkMode: {
    backgroundColor: "black",
  },
  darkModeText: {
    color: "white",
  },
  boldText: {
    fontWeight:"bold",
  },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6, // 0 to 1
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10
  }
});
