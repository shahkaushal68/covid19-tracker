import React, { useState } from 'react';
import { Paper, TableCell, TableContainer, TableHead, TableRow, Table, TableBody, IconButton, Collapse, Box, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TableFullDetails from './TableFullDetails';

const SideTable = ({dataTable}) => {
 const [shown, setShown] = useState(false);

 //console.log("dataTable => ", dataTable);
 
  return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' colSpan={3}>
                            <b>Country</b>
                            </TableCell>
                            <TableCell align='center' colSpan={2}>
                            <b> Details</b>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell component="th">
                                <b>Country Name</b>
                            </TableCell>
                            <TableCell>
                            <b>Country Code</b>
                            </TableCell>
                            <TableCell>
                            <b>Population</b>
                            </TableCell>
                            <TableCell>
                            <b>Total Cases</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            dataTable.map((item) => {
                                const {name, value, population, cases, flag, active, recovered, deaths} = item;
                                return(
                                    <>
                                     <TableRow>
                                        <TableCell>
                                            <IconButton
                                                aria-label="expand row"
                                                size="small"
                                                onClick={() => setShown(!shown)}
                                                timeout="auto" unmountOnExit
                                            >
                                                {
                                                    shown ? <KeyboardArrowUpIcon />  : <KeyboardArrowDownIcon/>
                                                }
                                                    
                                            </IconButton>   
                                        </TableCell>
                                        <TableCell>
                                            {name}
                                        </TableCell>
                                        <TableCell>
                                            {value}
                                        </TableCell>
                                        <TableCell>
                                            {population}
                                        </TableCell>
                                        <TableCell>
                                            {cases}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                            <Collapse in={shown} timeout="auto" unmountOnExit>
                                                <Box sx={{ margin: 1 }}>
                                                <Typography variant="h6" component="div">
                                                    Full Details
                                                </Typography>
                                                    <TableFullDetails
                                                    flag={flag}
                                                    active={active}
                                                    recovered={recovered}
                                                    deaths={deaths}
                                                    />
                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                    </>
                                )
                            })
                        }
                       
                       
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default SideTable;
