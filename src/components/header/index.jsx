import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Frame, ButtonLink, Background, Logo } from './styles/header';
export default function Header({ bg = true, children, ...props }) {
  return bg ? <Background {...props}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Frame {...props}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...props} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...props }) {
  return <ButtonLink {...props}>{children}</ButtonLink>;
};
