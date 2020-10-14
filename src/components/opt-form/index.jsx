import React from 'react';
import { Container, Input, Button, Text } from './styles/opt-form';

export default function OptForm({ children, ...props }) {
  return <Container {...props}> {children}</Container>;
}

OptForm.Input = function OptFormInput({ ...props }) {
  return <Input {...props} />;
};

OptForm.Button = function OptFormButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now"></img>{' '}
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};
