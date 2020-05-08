import React, { Fragment } from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

let name = 'Kaper Zutterman';
let roles = ['roles', 'test'];
let socialLinks = [
  {
    id: 1,
    url: 'https://github.com/KasperZutterman',
    name: 'GitHub',
    fontAwesomeIcon: 'fab fa-github',
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/kasperzutterman/',
    name: 'LinkedIn',
    fontAwesomeIcon: 'fab fa-linkedin',
  },
  {
    id: 3,
    url: 'https://twitter.com/KasperZutterman',
    name: 'Twitter',
    fontAwesomeIcon: 'fab fa-twitter',
  },
  {
    id: 4,
    url: 'mailto:kasperzutterman1999@gmail.com',
    name: 'Contact Me',
    fontAwesomeIcon: 'fab fa-envelope',
  },
];

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Fragment>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[6, 7]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm ${name}!`}
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[5, 6]}
        mb={[3, 5]}
        textAlign="center"
        style={centerHorizontally}
      >
        <TextLoop interval={4000}>
          {roles
            .sort(() => Math.random() - 0.5)
            .map((text) => (
              <Text width={[300, 500]} key={text}>
                {text}
              </Text>
            ))}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {socialLinks.map(({ id, ...rest }) => (
          <Box mx={3} fontSize={[5, 6, 6]} key={id}>
            <SocialLink {...rest} />
          </Box>
        ))}
      </Flex>
      <SectionLink section="about">
        {({ onClick }) => <MouseIcon onClick={onClick} />}
      </SectionLink>
    </Fragment>
  </Section.Container>
);

/*
<StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks, roles } = contentfulAbout;
        const { deterministicBehaviour } = site.siteMetadata;

        return (
          
        );
      }}
    />
    */

export default LandingPage;
