import React from 'react'
import TagsInput from '../../components/TagsInput/TagsInput'
import { Paper, Grid } from '@material-ui/core'
import style from './styles'

import Display from '../../components/Display'

import { TagContextProvider } from '../../context/TagContext'

export const Home: React.FC = () => {
  const classes = style();

  return (
    
    <TagContextProvider>
      <Grid container justify="center" alignItems="center">
        <Paper elevation={3} className={classes.Container}>
          <h1 className={classes.Title}>Lista de E-mails</h1>
          <TagsInput />
          <Display />
        </Paper>
      </Grid>
    </TagContextProvider>
  )
}

export default Home
