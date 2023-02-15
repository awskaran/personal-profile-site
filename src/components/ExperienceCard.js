import React from "react";
import { Card, Header, Tab, List, ListItem } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Current",
    render: () => (
      <Tab.Pane attached="false" as="Card">
        <Card.Content style={{ padding: "15px" }}>
          <Card.Meta style={{ color: "#14171A" }}>
            <b>Amazon Web Services</b> (March 2021 - Present)
          </Card.Meta>
          <Card.Description style={{ padding: "10px 0px 0px 0px" }}>
            <List>
              <ListItem>
                As a cloud solutions consultant I help accelerate AWS's growing
                Local /Education/Not for Profit business in the UK.
              </ListItem>
              <ListItem>
                Organisations in these sectors face huge challenges in improving
                and expanding their services to citizens, students and
                beneficiaries, whilst managing with ever more constrained
                resources.
              </ListItem>
              <ListItem>
                {" "}
                Cloud technology presents a real opportunity to transform
                service as well as increase operational efficiencies, and I help
                our customers realise those benefits.
              </ListItem>
            </List>
          </Card.Description>
          <Card.Description>
            <Header
              as={"h5"}
              color="grey"
              style={{ padding: "10px 0px 0px 0px" }}
            >
              Responsibilities
            </Header>
            <List bulleted>
              <ListItem>
                Performing discovery with customers to understand their
                requirements - both technical and desired business outcomes
              </ListItem>
              <ListItem>
                Creating well-architected solution options for customers and
                supporting them through the decision-making process to produce
                target architectures and solutions
              </ListItem>
              <ListItem>
                Using Agile software development methodologies to build
                solutions for customers using AWS services
              </ListItem>
              <ListItem>
                Establishing foundational AWS services including Control Tower,
                IAM, Networking, CloudFormation Templates, guardrails,
                monitoring and automation.
              </ListItem>
              <ListItem>
                Working effectively with a team of fellow consultants to
                throughout the consulting lifecycle, from scoping through
                delivery and to customer handover, including helping customers
                plan for operationalising their solutions
              </ListItem>
              <ListItem>
                Contributing to intellectual property development including case
                studies, blogs, reference architectures and offering development{" "}
              </ListItem>
              <ListItem>
                Supporting pre-sales activities and the shaping of new
                Professional Services engagements
              </ListItem>
            </List>
          </Card.Description>
        </Card.Content>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Previous",
    render: () => (
      <Tab.Pane attached="false" as="Card">
        <Card.Content style={{ padding: "15px" }}>
          <Card.Meta style={{ color: "#14171A" }}>
            <b>Tata Consultancy Services</b> (October 2011 - February 2021)
          </Card.Meta>
          <Card.Description style={{ padding: "10px 0px 0px 0px" }}>
            <List>
              <ListItem>
                As a solution architect working with UK central government I
                helped designing and developing cloud-native citizen-facing
                applications to increase digital footprint.
              </ListItem>
              <ListItem>
                Utilizing deep contextual knowledge I helped TCS customers in
                strangulating their core COTS application to create a loosely
                coupled ecosystem of micro-services.
              </ListItem>
              <ListItem>
                Helped multiple customer in realising and enabling the
                re-architecting from a traditional Service-Oriented Architecture
                to an Event-Driven Architecture.
              </ListItem>
            </List>
          </Card.Description>
          <Card.Description>
            <Header
              as={"h5"}
              color="grey"
              style={{ padding: "10px 0px 0px 0px" }}
            >
              Responsibilities
            </Header>
            <List bulleted>
              <ListItem>
                Responsible for the design and implementation of key business
                applications for UK central government departments to align with
                government's Digital strategy.
              </ListItem>
              <ListItem>
                Helped customers define long term architecture road-map
                including tooling selection.
              </ListItem>
              <ListItem>
                Worked on an extensible event driven micro-service solution
                which enables compliance with GDPR by applying data retention
                across multiple systems, based on event subscription.
              </ListItem>
              <ListItem>
                Contributed to the design and development of citizen-facing
                portals increasing self-service.
              </ListItem>
              <ListItem>
                Helped customer evolve, develop and deploy centralised
                infrastructure and application monitoring capabilities.
              </ListItem>
              <ListItem>
                Worked with multiple customers maintiain and upgrade legacy
                middleware tooling for long-term operability.
              </ListItem>
              <ListItem>
                Involved in large scale on-prem to cloud migrations involving
                multiple datacenter exits involving rearchitecting, refactoring,
                rehosting, and retiring strategies.
              </ListItem>
            </List>
          </Card.Description>
        </Card.Content>
      </Tab.Pane>
    ),
  },
];
const ExperienceCard = () => (
  <Card>
    <Header style={{ padding: "15px 0px 0px 15px" }}>Experience</Header>
    <Tab
      menu={{
        color: "blue",
        fluid: true,
        pointing: true,
        secondary: true,
      }}
      panes={panes}
    />
  </Card>
);

export default ExperienceCard;
