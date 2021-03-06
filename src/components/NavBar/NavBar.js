import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import useStyles from './styles.js'
import memories from '../../images/memories.png'
const NavBar = () => {
  const classes = useStyles()
  const user = null
  return (
    <>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to='/'
            className={classes.heading}
            variant='h4'
            align='center'
          >
            Spotlight
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt='spotlight'
            height='60'
          />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.username} variant='h6'>
                {user.result.name}
              </Typography>
              <Button
                variant='contained'
                className={classes.logout}
                color='secondary'
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to='/auth'
              variant='contained'
              color='primary'
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
