import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import './App.scss';
import Kanban from './components/kanban'; 

function App() {
  return (
    <div style={{padding:"50px"}}>
      <h1 style={{marginBottom:"20px"}}>Kanban UI</h1>
      <Kanban/>
    </div>
  );
}

export default App;
