import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = () => {
  return (
    <div className="m-2 flex flex-col rounded-md bg-card p-3  shadow-lg hover:bg-card-hover">
      <div className="mb-3 flex">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="mb-2 h-px border-0 bg-page" />
      <p className="whitespace-pre-wrap">
        This is the ticket description! Please do this ticket
      </p>
      <div className="flex-grow"></div>
      <div className="mt-2 flex">
        <div className="flex flex-col">
          <p className="my-1 text-xs">08/31/23 10:43PM</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  )
}

export default TicketCard
