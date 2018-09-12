import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        padding: theme.spacing.unit * 2,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

{/*
item container direction="complex"で縦に要素を追加

<Grid container direction="column" spacing={8}>のspacing={8}は
direction方向の
子Componentの<Grid item>同士の隙間の幅を決める。
*/}

function ComplexGrid(props) {
    const { classes } = props;
    const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;
    return (
        <Paper className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Grid container direction="row" justify="space-between" alignItems="center" spacing={16}>
                        <Grid item xs={4}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={16}>
                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="subheading">
                                    Standard license
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subheading">$19.00</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={5}>
                        <Grid item xs>

                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>{message}</Typography>
                        </Grid>
                        <Grid item>
                        <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                        </Grid>
                        <Grid item>
                        <Typography color="textSecondary">ID: 1030114</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Paper>
    );
}

ComplexGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);