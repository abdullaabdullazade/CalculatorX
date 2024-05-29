import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function CalculatorApp () {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [isWaitingForSecondValue, setIsWaitingForSecondValue] = useState(false);

  const handleDigitPress = (digit) => {
    if (isWaitingForSecondValue) {
      setDisplayValue(String(digit));
      setIsWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const handleDecimalPress = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const handleClearPress = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setCurrentOperator(null);
    setIsWaitingForSecondValue(false);
  };

  const handleOperatorPress = (nextOperator) => {
    const inputValue = parseFloat(displayValue);
    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (currentOperator) {
      const result = performCalculation(firstValue, inputValue, currentOperator);
      setDisplayValue(String(result));
      setFirstValue(result);
    }
    setIsWaitingForSecondValue(true);
    setCurrentOperator(nextOperator);
  };

  const performCalculation = (firstValue, secondValue, operator) => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleClearPress} style={[styles.button, styles.clearButton]}>
          <Text style={[styles.buttonText, styles.clearButtonText]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorPress('/')} style={styles.button}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(7)} style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(8)} style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(9)} style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorPress('*')} style={styles.button}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(4)} style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(5)} style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(6)} style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorPress('-')} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(1)} style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(2)} style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(3)} style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorPress('+')} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDecimalPress} style={[styles.button, styles.doubleButton]}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDigitPress(0)} style={[styles.button, styles.doubleButton]}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOperatorPress('=')} style={[styles.button, styles.doubleButton, styles.equalsButton]}>
          <Text style={[styles.buttonText, styles.equalsButtonText]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  display: {
    fontSize: 48,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 50,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  clearButton: {
    backgroundColor: '#ff6347',
    borderColor: '#ff6347',
  },
  clearButtonText: {
    color: '#fff',
  },
  doubleButton: {
    flexBasis: '43%',
  },
  equalsButton: {
    backgroundColor: '#ff6347',
    borderColor: '#ff6347',
  },
  equalsButtonText: {
    color: '#fff',
  },
});

export default CalculatorApp;
