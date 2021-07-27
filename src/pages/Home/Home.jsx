import React from 'react'
import PostCard from '../../components/Card/Card'
import { Container } from '@material-ui/core'
import homeStyle from './home.style'

function Home() {
  const homeClasses = homeStyle()

  return (
    <Container component="main" maxWidth="lg">
      <div className={homeClasses.paper}>
        <PostCard styleClass={homeClasses.item} />
        <PostCard styleClass={homeClasses.item} />
        <PostCard styleClass={homeClasses.item} />
        <PostCard styleClass={homeClasses.item} />
        <PostCard styleClass={homeClasses.item} />
      </div>
    </Container>
  )
}

export default Home
