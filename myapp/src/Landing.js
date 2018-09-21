import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

//
// withStyles(styles)(FullWidthGrid);
//で読み込む
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

{/*
                        containerの下にitemがある、coutainerの下にはcountainerはこない。
                        必ず交互にくる。
                  item xsで"一つのアイテム"の幅決める
                  レイアウト(alignItems, direction,justify)だけのGrid containerを作る
                  <Grid
                        container
                        spacing={16}
                        className={classes.demo}
                        alignItems={alignItems}
                        direction={direction}
                        justify={justify}
                    >...</Grid>
                  justify 幅のレイアウト
                  alignItemsで縦のレイアウト
                */}
{/*
            item xsで"一つのアイテム"の幅決める
              xsは画面の幅が最小の時のサイズ
              smは画面の幅が普通の時の幅
              12全面、６二分割、３四分割

            */}
{/*
item container direction="complex"で縦に要素を追加

<Grid container direction="column" spacing={8}>のspacing={8}は
direction方向の
子Componentの<Grid item>同士の隙間の幅を決める。
*/}
{/*
In order for the item to stay within the container
you need to set min-width: 0. In practice,
you can set the "Grid item zeroMinWidth" property:


省略を利用する時のテンプレート(item zeroMinWidth, Typography noWrap)
<Grid container wrap="nowrap">
<Grid item xs zeroMinWidth>
    <Typography noWrap>{message}</Typography>
</Grid>
</Grid>
*/}


function Landing(props) {
    const { classes } = props;
    const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;

    return (
        <div className={classes.root}>

            <Grid
                    container
                    spacing={24}
                    className={classes.root}
                    direction="row"
                    justify="space-evenly"
                    alignItems="center">

                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={16}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography noWrap>{message}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={16}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography noWrap>{message}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={16}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography noWrap>{message}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={16}>
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography noWrap>{message}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);