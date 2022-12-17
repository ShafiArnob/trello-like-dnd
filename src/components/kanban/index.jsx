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
                <div {...provided.droppableProps}  className="kanban__section" ref={provided.innerRef}>

                  {/* Kanban Title */}
                  <div className="kanban__section__title">
                    {section.title}
                  </div>

                  {/* Kanban Tasks */}
                  <div className="kanban__section__content">
                    {
                      section.tasks.map((task,index)=>(
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided, snapshot)=>(
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{...provided.draggableProps.style, opacity: snapshot.isDragging?'0.5':'1'}}>
                              <Card>
                                {task.title}
                              </Card>
                            </div>
                          )}
                        </Draggable>
                      ))
                    }
                    {provided.placeholder}
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