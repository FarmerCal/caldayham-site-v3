import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

import LedgesSVG from '../../../public/icons/ledges-svg.js';
import CalDayHamLogo from '../SVGComponents/caldayham-logo';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <CalDayHamLogo scaleFactor='1.8'/>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#portfolio">
          <NavLink>Portfolio</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#thoughts">
          <NavLink>Thoughts</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/farmercal" target="_blank">
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/caldayham/" target="_blank">
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://www.ledges.io/ed/caldayham" target="_blank">
        <LedgesSVG size='25' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
