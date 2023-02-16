import { Card, Header, List } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const AboutMeCard = ({ aboutme }) => (
  <Card style={{ wordWrap: 'break-word' }}>
    <Header style={{ padding: '15px 0px 0px 15px' }}>{aboutme.title}</Header>
    <Card.Content>
      <Card.Description style={{ color: '#14171A' }}>
        <List bulleted size="large">
          {aboutme.points.map((point, index) => (
            <List.Item key={index}>{point}</List.Item>
          ))}
        </List>
      </Card.Description>
    </Card.Content>
  </Card>
)

AboutMeCard.propTypes = {
  aboutme: PropTypes.object.isRequired
}

export default AboutMeCard
