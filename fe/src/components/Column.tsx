import type { Ticket } from "../types";
import TicketCard from "./TicketCard";

interface ColumnProps {
  title: string;
  tickets: Ticket[];
}

export default function Column({ tickets }: ColumnProps) {
  return (
    <>
      {tickets.map((ticket) => (
        <TicketCard
        key={ticket.id}
        ticket={ticket}
        />
      ))}
    </>
  );
}