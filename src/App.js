import React from 'react';
import Header from './comp/Header/Header';
import List from './comp/List/List';
import Map from './comp/Map/Map';
import {
    CssBaseline, Grid
} from '@material-ui/core';
const App = () => {
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                
                <Grid item xs={12} md={8}>
                    <Map/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <List/>
                </Grid>
                
            </Grid>
        </>
    );
}

export default App;