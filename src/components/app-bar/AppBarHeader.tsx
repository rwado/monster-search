import React from 'react'
import ThemeSwitch from './ThemeSwitch';


/** MUI */
import { AppBar, Toolbar, Typography } from '@mui/material'

interface MyProps {
  themeHandler: () => void;
}

class AppBarHeader extends React.Component<MyProps> {
  render() {
    return (
      <AppBar position="sticky" >
        <Toolbar>
          <Typography
            variant="h4"
            sx={{m: 1, flexGrow: 1}}
          >
            Monster Search
          </Typography>
          <ThemeSwitch themeHandler={this.props.themeHandler}/>
        </Toolbar>
      </AppBar>
    )
  }
}

export default AppBarHeader;

