import './App.css';
import React from 'react';
import MonsterList from './components/monster-list/MonsterList';
import SearchBox from './components/search-box/SearchBox';
import AppBarHeader from './components/app-bar/AppBarHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getData } from './utils/data.utils';
import MonsterDetails from './components/monster-details/MonsterDetails';


/** MUI */
import { ThemeProvider, createTheme, Container, TextField, Typography, Grid, Stack, AppBar } from '@mui/material'
import CssBaseline from "@mui/material/CssBaseline";


const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface MyProps {

}

interface MyState {
  monsterList: IMonster[];
  lightTheme: boolean;
}

export interface IMonster {
  id: string;
  name: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    zipcode?: string;
    suite?: string;
  };
  website?: string;
}


class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props)
    this.state = {
      monsterList: [],
      lightTheme: true
    }
  }


  switchTheme = () => {
    this.setState({
      lightTheme: !this.state.lightTheme
    })
  }

  componentDidMount() {
    const fetchUsers = async () => {
      const users = await getData<IMonster[]>('https://jsonplaceholder.typicode.com/users');
      this.setState({monsterList: users})
    }
    fetchUsers();
  }



  render() {

    const { monsterList, lightTheme } = this.state;
    const { switchTheme } = this;

    return (
      <ThemeProvider theme={lightTheme ? themeLight : themeDark}> 
       <CssBaseline />
        <Router>
          <Grid >
            <AppBarHeader themeHandler={switchTheme}/>
            <Routes>
              <Route
                path="/"
                element={<MonsterList monsters={monsterList}/>}
              />
              <Route
                path="monster/:id"
                element={<MonsterDetails />}
              />
            </Routes>
            {/* <SearchBox
              onChangeHandler={onSearchChange}
              label="Monster Search"
              placeholder="Enter Monster's Name"/> */}
           

          </Grid>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App;
