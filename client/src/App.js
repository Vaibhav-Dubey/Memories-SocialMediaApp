import React from "react";
import {Container , Typography , Grow , Grid, AppBar} from '@material-ui/core';
import memories from './images/memories.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles'

const App = () => {
    const classes = useStyles();
    return(
        <Container maxwidth="lg">
            <AppBar className ={classes.appBar} position="static" color="inherit">
                <Typography className ={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className ={classes.image}src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strech" spacing="3">
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App