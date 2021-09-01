import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import { TagContext } from '../../context/TagContext'

const TagsInput: React.FC = () => {
  const { emails, setEmails } = useContext(TagContext)

  const registerCharacters: object = {
    0: 'NumpadEnter',
    1: 'Tab',
    3: 'Slash',
    4: 'Space',
    5: 'Enter',
  }

  const ValidationEmail = (email: string) => {
    const regexEmail: RegExp =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

    if (regexEmail.test(email)) {
      emails.push(email)
      setEmails([...emails])
    } else {
      alert('Email inválido')
    }
  }

  const insertInputValue = (e: any) => {
    for (let i in registerCharacters) {
      if (e.code === registerCharacters[i]) {
        e.preventDefault()

        if (e.target.value.indexOf(';') >= 0) {
          const arrayEmails: string[] = e.target.value.split(';')

          arrayEmails.forEach((element: string, index: number) => {
            arrayEmails[index] = element.trim()
            ValidationEmail(arrayEmails[index])
          })
          e.target.value = ''
        } else {
          ValidationEmail(e.target.value)
          e.target.value = ''
        }
      }
    }
  }

  return (
    <>
      <TextField
        onKeyDown={insertInputValue}
        fullWidth
        variant="outlined"
        id="emails"
        name="emails"
        placeholder="Adiciona um novo e-mail"
      />
    </>
  )
}

TagsInput.defaultProps = {
  tags: [],
}
export default TagsInput
