import Column from "./Column";
import type { Ticket } from "../types";


interface BoardProps {
  tickets: Ticket[];
}

export default function Board({ tickets }: BoardProps) {
  return (
    <>
      <Column
        title="Todo"
        tickets={tickets.filter((ticket) => ticket.status === "todo")}
      />

      <Column
        title="In Progress"
        tickets={tickets.filter((ticket) => ticket.status === "in_progress")}
      />

      <Column
        title="Done"
        tickets={tickets.filter((ticket) => ticket.status === "done")}
      />
    </>
  );
}
