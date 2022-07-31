import * as React from 'react';
import {
  Divider,
  Link,
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Typography,
} from '@mui/material';
import { FaReact } from 'react-icons/fa';
import { SiMaterialui } from 'react-icons/si';
import Emoji from './emoji';

export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Emoji symbol="🎨" label="artist-palette" />
          </ListItemIcon>
          <ListItemText>
            <Link href="https://uiwjs.github.io/react-color/#/">
              Color-Picker Component
            </Link>{' '}
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon style={{ height: '24px' }}>
            <img
              alt="cypress.io"
              src="https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/16c7d/cypress-logo.png"
            />
          </ListItemIcon>
          <ListItemText>
            <Link href="https://www.cypress.io/">Cypress.io</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Avatar src="https://v4.mui.com/static/logo.png" alt="mui_icon" />
          </ListItemIcon>
          <ListItemText>
            <Link href="https://mui.com/material-ui/api/avatar/">
              Material-UI: Avatar{' '}
            </Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SiMaterialui />
          </ListItemIcon>
          <ListItemText>
            <Link href="https://mui.com/material-ui/icons/#createsvgicon">
              {' '}
              Material-Ui:Icons
            </Link>{' '}
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FaReact />
          </ListItemIcon>
          <ListItemText>
            <Link href="https://reactjs.org/docs/hooks-state.html">
              React Hooks
            </Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FaReact color="blue" />
          </ListItemIcon>
          <ListItemText>
            <Link
              href="https://react-icons.github.io/react-icons/search?q=react"
              alt="react-icons"
            >
              react-icons
            </Link>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
