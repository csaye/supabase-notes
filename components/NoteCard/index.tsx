import { Note } from '@/utils/types'
import styles from './styles.module.scss'

export function NoteCard({ text }: Note) {
  return <div className={styles.container}>{text}</div>
}
