import React from 'react'
import classNames from 'classnames'
import PropsTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

function PostCard({ styleClass }) {
  const classes = useStyles()

  return (
    <Card className={classNames(classes.root, styleClass)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://firebasestorage.googleapis.com/v0/b/react-blog-b8c0a.appspot.com/o/logo-back-1.jpg?alt=media&token=7c12b4d3-9137-4783-9888-8d6285f8800d"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

PostCard.propTypes = {
  styleClass: PropsTypes.string,
}

export default PostCard
