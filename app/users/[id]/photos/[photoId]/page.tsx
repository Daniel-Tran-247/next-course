interface Props {
  params: { id: number; photoId: number}  
}

export default function PhotoPage({params: {id, photoId}}: Props) {
  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  )
}
