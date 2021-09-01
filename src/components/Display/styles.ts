import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  ContainerBox: {
    marginTop: 30,
    border: '1px solid #592941',
    borderRadius: 3,
    padding: 7,
    overflowY: 'auto',
    maxHeight: 275,

    '&::-webkit-scrollbar': {
      height: '0.9em',
    },
    '&::-webkit-scrollbar-track': {
      background: '#000',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'darkgray',
      borderRadius: 20,
     
    },
  },
  tagsItem: {
    margin: '3px 1px',
  },
}))

export default useStyles
