import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import mockData from '../../mockData'
import Card from '../card';

import './kanban.scss'

function Kanban() {

  const [data, setData] = useState(mockData)

  const onDragEnd = result =>{
    console.log(result);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {
          data.map(section =>(
            <Droppable key={section.id} droppableId={section.id}>
              {(provided)=>(
                <div {...provided.droppableProps}  className='kanban__section' ref={provided.innerRef}>
                  {/* Kanban Title */}
                  <div className='kanban__section__title'>
                    {section.title}
                  </div>

                  {/* Kanban Tasks */}
                  <div className='kanban__section__content'>
                    {
                      section.tasks.map((task,index)=>(
                        <Card key={index}>
                          {task.title}
                        </Card>
                      ))
                    }
                  </div>

                </div>
              )}
            </Droppable>
          ))
        }
      </div>
    </DragDropContext>
  )
}

export default Kanban