import React from 'react';
import SingleLinkInput from './SingleLinkInput';
import useGlobalContext from '@/hooks/useGlobalContext';
import { closestCorners, DndContext, DragEndEvent, MouseSensor, TouchSensor, UniqueIdentifier, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';


const LinksListForm = () => {

    const { devLinks, setDevLinks } = useGlobalContext();


    const GetIndexPosition = (id: UniqueIdentifier) => devLinks.findIndex(item => item.id == id);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id == over?.id) return;
        if (!over?.id) return;

        setDevLinks(prev => {
            const currentPosition = GetIndexPosition(active.id);
            const nextPosition = GetIndexPosition(over?.id);

            return arrayMove(prev, currentPosition, nextPosition);
        });
    };


    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 10,
        },
    });

    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 0,
            tolerance: 5,
        },
    });

    const sensors = useSensors(touchSensor, mouseSensor);


    return (
        <div className='pt-5'>
            <DndContext
                collisionDetection={closestCorners}
                onDragEnd={handleDragEnd}
                sensors={sensors}
            >

                <div className='space-y-8'>
                    <SortableContext items={devLinks} strategy={verticalListSortingStrategy}>
                        {devLinks.map((item, index) => {
                            return (
                                <SingleLinkInput id={item.id} name={item.platFormName} link={item.link} index={index} key={item.id} />
                            );
                        })}
                    </SortableContext>

                </div>

            </DndContext>
        </div>
    );
};

export default LinksListForm;