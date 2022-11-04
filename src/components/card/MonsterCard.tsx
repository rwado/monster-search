import React from 'react'

/** MUI */
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { IMonster } from '../../App';
import { Link } from 'react-router-dom';

interface MyProps {
  monster: IMonster;
}

class MonsterCard extends React.Component<MyProps> {

  render() {
    const { monster } = this.props;
    return (
      <Grid  
      item xs={10} sm={6} md={4} lg={3} xl={3}>
         <Link
            to={{pathname: `/monster/${monster.id}`}}
            state={{monster: monster}}
            style={{ textDecoration: 'none', color: "white"}}
          >
        <Card
          sx={{
            boxShadow: "1px 1px 4px 2px #888888",
            minWidth: 200,
            height: "auto",
            transition: "transform .2s",
            "&:hover": {
              cursor: "pointer",
              transform: "scale(1.08)"
            }}}>
            <CardContent>
              <CardMedia 
                component="img"
                height="150"
                image={`https://robohash.org/${monster.id}?set=set2&size=150x150`}
                alt={`Monster: ${monster.name}`}
              />
              <Typography variant="h6" sx={{mt: 1, fontSize:"14px"}}>
                {monster.name}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    )
  }
}

export default MonsterCard;