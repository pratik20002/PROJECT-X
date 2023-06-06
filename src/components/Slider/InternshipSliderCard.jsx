// import { makeStyles } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React from "react";

// import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);


const useStyles = makeStyles(() => ({

    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default function Silder1Card(props) {
    const classes = useStyles();
    return (
        <>
            {/* <Box sx={{ minWidth: 275 }} style={{
                border: "2px solid black",
                // marginLeft: "3vw",
                // // marginRight: "auto",
                // // marginTop: "au1to",
                // margin: "auto",
                // // width: "100%",
                // // height: "100%",
                // display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

            }}>
                <Card variant="outlined ml-3"
                    style={{
                        border: "2px solid black",
                        marginLeft: "3vw",

                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",

                    }}>
                    {card}
                </Card>
            </Box> */}

            <div className="card3">
                <img className="product--image" src={props.logo_url} />
                <div className={classes.header}>
                    <h2>{props.position}</h2>
                    <h3>{props.company_name}</h3>
                </div>
                <br />
                <p>{props.desc}</p>
                <p>Stipend :{props.stipend}</p>
                <p>Mode :{props.mode}</p>
                <p>Duration :{props.duration}</p>
                <p>
                    <button> Apply </button>
                </p>
            </div>
        </>
    );
}
