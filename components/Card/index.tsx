import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import { Container, TagBox } from './styles'
import Router from 'next/router'

interface Props {
  id: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 24
  },
  media: {
    height: 140,
  }
});

export default function MediaCard({ id, description, tags, imageUrl }: Props) {
  const classes = useStyles();

  const formatQueryDescription = (d: string): string => {
    let formatted = d.replace(/ /gi, "-")
    return formatted
  }

  return (
    <Container >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            onClick={() => Router.push("/post/[id]", `/post/${id}?description=${formatQueryDescription(description)}`)}
            //image="/static/images/cards/contemplative-reptile.jpg"
            title="teste"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2"
              onClick={() => Router.push("/post/[id]", `/post/${id}?description=${formatQueryDescription(description)}`)}>
              {description}
            </Typography>
            <TagBox>
              {tags && tags.map(t => <p>{t}</p>)}
            </TagBox>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link href="/post/[id]" as={`/post/${id}?description=${formatQueryDescription(description)}`} >
              <a>
                Ler
              </a>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}