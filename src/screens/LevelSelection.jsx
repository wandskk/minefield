import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import {levels} from '../levels';

export default props => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.visible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o nível</Text>
          <ButtonLevelSelector
            level={'easy'}
            onLevelSelectedButton={props.onLevelSelected}
          />
          <ButtonLevelSelector
            level={'normal'}
            onLevelSelectedButton={props.onLevelSelected}
          />
          <ButtonLevelSelector
            level={'hard'}
            onLevelSelectedButton={props.onLevelSelected}
          />          
        </View>
      </View>
    </Modal>
  );
};

function ButtonLevelSelector(props) {
  const styleButton = [styles.button];
  if (props.level === 'easy') styleButton.push(styles.bgEasy);
  if (props.level === 'normal') styleButton.push(styles.bgNormal);
  if (props.level === 'hard') styleButton.push(styles.bgHard);
  return (
    <TouchableOpacity
      style={styleButton}
      onPress={() => props.onLevelSelectedButton(levels[props.level].value)}>
      <Text style={styles.buttonLabel}>{levels[props.level].label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    width: 150,
    marginTop: 10,
    padding: 5,
    borderRadius: 10
  },
  buttonLabel: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bgEasy: {
    backgroundColor: '#49b65d',
  },
  bgNormal: {
    backgroundColor: '#2765f7',
  },
  bgHard: {
    backgroundColor: '#f26337',
  },
});
