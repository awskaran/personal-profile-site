import { useState, useEffect } from 'react'
import { Card, Header, List } from 'semantic-ui-react'
import { register } from 'swiper/element/bundle'
import PropTypes from 'prop-types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function getWindowDimensions () {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

// import Carousel from "semantic-ui-carousel-react";
register()

const ProjectCards = ({ projects }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize () {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <swiper-container
      slides-per-view={windowDimensions.width < 700 ? '1' : '2'}
      navigation="true"
      pagination={{ clickable: 'true' }}
      style={{ padding: '15px' }}
      space-between="20"
      rewind="true"
      autoplay="true"
    >
      {projects.reverse().map((project, index1) => {
        return (
          <swiper-slide key={index1}>
            <Card key={index1} style={{ wordWrap: 'break-word' }} fluid>
              <Card.Content>
                <Card.Description>
                  <Header as={'h3'}>{project.title}</Header>
                </Card.Description>
                <Card.Description
                  style={{ padding: '15px 0px 0px 0px', minHeight: 50 }}
                >
                  <b>Tools </b>: {project.tools}
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description style={{ minHeight: 250 }}>
                  <List bulleted size="medium">
                    {project.responsibilities.map((responsibility, index2) => {
                      return (
                        <List.Item key={index2}>{responsibility}</List.Item>
                      )
                    })}
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          </swiper-slide>
        )
      })}
    </swiper-container>
  )
}
ProjectCards.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectCards
