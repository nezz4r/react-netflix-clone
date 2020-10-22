import {
  JumbotronContainer,
  FooterContainer,
  FaqsContainer,
  HeaderContainer,
} from '../containers';

import { OptForm, Feature } from '../components';

import React from 'react';

export default function home() {
  return (
    <div>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try It Now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
}
