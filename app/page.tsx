import { Page } from '@/components/Page'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const { data: notes } = await supabase.from('notes').select('*')

  return <Page notes={notes} />
}
