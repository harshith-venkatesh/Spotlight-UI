import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'

const Form = ({currentId,setCurrentId}) => {
  const emptyPost = {creator:'',title:'',message:'',tags:'',selectedFile:''};
  const [postData,setPostData] = useState(emptyPost);
  const post = useSelector(state => currentId ? state.posts.find((post)=> post._id === currentId) :null )
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=> {
    if(post) setPostData(post);
  },[post])
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId,postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData(emptyPost);
  }

  return (
  <Paper className={classes.paper}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{currentId? "Editing":"Creating"} a Memory</Typography>
      <TextField name="creator" variant="outlined" label="creator" fullWidth 
      value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})}
      />
       <TextField name="title" variant="outlined" label="title" fullWidth
      value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})}
      />
       <TextField name="message" variant="outlined" label="message" fullWidth
      value={postData.message} onChange={(e)=> setPostData({...postData, message: e.target.value})}
      />
       <TextField name="tags" variant="outlined" label="tags" fullWidth
      value={postData.tags} onChange={(e)=> setPostData({...postData, tags: e.target.value.split(',')})}
      />
    <div className = {classes.fileInput} >
    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData,selectedFile: base64})} />
    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
    <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    </div>
    </form>
  </Paper>
  )
}

export default Form
