import { Card, Label, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const SkillsCard = ({ skills }) => (
  <Card>
    <Header style={{ padding: '15px 0px 0px 15px' }}>Skills</Header>
    {skills.map((skill, index1) => {
      return (
        <Card.Content key={index1}>
          <Card.Meta style={{ color: '#14171A' }}>{skill.title}</Card.Meta>
          <Card.Description>
            {skill.tools.map((tool, index2) => {
              return (
                <Label key={index2} style={{ marginTop: '5px' }} color="blue">
                  {tool}
                </Label>
              )
            })}
          </Card.Description>
        </Card.Content>
      )
    })}
  </Card>
)

SkillsCard.propTypes = {
  skills: PropTypes.array.isRequired
}

export default SkillsCard
