import React from 'react'
import { ChangeEventHandler } from 'react';
/** MUI */
import { TextField, Grid } from '@mui/material'

interface MyProps {
  placeholder: string;
  label: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

class SearchBox extends React.Component<MyProps> {

  render() {
    return (
      <Grid 
        container
        justifyContent="center"
        sx={{mt:2,p:1}}
      >
        <TextField
          variant="outlined"
          placeholder={this.props.placeholder}
          label={this.props.label}
          onChange={this.props.onChangeHandler}
        />

      </Grid>
    )
  }

}

export default SearchBox;


      