import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import SpellCard from '../components/spell_card';


const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 20,
  },
  item: {
    margin: 10,
    padding: 1
  }
});


class SpellList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="left"
        alignItems="center"
      >

        {
          this.props.spells.map((spell, index) => {
            return (
              <Grid item key={index} className={classes.item}>
                <SpellCard spell={spell} />
              </Grid>
            );
          })
        }
      </Grid>
    );
  }

}

SpellList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpellList);