import React from "react";
import { Card, Label, Header } from "semantic-ui-react";

const SkillsCard = () => (
  <Card>
    <Header style={{ padding: "15px 0px 0px 15px" }}>Skills</Header>
    <Card.Content>
      <Card.Meta style={{ color: "#14171A" }}>Architecture Styles</Card.Meta>
      <Card.Description>
        <Label color="blue">SOA</Label>
        <Label color="blue">Microservices</Label>
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Meta style={{ color: "#14171A" }}>Architecture Patterns</Card.Meta>
      <Card.Description style={{ color: "#14171A" }}>
        <Label color="blue">Domain Driven Design</Label>
        <Label color="blue">Event Sourcing</Label>
        <Label color="blue">API Gateway</Label>
      </Card.Description>
      <Card.Description style={{ padding: "5px 0px 0px 0px" }}>
        <Label color="blue">Command Query Responsibility Segregator</Label>
        <Label color="blue">Bulkhead</Label>
      </Card.Description>
      <Card.Description style={{ padding: "5px 0px 0px 0px" }}>
        <Label color="blue">Decomposition</Label>
        <Label color="blue">Circuit Breaker</Label>
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Meta style={{ color: "#14171A" }}>Programming Languages</Card.Meta>
      <Card.Description>
        <Label color="blue">Bash</Label>
        <Label color="blue">JavaScript</Label>
        <Label color="blue">Java</Label>
        <Label color="blue">Python</Label>
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Meta style={{ color: "#14171A" }}>Operating Systems</Card.Meta>
      <Card.Description>
        <Label color="blue">Microsoft Windows</Label>
        <Label color="blue">Linux</Label>
        <Label color="blue">Unix</Label>
        <Label color="blue">macOS</Label>
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Meta style={{ color: "#14171A" }}>Databases</Card.Meta>
      <Card.Description>
        <Label color="blue">Amazon Aurora</Label>
        <Label color="blue"> Amazon DynamoDB</Label>
        <Label color="blue">MongoDB</Label>
      </Card.Description>

      <Card.Description style={{ padding: "5px 0px 0px 0px" }}>
        <Label color="blue">ElasticSearch</Label>
        <Label color="blue">PostgreSQL</Label>
        <Label color="blue">Redis</Label>
      </Card.Description>
    </Card.Content>

    <Card.Content>
      <Card.Meta style={{ color: "#14171A" }}>Cloud Providers</Card.Meta>
      <Card.Description>
        <Label color="blue">AWS</Label>
        <Label color="blue">Microsoft Azure</Label>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default SkillsCard;
