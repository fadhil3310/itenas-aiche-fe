import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/$postId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams()
  return <div>Post ID: {postId}</div>
}
