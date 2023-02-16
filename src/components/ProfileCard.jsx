import { Card, CardDescription, Icon, Image, Header } from 'semantic-ui-react'
import profilePic from '../images/profile-pic.jpeg'

const ProfileCard = () => (
  <Card style={{ padding: '15px', wordWrap: 'break-word' }}>
    <Image src={profilePic} wrapped />
    <Card.Content>
      <Card.Header>Karan Shah</Card.Header>
      <Card.Meta style={{ color: '#14171A' }}>
        <span>Consultant at Amazon Web Services (AWS)</span>
      </Card.Meta>
      <CardDescription>
        <p>
          {' '}
          <a
            href="https://www.google.com/maps/place/Newcastle+upon+Tyne"
            style={{ color: '#1DA1F2' }}
          >
            <Icon name="location arrow" />
            Newcastle Upon Tyne, United Kingdom
          </a>
        </p>
      </CardDescription>
    </Card.Content>
    <Card.Content>
      <Header>Contact Informaton</Header>
      <CardDescription>
        <p>
          {' '}
          <a href="tel:+447587957929" style={{ color: '#1DA1F2' }}>
            <Icon name="phone" />
            +44 75879 57929
          </a>
        </p>
        <p>
          {' '}
          <a href="mailto:shahkaran1990@gmail.com" style={{ color: '#1DA1F2' }}>
            <Icon name="mail" />
            shahkaran1990@gmail.com
          </a>
        </p>
        <p>
          {' '}
          <a
            href="https://linkedin.com/in/shahkaran1990"
            target={'_blank'}
            style={{ color: '#1DA1F2' }}
            rel="noreferrer"
          >
            <Icon name="linkedin" />
            LinkedIn Profile
          </a>
        </p>
        <p>
          {' '}
          <a
            href="https://github.com/awskaran"
            rel="noreferrer"
            target={'_blank'}
            style={{ color: '#1DA1F2' }}
          >
            <Icon name="github" />
            GitHub Profile
          </a>
        </p>
      </CardDescription>
    </Card.Content>
  </Card>
)

export default ProfileCard
