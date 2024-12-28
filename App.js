// Install dependencies first:
// expo install react-native-picker-select
// Place this code in App.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const App = () => {
  const [flangeSize, setFlangeSize] = useState(null);
  const [flangeRating, setFlangeRating] = useState(null);

  // Define flange options
  const sizes = [
    { label: '2 inches', value: '2' },
    { label: '4 inches', value: '4' },
    { label: '6 inches', value: '6' },
  ];

  const ratings = [
    { label: '150', value: '150' },
    { label: '300', value: '300' },
    { label: '600', value: '600' },
  ];

  const flangeImages = {
    '2-150': require('./assets/flange_2_150.png'),
    '2-300': require('./assets/flange_2_300.png'),
    '2-600': require('./assets/flange_2_600.png'),
    '4-150': require('./assets/flange_4_150.png'),
    '4-300': require('./assets/flange_4_300.png'),
    '4-600': require('./assets/flange_4_600.png'),
    '6-150': require('./assets/flange_6_150.png'),
    '6-300': require('./assets/flange_6_300.png'),
    '6-600': require('./assets/flange_6_600.png'),
  };

  const selectedFlangeKey = flangeSize && flangeRating ? `${flangeSize}-${flangeRating}` : null;
  const flangeImage = selectedFlangeKey ? flangeImages[selectedFlangeKey] : null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flange Diamension Developed By Mr.Muneer For SORF Flanges </Text>

      <Text style={styles.label}>Select Flange Size:</Text>
      <RNPickerSelect
        onValueChange={(value) => setFlangeSize(value)}
        items={sizes}
        placeholder={{ label: 'Select a size...', value: null }}
        style={pickerStyles}
      />

      <Text style={styles.label}>Select Flange Rating:</Text>
      <RNPickerSelect
        onValueChange={(value) => setFlangeRating(value)}
        items={ratings}
        placeholder={{ label: 'Select a rating...', value: null }}
        style={pickerStyles}
      />

      {flangeImage && (
        <View style={styles.imageContainer}>
          <Image source={flangeImage} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

const pickerStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is not overlapping the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is not overlapping the icon
  },
};

export default App;


