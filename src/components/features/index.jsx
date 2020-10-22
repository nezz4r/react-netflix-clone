import React from 'react';
import { Container, Title, SubTitle } from './styles/features';

export default function Features({ children, ...restProps }) {
  return <Container {...restProps}> {children}</Container>;
}

Features.Title = function FeaturesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Features.SubTitle = function SubFeaturesTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
