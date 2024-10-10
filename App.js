import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>StyleSheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: { flex: 1, backgroundColor: "plum", padding: 60 }
});
