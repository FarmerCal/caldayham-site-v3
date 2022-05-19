import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Cal Day Ham's public database UI!
      </SectionTitle>
      <SectionText>
        Hello, I'm Cal! <br />
        The purpose of this site is to centralize and distribute my public data and help catalog my life.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>start here</Button>
    </LeftSection>
  </Section>
);

export default Hero;