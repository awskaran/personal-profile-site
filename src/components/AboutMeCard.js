import React from "react";
import { Card, Header, List, ListItem } from "semantic-ui-react";

const AboutMeCard = () => (
  <Card style={{ wordWrap: "break-word" }}>
    <Header style={{ padding: "15px 0px 0px 15px" }}>About Me</Header>
    <Card.Content>
      <Card.Description style={{ color: "#14171A" }}>
        <List bulleted size="large">
          <List.Item>
            Result-driven Solution Architect with extensive knowledge and 12
            years of experience in design, development and maintenance of highly
            scalable and resilient cloud-native IT solutions.
          </List.Item>
          <List.Item>
            Proven track record of supporting clients in the adoption of digital
            technologies to transform Core Business capabilities.
          </List.Item>
          <List.Item>
            Spearheaded projects to replace Legacy COTs applications with
            Domain-Driven microservices to provide agility in delivering
            Business value for customers.
          </List.Item>
          <List.Item>
            Expertise in design and development of applications using the
            Twelve-Factor app methodology.
          </List.Item>
          <List.Item>
            Working experience in designing loosely coupled event-driven
            applications and also CQRS based eventually consistent applications.
          </List.Item>
          <List.Item>
            Developed web applications using Java, J2EE Technologies, Spring,
            Hibernate, Spring Boot, HTML & CSS.
          </List.Item>
          <List.Item>
            Hands-on full stack development experience using MERN stack.
          </List.Item>
          <List.Item>
            Experience on DevOps tools like Jenkins, Ansible, GitLab, AWS CDK,
            CloudFormation, Terraform, Artifactory, Nexus, Atlassian Products.
          </List.Item>
          <ListItem>
            Experience in both relational and non-relational databases, in
            addition to a variety of caching technologies.
          </ListItem>
        </List>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default AboutMeCard;
