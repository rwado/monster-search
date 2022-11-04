import { Card, CardContent, CardMedia, Container, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IMonster } from '../../App';


const MonsterDetails = () => {
    const location = useLocation();
    const monster: IMonster = location.state.monster;

    console.log(monster)
    return (
        <Container style={{minWidth: "300px", marginTop: "30px", maxWidth: "550px"}}>
            <Card sx={{boxShadow: "1px 1px 4px 2px #888888", p: 5}}>
                <CardMedia 
                    component="img"
                    height="150"
                    image={`https://robohash.org/${monster?.id}?set=set2&size=150x150`}
                    alt={`Monster: ${monster?.name}`}
                />
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <Typography variant="h5" sx={{fontWeight: 600}}>General Info</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{monster.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Email</TableCell>
                                <TableCell>{monster.email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Website</TableCell>
                                <TableCell>{monster.website}</TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell colSpan={2}>
                                    <Typography variant="h5" sx={{fontWeight: 600}}>Address</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Street</TableCell>
                                <TableCell>
                                    {`${monster.address?.street}, ${monster.address?.suite}`} 
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>City</TableCell>
                                <TableCell>
                                    {monster.address?.city}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </Container>
    )
}

export default MonsterDetails;


      