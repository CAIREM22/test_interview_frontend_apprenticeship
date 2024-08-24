import React, { FC } from 'react';

interface GreetingInterface {
  name: string;
}

const GreetingComponent: FC<GreetingInterface> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default GreetingComponent;