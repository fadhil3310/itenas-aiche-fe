import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/structure/index/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/organizational-structure"!</div>
}
