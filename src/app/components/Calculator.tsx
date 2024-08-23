// app/components/Calculator.tsx
"use client";
import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Display = styled.div`
  width: 100%;
  height: 60px;
  background: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  border-radius: 10px;
  font-size: 24px;
  margin-bottom: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
`;

const Button = styled.button`
  background: #ff5722;
  border: none;
  color: white;
  font-size: 18px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #e64a19;
  }
  &:active {
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value: string) => {
    setInput(prev => prev + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <CalculatorWrapper>
      <Display>{input || '0'}</Display>
      <ButtonGrid>
        <Button onClick={() => handleButtonClick('1')}>1</Button>
        <Button onClick={() => handleButtonClick('2')}>2</Button>
        <Button onClick={() => handleButtonClick('3')}>3</Button>
        <Button onClick={() => handleButtonClick('+')}>+</Button>
        <Button onClick={() => handleButtonClick('4')}>4</Button>
        <Button onClick={() => handleButtonClick('5')}>5</Button>
        <Button onClick={() => handleButtonClick('6')}>6</Button>
        <Button onClick={() => handleButtonClick('-')}>-</Button>
        <Button onClick={() => handleButtonClick('7')}>7</Button>
        <Button onClick={() => handleButtonClick('8')}>8</Button>
        <Button onClick={() => handleButtonClick('9')}>9</Button>
        <Button onClick={() => handleButtonClick('*')}>*</Button>
        <Button onClick={() => handleButtonClick('0')}>0</Button>
        <Button onClick={() => handleButtonClick('.')}>.</Button>
        <Button onClick={handleCalculate}>=</Button>
        <Button onClick={() => handleButtonClick('/')}>/</Button>
        <Button onClick={handleClear}>C</Button>
      </ButtonGrid>
    </CalculatorWrapper>
  );
};

export default Calculator;
