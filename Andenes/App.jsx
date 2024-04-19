import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  ScrollView
} from 'react-native';

const App= () => {
  const [modalInicioSecion, setmodalInicioSecion] = useState(false);
  return (
    <View
    style={styles.contenedor}>
      <Text>Roman de la come</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#15303B',
    flex: 1
  }
});

export default App;
