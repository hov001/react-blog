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

function PostCard({ styleClass, postTitle, postText, author, date }) {
  const classes = useStyles()

  return (
    <Card className={classNames(classes.root, styleClass)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://firebasestorage.googleapis.com/v0/b/react-blog-b8c0a.appspot.com/o/no-image.png?alt=media&token=c776860b-6ab7-46d6-ac84-f55af6960d92"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {postTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {postText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions display={'flex'} justifycontent={'space-between'}>
        <Typography variant="body2" color="textSecondary" component="p">
          {date}
        </Typography>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

PostCard.propTypes = {
  styleClass: PropsTypes.string,
  postTitle: PropsTypes.string,
  postText: PropsTypes.string,
  author: PropsTypes.string,
  date: PropsTypes.string,
}

export default PostCard
