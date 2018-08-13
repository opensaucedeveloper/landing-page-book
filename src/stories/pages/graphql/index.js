import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { GraphqlCodeBlock } from 'graphql-syntax-highlighter-react';
import JSONPretty from 'react-json-pretty';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import {
  Navbar,
  NavbarNav,
  NavbarLink,
  NavbarCollapse,
  Hero,
  Section,
  Container,
  BuiltWith,
  Input,
  Icon,
  Button,
  Image,
  Row,
  Column,
  Code,
  Video,
  Footer,
  Copyright
} from '../../../components';

const frameworks = [
  {
    image: 'https://graphql.org/users/logos/facebook.png'
  },
  {
    image: 'https://graphql.org/users/logos/github.png'
  },
  {
    image: 'https://graphql.org/users/logos/pinterest.png'
  },
  {
    image: 'https://graphql.org/users/logos/intuit.png'
  },
  {
    image: 'https://graphql.org/users/logos/coursera.png'
  },
  {
    image: 'https://graphql.org/users/logos/shopify.png'
  }
];

const graphqlJson = {
  hero: {
    name: 'Luke Skywalker',
    height: 1.72,
    mass: 77
  }
};

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.add('GraphQl', () => (
  <ThemeSelector>
    <div className="GraphQL__page">
      <Navbar expand="md">
        <Container>
          <NavbarCollapse>
            <NavbarNav alignItems="left">
              <NavbarLink href="#">Learn</NavbarLink>
              <NavbarLink href="#">Code</NavbarLink>
              <NavbarLink href="#">Community</NavbarLink>
              <NavbarLink href="#">Blog</NavbarLink>
              <NavbarLink href="#">Spec</NavbarLink>
            </NavbarNav>
            <NavbarNav alignItems="right">
              <Icon className="Nav_search_icon" icon="fa fa-search" />
              <Input type="text" className="Nav_search_input right" placeholder="Search docs..." />
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <Hero
        particles={false}
        image="https://graphql.org/img/graph-wash.png"
        backgroundColor="#1D232A"
        subHeaderPosition="top"
        minHeight="50vh"
      >
        <Container>
          <Row className="row mt-5">
            <Column>
              <Image
                alt="GraphQL"
                src="https://graphql.org/img/logo.svg"
                width="100px"
                height="auto"
              />
              <h2 className="Hero__GraphQL_title">GraphQL</h2>
            </Column>
            <Column>
              <h6 className="Hero__code_header">Describe your data</h6>
              <Code
                code={
                  'type Project {\n\tname: String,\n\ttagline: String,\n\tcontributors: [User]\n};'
                }
                readOnly
                lineNumbers={false}
                showheader={false}
                showfooter={false}
                languageCode="css"
              />
            </Column>
            <Column>
              <h6 className="Hero__code_header">Ask for what you want</h6>
              <Code
                code={'{\n\tproject(name: "GraphQL"){\n\t\ttagline\n\t}\n};'}
                readOnly
                lineNumbers={false}
                showheader={false}
                showfooter={false}
                languageCode="css"
              />
            </Column>
            <Column>
              <h6 className="Hero__code_header">Get predictable results</h6>
              <Code
                code={'"project": {\n\t"tagline": "A query language for APIs"\n};'}
                readOnly
                lineNumbers={false}
                showheader={false}
                showfooter={false}
                languageCode="css"
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Button type="button" className="btn btn-outline-light Hero__btn mr-2 btn-lg">
                {'Get Started'}
              </Button>

              <Button type="button" className="btn btn-outline-light Hero__btn ml-2 btn-lg">
                {'Learn More'}
              </Button>
            </Column>
          </Row>
        </Container>
      </Hero>
      <div className="mt-5">
        <Section title="A query language for your API">
          <Row>
            <Column />
            <Column className="col col-md-8">
              <p>
                GraphQL is a query language for APIs and a runtime for fulfilling those queries with
                your existing data. GraphQL provides a complete and understandable description of
                the data in your API, gives clients the power to ask for exactly what they need and
                nothing more, makes it easier to evolve APIs over time, and enables powerful
                developer tools.
              </p>
            </Column>
            <Column />
          </Row>
          <Row className="row mt-5 mb-5 Code_section vertical">
            <Column />
            <Column className="col col-md-4 col-ms-6 col-xs-12">
              <div className="Code_container">
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock"
                  queryBody="{
                      hero {
                        name
                        height
                        mass
                      }
                    }"
                />
                <JSONPretty id="json-pretty" json={graphqlJson} />
              </div>
            </Column>
            <Column className="col col-md-4 col-sm-6 col-xs-12">
              <br />
              <h3>Ask for what you need, get exactly that</h3>
              <br />
              <p>
                Send a GraphQL query to your API and get exactly what you need, nothing more and
                nothing less. GraphQL queries always return predictable results. Apps using GraphQL
                are fast and stable because they control the data they get, not the server.
              </p>
            </Column>
            <Column />
          </Row>
        </Section>
        <Section gray>
          <Row>
            <Column className="col col-md-4 col-sm-6 col-xs-12">
              <br />
              <h3>Get many resources in a single request</h3>
              <br />
              <p>
                GraphQL queries access not just the properties of one resource but also smoothly
                follow references between them. While typical REST APIs require loading from
                multiple URLs, GraphQL APIs get all the data your app needs in a single request.
                Apps using GraphQL can be quick even on slow mobile network connections.
              </p>
            </Column>
            <Column className="col col-md-4 col-sm-6 col-xs-12">
              <h6>Query & Response animation here</h6>
            </Column>
          </Row>
        </Section>
        <Section>
          <Row className="row mt-5 mb-5 Code_section_vertical">
            <Column className="col col-md-6 col-sm-6 col-xs-12">
              <div className="Code_container">
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock"
                  queryBody="{
                      hero {
                        name
                        height
                        mass
                      }
                    }"
                />
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock border_separator"
                  queryBody="type Query {
                    hero: Character
                  }
                  
                  type Character {
                    name: String
                    friends: [Character]
                    homeWorld: Planet
                    species: Species
                  }
                  
                  type Planet {
                    name: String
                    climate: String
                  }
                  
                  type Species {
                    name: String
                    lifespan: Int
                    origin: Planet
                  }"
                />
              </div>
            </Column>
            <Column className="col col-md-4 col-sm-6 col-xs-12">
              <br />
              <h3>Get many resources in a single request</h3>
              <br />
              <p>
                GraphQL queries access not just the properties of one resource but also smoothly
                follow references between them. While typical REST APIs require loading from
                multiple URLs, GraphQL APIs get all the data your app needs in a single request.
                Apps using GraphQL can be quick even on slow mobile network connections.
              </p>
            </Column>
          </Row>
        </Section>
        <Section id="dark-section" title="Move faster with powerful developer tools">
          <p>
            Know exactly what data you can request from your API without leaving your editor,
            highlight potential issues before sending a query, and take advantage of improved code
            intelligence. GraphQL makes it easy to build powerful tools like GraphiQL by leveraging
            your API’s type system.
          </p>
          <Video
            source="https://graphql.org/img/graphiql.mp4"
            playing
            loop
            controls
            width="640px"
            height="360px"
          />
        </Section>
        <Section gray>
          <Row className="row mt-5 mb-5 Code_section_vertical">
            <Column className="col col-md-6 col-sm-6 col-xs-12">
              <div className="Code_container">
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock"
                  queryBody="{
                    hero {
                      name
                      height
                      mass
                    }
                  }"
                />
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock border_separator"
                  queryBody="type Query {
                  hero: Character
                }
                
                type Character {
                  name: String
                  friends: [Character]
                  homeWorld: Planet
                  species: Species
                }
                
                type Planet {
                  name: String
                  climate: String
                }
                
                type Species {
                  name: String
                  lifespan: Int
                  origin: Planet
                }"
                />
              </div>
            </Column>
            <Column className="col col-md-4 col-sm-6 col-xs-12">
              <br />
              <h3>Evolve your API without versions</h3>
              <br />
              <p>
                Add new fields and types to your GraphQL API without impacting existing queries.
                Aging fields can be deprecated and hidden from tools. By using a single evolving
                version, GraphQL APIs give apps continuous access to new features and encourage
                cleaner, more maintainable server code.
              </p>
            </Column>
          </Row>
        </Section>
        <Section>
          <Row className="row mt-5 mb-5 Code_section_vertical">
            <Column className="col col-md-4 col-sm-6 col-xs-12">
              <br />
              <h3>Bring your own data and code</h3>
              <br />
              <p>
                GraphQL creates a uniform API across your entire application without being limited
                by a specific storage engine. Write GraphQL APIs that leverage your existing data
                and code with GraphQL engines available in many languages. You provide functions for
                each field in the type system, and GraphQL calls them with optimal concurrency.
              </p>
            </Column>
            <Column className="col col-md-6 col-sm-6 col-xs-12">
              <div className="Code_container">
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock"
                  queryBody="{
                  hero {
                    name
                    height
                    mass
                  }
                }"
                />
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock border_separator"
                  queryBody="type Query {
                hero: Character
              }
              
              type Character {
                name: String
                friends: [Character]
                homeWorld: Planet
                species: Species
              }
              
              type Planet {
                name: String
                climate: String
              }
              
              type Species {
                name: String
                lifespan: Int
                origin: Planet
              }"
                />
              </div>
            </Column>
          </Row>
        </Section>
        <Section gray title="Who’s using GraphQL?">
          <Container>
            <p>
              Facebook mobile apps have been powered by GraphQL since 2012. A GraphQL spec was open
              sourced in 2015 and is now available in many environments and used by teams of all
              sizes.
            </p>
            <BuiltWith companies={frameworks} />
          </Container>
        </Section>
        <Footer>
          <Container>
            <Row>
              <Column>
                <img src="https://graphql.org/img/logo-gray.svg" width={60} alt="GraphQL logo" />
              </Column>
              <Column>
                <ul className="list-group">
                  <li className="list-group-item disabled">Learn</li>
                  <li className="list-group-item">Introduction</li>
                  <li className="list-group-item">Query Language</li>
                  <li className="list-group-item">Type System</li>
                  <li className="list-group-item">Execution</li>
                  <li className="list-group-item">Best Practices</li>
                </ul>
              </Column>
              <Column>
                <ul className="list-group">
                  <li className="list-group-item disabled">Learn</li>
                  <li className="list-group-item">Introduction</li>
                  <li className="list-group-item">Query Language</li>
                  <li className="list-group-item">Type System</li>
                  <li className="list-group-item">Execution</li>
                  <li className="list-group-item">Best Practices</li>
                </ul>
              </Column>
              <Column>
                <ul className="list-group">
                  <li className="list-group-item disabled">Learn</li>
                  <li className="list-group-item">Introduction</li>
                  <li className="list-group-item">Query Language</li>
                  <li className="list-group-item">Type System</li>
                  <li className="list-group-item">Execution</li>
                  <li className="list-group-item">Best Practices</li>
                </ul>
              </Column>
            </Row>
            <Row>
              <Column>
                <Copyright text="Front10, Inc" showAllRightText={false} />
              </Column>
            </Row>
          </Container>
        </Footer>
      </div>
    </div>
  </ThemeSelector>
));