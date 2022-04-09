import { Card, CardActionArea, CardContent,Typography, CardMedia } from '@mui/material';
import React from 'react';
import millify from 'millify';

const InfoBox = ({flag, title, subtitle1, subtitle2, todayCases, totalCases}) => {
  return (
    <>
    
    <Card className="infobox__card" sx={{ width: "100%" }}>
    <CardActionArea>
    <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={flag}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <b>{subtitle1}:</b> {todayCases && millify(todayCases)}
        </Typography>
        <br/>
        <Typography variant="body2" color="text.secondary">
            <b>{subtitle2 && (`${subtitle2}:`)}</b> {totalCases && millify(totalCases)}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  
  </>
  );
};

export default InfoBox;
