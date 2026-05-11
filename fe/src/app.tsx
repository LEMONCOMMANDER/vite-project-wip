import "./App.css";
import TopBar from "./components/TopBar";
import Board from "./components/Board";
import { useState } from "react";


function App() {
  
  const [tickets, setTickets] = useState([
  { id: 1, title: "Set up the database", status: "todo" },
  { id: 2, title: "Build the board UI", status: "in_progress" },
  { id: 3, title: "Write the README", status: "done" },
])
  
  return (
    <div>
      <TopBar/>
      <Board tickets={tickets}/>
      <h1>Hello World</h1>
      <button
        type="button"
        onClick={async () => {
          try {
            const response = await fetch("http://localhost:3000/test");
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);

            // if (result.status === 200) {
            //   <Display(result)  />;
            // }
          } catch (error) {
            console.error(error as Error);
          }
        }}
      >
        api
      </button>
    </div>
  );
}

export default App;
