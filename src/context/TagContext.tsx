import React, { createContext, useState, ReactNode } from 'react'

interface TagList {
  emails: string[]
  setEmails: Function
}

const TagContext = createContext<TagList>({ emails: [], setEmails: null })

const TagContextProvider = ({ children }: { children: ReactNode }) => {
  const [emails, setEmails] = useState<string[]>([
    'hp.helenapaixao@gmail.com',
  ])

  return <TagContext.Provider value={{ emails, setEmails }}>{children}</TagContext.Provider>
}

export { TagContext, TagContextProvider }
