import React, {Component} from 'react';

import Section from './Section';
import {Btn} from 'components';

export default class BtnSection extends Component {
  render() {
    return (
      <Section name="Buttons">
        <Btn>Button</Btn>
      </Section>
    );
  }
}