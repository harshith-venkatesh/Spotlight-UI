import { makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '2rem 0',
    padding: '0.625rem 3.25rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: 'rgb(57 136 136)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
    padding: '2px',
    borderRadius: '50%',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}))
