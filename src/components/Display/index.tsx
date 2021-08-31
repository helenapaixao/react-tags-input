import React, { useContext } from 'react'
import { Grid, Chip } from '@material-ui/core'

import { TagContext } from '../../context/TagContext'
import useStyles from './styles'

const TagsDisplay: React.FC = () => {
  const classes = useStyles()

  const { emails, setEmails } = useContext(TagContext)

  const handleDelete = (index: number) => () => {
    let newTagsInstance = emails
    newTagsInstance.splice(index, 1)
    setEmails([...newTagsInstance])
  }

  return (
    <Grid className={classes.ContainerBox}>
      {emails.map((item, index) => (
        <Chip
          className={classes.tagsItem}
          key={index}
          tabIndex={-1}
          label={item}
          onDelete={handleDelete(index)}
        />
      ))}
    </Grid>
  )
}

export default TagsDisplay
