import React from 'react';
import faqsData from '../fixtures/faqs.json';
import { Accordion, OptForm } from '../components';

export function FaqsContainer({ children, ...restProps }) {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map(item => (
          <Accordion.Item id={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try It Now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
      </>
    </Accordion>
  );
}
