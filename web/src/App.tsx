import { CreateGoal } from './components/create-goal'
import { Dialog } from './components/ui/dialog'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'

export function App() {
  return (
    <Dialog>
      {false && <EmptyGoals />}
      <Summary />

      <CreateGoal />
    </Dialog>
  )
}
