import { notFound } from "next/navigation"

interface Props {
    params: { id: number}
}
export default function page({params: {id}}: Props ) {
  if (id > 10) notFound()
  return (
    <div>
      UserDetailPage {id}
    </div>
  )
}
