import { Note } from '@/utils/types'
import styles from './styles.module.scss'
import { NoteCard } from '../NoteCard'
import { NoteForm } from '../NoteForm'

type Props = {
  notes: Note[] | null
}

export function Page({ notes }: Props) {
  return (
    <div className={styles.container}>
      <h1>Page</h1>
      {renderNotes()}
      <NoteForm />
    </div>
  )

  function renderNotes() {
    if (!notes) {
      return <p>Error getting notes</p>
    }

    if (!notes.length) {
      return <p>No notes</p>
    }

    return (
      <div className={styles.notes}>
        {notes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </div>
    )
  }
}
