import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    marginBottom: 16,
  },
  container: {
    marginTop: 16,
  },
}))

storiesOf('material-ui/Button', module)
  .add('default', () => (
    <Button variant={'contained'} color={'primary'}>Button</Button>
  ))
  .add('list', () => {
    // tslint:disable-next-line:react-hooks-nesting
    const classes = useStyles()

    return (
      <Grid
        container={true}
        direction={'column'}
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Button className={classes.button} variant={'contained'} color={'default'}>Default</Button>
        <Button className={classes.button} variant={'contained'} color={'primary'}>Primary</Button>
        <Button className={classes.button} variant={'contained'} color={'secondary'}>Secondary</Button>
        <Button className={classes.button} variant={'contained'} disabled={true}>
          Disabled
        </Button>
        <Button className={classes.button} variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
        <Button>Default</Button>
        <Button className={classes.button} color="primary">Primary</Button>
        <Button className={classes.button} color="secondary">Secondary</Button>
        <Button className={classes.button} disabled={true}>Disabled</Button>
        <Button className={classes.button} href="#text-buttons" color="primary">
          Link
        </Button>
        <Button className={classes.button} variant="outlined">Default</Button>
        <Button className={classes.button} variant="outlined" color="primary">
          Primary
        </Button>
        <Button className={classes.button} variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button className={classes.button} variant="outlined" disabled={true}>
          Disabled
        </Button>
        <Button className={classes.button} variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
        <Button className={classes.button} onClick={() => { alert('clicked') }}>Click me</Button>

      </Grid>
    )
  }, { info: { disable: true }})
