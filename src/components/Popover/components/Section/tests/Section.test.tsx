import * as React from 'react';
import {mountWithAppProvider} from 'tests/utilities';
import {TextContainer} from 'src/components';
import Section from '../Section';

// section: ActionListSection;
// hasMultipleSections: boolean;
// onActionAnyItem?: ActionListItemDescriptor['onAction'];

describe('<Section />', () => {
  const children = (
    <TextContainer>
      <p>Content</p>
    </TextContainer>
  );
  const section = mountWithAppProvider(<Section>{children}</Section>);
  it('renders its children', () => {
    expect(section.contains(children)).toBe(true);
  });

  it('renders a div', () => {
    expect(section.find('div').exists()).toBe(true);
  });
});
