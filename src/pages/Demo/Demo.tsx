import React from "react";

import Typography from "@material-ui/core/Typography";
import { Box, Button, ButtonGroup, Grid, Paper } from "@material-ui/core";

import { useCommonStyles, paperElevation } from "../../components/Layout/styles";

type DemoProps = {};

const Demo: React.FC<DemoProps> = ({}) => {
  const cstyles = useCommonStyles();

  return (
    <>
      <Grid container spacing={1} className={cstyles.defaultContentPadding}>
        <Grid item xs={12}>
          <Button variant="contained" color="default">
            default
          </Button>
          <Button variant="contained" color="primary">
            primary
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={paperElevation} className={cstyles.basicPaper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={paperElevation} className={cstyles.basicPaper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={paperElevation} className={cstyles.basicPaper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={paperElevation} className={cstyles.basicPaper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={paperElevation} className={cstyles.basicPaper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={paperElevation} className={cstyles.basicPaper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={paperElevation} className={cstyles.basicPaper}>xs=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={paperElevation} className={cstyles.basicPaper}>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={2} p={2}></Box>
    </>
  );
};

export default Demo;
