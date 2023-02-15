import React from "react";
import { Card, Header, List } from "semantic-ui-react";
import { register } from "swiper/element/bundle";

// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

// import Carousel from "semantic-ui-carousel-react";
register();
const projects = [
  {
    title: "Developer at UK Central Goverment Department (Mar 2012 - Dec 2015)",
    tools:
      "IBM BPM, IBM DataPower, IBM MQ 7.0, Proatria SFTP+, VSS, SVN, GIT, Tivoli Access Manager, Tivoli Identity Manager, Jenkins, J2EE, Shell script, Python, Ant, SQL and XSLT",
    responsibilities: [
      "Developing and maintaining interfaces in IBM Integration Designer to integrate over 15 end systems.",
      "Prepare Service Contract Definition for the interfaces based on the functional design documents.",
      "Requirement Analysis, Map the requirements and prepare Low-Level Design (LLDs) and Data Mapping Sheet (DMS), develop and test the implementation of the interfaces.",
      "Exposing/consuming SOAP and REST web services using WSDL and XSDs to/from external systems.",
      "Writing Custom Java code using IDE Eclipse to implement reusable functions as per the requirements.",
      "Enabling security for all the new interfaces using Datapower.",
      "Implementing a file transfer gateway using Proatria’ SFTP+.",
      "Development of scripts for automated build and deployment.",
      "Performing quality-related activities such as code walkthroughs, IQA, peer reviews to provide defect-free delivery and documenting developed code using TCS Process Methodology and Templates.",
    ],
  },
  {
    title: "Technical Lead at US Kidney Care provider (Jan 2016 - Mar 2017)",
    tools:
      "IBM BPM, IBM Extreme Scale, IBM PureApp, IBM ODM, Elastic search, Spring Boot, Apache Kafka, APIGEE, Denodo, IBM HTTP Server",
    responsibilities: [
      "Prepared and presented various technology options for customer’s digital transformation journey.",
      "Worked with customer's architect team to design future state of IT system.",
      "Lead a team of five members to develop an integration solution using IBM Integration Designer.",
      "Lead a team of developers to design and implement a caching solution using IBM WebSphere Extreme Scale.",
      "Designed a continuous integration and deployment pipeline and trained a team for enhancing and maintaining the solution.",
      "Helped in the implementation of an Event stream to ensure eventual data consistency between Legacy and Digital applications.",
      "Designed an anti-corruption layer using Denodo to ensure smooth running dual-architecture.",
      "Involved in designing an API gateway using APIGEE that helped customer unlock API monetization.",
      "Helped the customer identify issues with tightly coupled service-oriented architecture.",
      "Provided technical inputs in the design of a Private Cloud using IBM PureApp.",
    ],
  },
  {
    title:
      "Technical Architect at UK Central Goverment Department (Apr 2017- Aug 2018)",
    tools:
      "Elastic Stack, Elastic Cloud, Elastic APM, Fluentd, Prometheus, Grafana, Zabbix",
    responsibilities: [
      "Evaluate different products like Prometheus, Grafana, Zabbix, Nagios and Elastic Stack.",
      "Design and implement system monitoring solution using Elastic stack and Fluentd.",
      "Design a scalable, fault-tolerant and secure deployment architecture.",
      "Manage a team of developers to create custom monitoring components to tap into performance data from COTs products.",
      "Upgraded an open-source Lumberjack based Java agent to meet customer's monitoring requirement.",
      "Trained customer to use the new monitoring stack for operational purpose",
    ],
  },
  {
    title:
      "Solution Architect at UK Central Goverment Department (Aug 2018 – Feb 2020)",
    tools:
      "NodeJS, MongoDB, NGINX, Docker, Confluent Kafka, Redis, Terraform, Packer, Jenkins, Nexus. Multiple AWS services including Lambda, EKS, S3, SNS, SQS etc.",
    responsibilities: [
      "Responsible for the design and implementation of key Business applications for the customer, to align with DWP' Digital strategy",
      "Helped customer design a high throughput solution to enable decommissioning of Legacy Case Management Applications by ensuring relevant data being migrated to current CRM to comply with Data Access rules.",
      "Worked on an extensible event driven micro-service solution which enables compliance with GDPR by applying data retention across multiple systems, based on event subscription.",
      "Contributed to the design and development of customer' citizen-facing Self Service Portal and the new Online Applications Portal.",
      "Helped customer design solutions to integrate with DWP offerings like Gov Pay and Real-time Income.",
      "Designing new solutions to abstract core business logic into new Microservices while strangulating the COTS application",
      "Ensuring governance approvals for Solutions from Digital Design Authority, Security Architects and Data Protection Accessors.",
      "Contributing to deparment's architecture principles that add onto DWP guidelines.",
    ],
  },
  {
    title: "Cloud Consultant for Local Councils (Apr 2021)",
    tools: "Amazon Connect, Azure AD, JavaScript",
    responsibilities: [
      "Created Amazon Connect contact centre with default example constructs was used to create a working prototype early (using pre-set queue, working hours, contact flows, routing & security profiles).",
      "Integrated with Azure AD authentication for SSO.",
      "Integrated with Microsoft Dynamics for contact look-ups and contact identification.",
      "Worked with Amazon Support to enable key service quotas for call volumes and calling destinations.",
    ],
  },
  {
    title:
      "Cloud Consultant for International Exams Group (May 2021 – Jul 2021)",
    tools:
      "React, Amazon API Gateway, Amazon OpenSearch, Amazon RDS, AWS Lambda, Amazon Cognito, Amazon S3, AWS KMS among other AWS services; AWS CDK",
    responsibilities: [
      "Responsible for discovery and design of a be-spoke platform to allow teachers to search for relevant content in assessment guides to support the grading process.",
      "Assisted in designing an online platform for test centres to submit grades, moderators to review and approve the grades.",
      "Build a serverless platform for backend using API Gateway and Lambda.",
      "Web application hosting also done serverless using Amazon S3 and CloudFront.",
      "Developed a CI/CD pipeline to deploy the infrastructure across multiple AWS accounts supporting the required software development lifecycle.",
    ],
  },
  {
    title:
      "Cloud Consultant for UK Railways Membership Body (Jul 2021 – Aug 2021)",
    tools:
      "AWS Config, AWS Security Hub, Amazon GuardDuty, Amazon Macie, AWS IAM Access Analyzer, AWS CloudFormation",
    responsibilities: [
      "Conducted a series of discovery workshops to recommend and implement a set of detective controls.",
      "Created an extensible design to manage compliance and security at scale using AWS services, with an integrated notifications setup.",
      "AWS Services setup in aggregator mode to provide required visibility using a non-intrusive repeatable pattern to be deployed across partner operated accounts.",
    ],
  },
  {
    title:
      "Cloud Consultant - Cloud Kickstarter Offering Delivery (Aug 2021 – Oct 2021)",
    tools:
      "AWS Control Tower, AWS SSO, AWS Networking Services (VPC, S2S VPN, Transit Gateway etc.), AWS Security Services (Security Hub, GuardDuty, Macie), AWS Budgets",
    responsibilities: [
      "Co-developed a repeatable offering to kickstart customer’s cloud journey.",
      "Completed delivery of the offering successfully to a major local council in Yorkshire county and a major university in Wales.",
      "Conducted a series of five workshops to identify requirements and provide prescriptive guidance for multi-account strategy, security, networking and governance in AWS Cloud.",
      "The implementation follows AWS well-architected framework and provided hands-on introduction to various AWS services and their capabilities.",
      "The offering has since been delivered to many more customers.",
    ],
  },
  {
    title:
      "Cloud Consultant for Transit and Mobility Solutions provider (Nov 2021 – Jan 2022)",
    tools:
      "Multi-account strategy, Server migration, Application migration, Centralised networking, Federated identity management, Backups, Disaster recovery",
    responsibilities: [
      "Led a series of discovery sessions to identify key migration assets and stages.",
      "Helped customer work around networking constraints to enable re-use of existing Client VPN and S2S VPN to connect end devices to applications.",
      "Provided customer with a re-platforming approach for application migration with road-map for modernisation.",
      "Designed cloud infrastructure to meet varying RPO and RTO requirements using customised backup and high availability strategies.",
    ],
  },
  {
    title:
      "Cloud Consultant for Digital pathology and medical imaging research (Jan 2022 – Apr 2022)",
    tools:
      "React, AWS Transfer Family, Amazon Macie, AWS Step Functions, Amazon API Gateway, Amazon OpenSearch, Amazon DynamoDB, AWS Lambda, Amazon Cognito, Amazon S3, AWS KMS among other AWS services; AWS CDK",
    responsibilities: [
      "Led a series of discovery and implementation sessions for a multi-account setup.",
      "Led a series of discovery session to design a data ingestion, storage, search and view functionality for a tissue image dataset.",
      "Implemented a data ingestion pipeline to validate, process, extract metadata and create thumbnails from the image files.",
      "Implemented a frontend integrated with APIs to enable search and retrieve of image dataset.",
      "Integrated a SaaS anti-virus solution and Macie scanning for preventing infected files or PII data from entering the system.",
      "Enabled access for researchers to use the dataset for training machine learning models and using them to run inferencing.",
      "Inferencing from ML data models will help NHS pathologists to deliver faster disease diagnostics.",
      "Designed a bespoke role-based access control using Amazon Cognito and Amazon OpenSearch.",
    ],
  },
];

const ProjectCards = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <swiper-container
      slides-per-view={windowDimensions.width < 700 ? "1" : "2"}
      navigation="true"
      pagination={{ clickable: "true" }}
      style={{ padding: "15px" }}
      space-between="20"
      rewind="true"
    >
      {projects.reverse().map((project, index1) => {
        return (
          <swiper-slide key={index1}>
            <Card key={index1} style={{ wordWrap: "break-word" }} fluid>
              <Card.Content>
                <Card.Description>
                  <Header as={"h3"}>{project.title}</Header>
                </Card.Description>
                <Card.Description style={{ padding: "15px 0px 0px 0px" }}>
                  <b>Tools </b>: {project.tools}
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description extra="true">
                  <List bulleted size="medium">
                    {project.responsibilities.map((responsibility, index2) => {
                      return (
                        <List.Item key={index2}>{responsibility}</List.Item>
                      );
                    })}
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default ProjectCards;
