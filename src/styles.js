import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=> ({
appBar: {
  borderRadius:15,
  margin:'30px 0',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
heading:{
  color:'rgb(57 136 136)'
},
image:{
  marginLeft:'15px',
  padding:'2px',
  borderRadius:'50%'
},
[theme.breakpoints.down('sm')]: {
  mainContainer:{
    flexDirection:"column-reverse"
  } 
}
}));