import React from 'react'
import MonsterCard from '../card/MonsterCard';
import SearchBox from '../search-box/SearchBox';
import { IMonster } from '../../App';

/** MUI */
import { Grid } from '@mui/material'

interface MyProps {
  monsters: IMonster[]; 
}

interface MyState {
  searchField: string;
}

class MonsterList extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      searchField: '',
    }
  }
  
  render() {
    const { monsters } = this.props;
    const foundMonsters =  monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchField };
      });
    }
    
    return (
      <>
      <SearchBox
        onChangeHandler={onSearchChange}
        label="Monster Search"
        placeholder="Enter Monster's Name"
      />
        <Grid sx={{m:2, mx: "15%"}}>
          <Grid container justifyContent="center" spacing={3}>
            {foundMonsters.map((monster) => {
              return (
                 <MonsterCard key={monster.id} monster={monster} />
              )})}
          </Grid>
        </Grid>
      </>
    )
  }
}

export default MonsterList