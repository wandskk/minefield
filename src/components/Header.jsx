import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Flag from './Flag';

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}>{props.flagsLeft}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
          <Text style={styles.buttonLabel}>Novo Jogo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.onFlagPress}>
          <Text style={styles.buttonLabel}>Mudar nível</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    borderWidth: 12,
    borderColor: '#ccc',
  },
  flagContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#ccc',
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
