import React, { useContext } from 'react'
import { Grid, Chip } from '@material-ui/core'

import { TagContext } from '../../context/TagContext'

const Display: React.FC = () => {
  const { emails, setEmails } = useContext(TagContext)

  const handleDelete = (index: number) => () => {
    let newTagsInstance = emails
    newTagsInstance.splice(index, 1)
    setEmails([...newTagsInstance])
  }

  return (
    <Grid>
      {emails.map((item, index) => (
        <Chip key={index} tabIndex={-1} label={item} onDelete={handleDelete(index)} />
      ))}
    </Grid>
  )
}

export default Display
