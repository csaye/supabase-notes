'use client'
import { useState } from 'react'
import styles from './styles.module.scss'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export function NoteForm() {
  const [text, setText] = useState('')
  const supabase = createClientComponentClient()

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createNote()
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Text'
        />
        <button>Create note</button>
      </form>
    </div>
  )

  async function createNote() {
    await supabase.from('notes').insert([{ text }])
    setText('')
  }
}
