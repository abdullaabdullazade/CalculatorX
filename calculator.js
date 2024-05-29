import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function CalculatorApp () {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);
    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = calculate(currentValue, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }
    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '×':
        return firstOperand * secondOperand;
      case '÷':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.outputContainer}>
        <Text style={styles.output}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={clearDisplay} style={[styles.button, styles.clearButton]}>
          <Text style={[styles.buttonText, styles.clearButtonText]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => performOperation('÷')} style={styles.button}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(7)} style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(8)} style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(9)} style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => performOperation('×')} style={styles.button}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(4)} style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(5)} style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(6)} style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => performOperation('-')} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(1)} style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(2)} style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(3)} style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => performOperation('+')} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDecimal()} style={[styles.button, styles.doubleButton]}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => inputDigit(0)} style={[styles.button, styles.doubleButton]}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => performOperation('=')} style={[styles.button, styles.doubleButton, styles.equalsButton]}>
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
  outputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  output: {
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
