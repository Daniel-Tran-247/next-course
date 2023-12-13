'use client'
import {useRouter} from 'next/navigation'

export default function NewUserPage() {
  const router = useRouter()

  return (
    <div>
      <button className="px-4 py-2 bg-slate-200 rounded-md"
      onClick={() => router.push('/users')}>Create</button>
    </div>
  )
}
