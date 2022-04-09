import React from 'react';
import { TableCell, TableHead, TableRow, Table, TableBody} from '@mui/material';

const TableFullDetails = ({flag, active, recovered, deaths}) => {
  return(
    <Table size="small" aria-label="purchases" className='sidetable_country_fulldetail'>
    <TableHead>
        <TableRow>
            <TableCell><b>Flag</b></TableCell>
            <TableCell><b>Active Cases</b></TableCell>
            <TableCell><b>Total Recovers</b></TableCell>
            <TableCell><b>Total Deaths</b></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell component="th" scope="row">
                <img src={flag} height={50} width={50} alt="country-flag"/>
            </TableCell>
            <TableCell>{active}</TableCell>
            <TableCell>{recovered}</TableCell>
            <TableCell>{deaths}</TableCell>
        </TableRow>
    </TableBody>
</Table>  
    );
};

export default TableFullDetails;
