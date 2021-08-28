import React, { useState } from 'react'
import TagsInput from '../../components/TagsInput/TagsInput'
import Paper from '@material-ui/core/Paper';
import  style  from './styles'


export const Home: React.FC = () => {
   const classes = style()
  return (
    <>

        <Paper elevation={3} className={classes.Container} >
        <TagsInput />    
        </Paper>

      
    </>
  )
}

export default Home
