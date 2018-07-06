import * as React from 'react';
import './style';

interface AppProps {
  message: string;
}

export default function ({ message }: AppProps) {
  return <h1>Hello {message}</h1>;
}
