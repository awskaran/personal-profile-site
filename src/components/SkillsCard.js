import React from "react";
import { Card, Label, Header } from "semantic-ui-react";

const skills = [
  {
    title: "Architecture Styles",
    tools: ["SOA", "Microservices"],
  },
  {
    title: "Architecture Patterns",
    tools: [
      "Domain Driven Design",
      "Event Sourcing",
      "API Gateway",
      "Command Query Responsibility Segregator",
      "Bulkhead",
      "Decomposition",
      "Circuit Breaker",
    ],
  },
  {
    title: "Programming Languages",
    tools: ["JavaScript", "Python", "Bash", "Java"],
  },
  {
    title: "Operating Systems",
    tools: ["Microsoft Windows", "Linux", "Unix", "macOs"],
  },
  {
    title: "Databases",
    tools: [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "MongoDB",
      "ElasticSearch",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "Cloud Providers",
    tools: ["AWS", "Azure"],
  },
];

const SkillsCard = () => (
  <Card>
    <Header style={{ padding: "15px 0px 0px 15px" }}>Skills</Header>
    {skills.map((skill) => {
      return (
        <Card.Content>
          <Card.Meta style={{ color: "#14171A" }}>{skill.title}</Card.Meta>
          <Card.Description>
            {skill.tools.map((tool) => {
              return (
                <Label style={{ marginTop: "5px" }} color="blue">
                  {tool}
                </Label>
              );
            })}
          </Card.Description>
        </Card.Content>
      );
    })}
  </Card>
);

export default SkillsCard;
