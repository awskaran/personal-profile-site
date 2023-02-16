import "./App.css";
import ProfileCard from "./components/ProfileCard";
import AboutMeCard from "./components/AboutMeCard";
import SkillsCard from "./components/SkillsCard";
import CertificationBadges from "./components/CertificationBadges";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCards from "./components/ProjectCards";
import { Header, Grid, Card } from "semantic-ui-react";

function App() {
  return (
    <div style={{ padding: "10px", height: "100%" }}>
      <Grid>
        <Grid.Row>
          <Card.Group itemsPerRow={4} stackable style={{ padding: "15px" }}>
            <ProfileCard></ProfileCard>

            <AboutMeCard></AboutMeCard>

            <SkillsCard></SkillsCard>
            <ExperienceCard></ExperienceCard>
          </Card.Group>
        </Grid.Row>
        <Grid.Row centered style={{ padding: "5px 25px 5px 25px" }}>
          <Header as="h2" color="teal" textAlign="center">
            Projects
          </Header>
        </Grid.Row>
        <Grid.Row style={{ padding: "5px 25px 5px 25px" }}>
          <Grid.Column width={16}>
            <ProjectCards></ProjectCards>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Header as="h2" textAlign="center" color="teal">
            Certifications
          </Header>
        </Grid.Row>
        <Grid.Row>
          <CertificationBadges />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
