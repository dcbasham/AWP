import {
  Paper,
  CssBaseline,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import React from 'react';
export default function Description() {
  return (
    <Paper elevation={3}>
      <Typography component="h2" variant="h6">
        Description
      </Typography>
      <Typography>
        <List style={{ padding: '10px' }}>
          {' '}
          Technologies visited:
          <ListSubheader>react-color</ListSubheader>
          <ListItem>
            <ListItemText>
              A very cool color picker component available as an npm package
              that I discovered when I was developing my project. The first
              version was a simple class component I developed on my own while
              consulting a book called "Learning React: A Hands-On Guide to
              building Web Applications Using React and Redux" by Kirupa
              Chinnathambi. It had an input to type a color and showed a color
              on the card. I love websites like coolors.co that behave as color
              generators for hex codes so I decided to develop something similar
              and used react-color's Sketch component.
            </ListItemText>
          </ListItem>
          <ListSubheader>Cypress.io</ListSubheader>
          <ListItem>
            <ListItemText>
              Testing with cypress was a little more difficult than I thought
              but it would be a great resource to learn how to use for testing
              react components. Along these lines I also explored Jest and the
              React testing library.{' '}
            </ListItemText>
          </ListItem>
          <ListSubheader>Material-Ui</ListSubheader>
          <ListItem>
            <ListItemText>
              So many things used in here from Material UI but I'd highlight
              working with menus, containers and photos.
            </ListItemText>
          </ListItem>
          <ListSubheader>CodeSandBox</ListSubheader>
          <ListItem>
            <ListItemText>
              although i do enjoy learning by doing I learned the value of
              testing and playing with a project in CodeSandBox before writing
              code in my editor. It's definently easier and more time-conscious
              to test and develop direction with something that is already
              functional.
            </ListItemText>
          </ListItem>
          <ListSubheader>React and Webpack</ListSubheader>
          <ListItem>
            <ListItemText>
              Creating projects from scratch in vsCode from memory. Using
              create-react-app for the first time, react-icons,
              webpack-dev-server.
            </ListItemText>
          </ListItem>
          <ListSubheader>Using icons</ListSubheader>
          <ListItemText>
            react-icons and material-ui icons. Also found how to use emojis in
            code through this article
          </ListItemText>
          <ListItemText>
            <Link href="https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7">
              How to use emojis in react
            </Link>
          </ListItemText>
        </List>
      </Typography>
    </Paper>
  );
}
