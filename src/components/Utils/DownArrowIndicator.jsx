import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const DownArrowIndicatorContainer = styled.div`
  animation: ${bounce} 1.5s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DownArrowIndicator = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid #007bff; /* Cambia el color de la flecha a azul */
`;

const Text = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
`;

export default function DownArrow() {
  return (
    <DownArrowIndicatorContainer>
      <DownArrowIndicator />
      <Text>Deslizar para continuar</Text>
    </DownArrowIndicatorContainer>
  );
}