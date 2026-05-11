import type { Ticket } from "../types";

interface TicketCardProps{
    ticket: Ticket;
}

export default function TicketCard ({ ticket }: TicketCardProps) {
    return(
        <>
        <div>{ticket.id}</div>
        <div>{ticket.title}</div>
        <div>{ticket.status}</div>
        </>
    )
}