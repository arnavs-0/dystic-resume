import { get, isEmpty } from 'lodash';
import React, { memo, useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';
import { MdAdd } from 'react-icons/md';
import ModalContext from '../../../contexts/ModalContext';
import { useDispatch, useSelector } from '../../../contexts/ResumeContext';
import { formatDateRange, reorder } from '../../../utils';
import Button from '../../shared/Button';
import EmptyList from './EmptyList';
import styles from './List.module.css';
import ListItem from './ListItem';

const List = ({
  path,
  title,
  titlePath,
  subtitle,
  subtitlePath,
  text,
  textPath,
  hasDate,
  event,
}) => {
  const { t, i18n } = useTranslation();
  const items = useSelector(path, []);
  const { emitter } = useContext(ModalContext);
  const dispatch = useDispatch();

  const handleAdd = () => emitter.emit(event);

  const handleEdit = (data) => emitter.emit(event, data);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceDroppableId = source.droppableId;
    const destinationDroppableId = destination.droppableId;
    if (sourceDroppableId !== destinationDroppableId) {
      return;
    }

    if (source.index === destination.index) {
      return;
    }

    const itemsReordered = reorder(items, source.index, destination.index);
    dispatch({
      type: 'on_input',
      payload: {
        path,
        value: itemsReordered,
      },
    });
  };

  return (
    <div className="flex flex-col text-white">
      <div className={styles.list}>
        {isEmpty(items) ? (
          <EmptyList />
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={path}>
              {(dropProvided) => (
                <div
                  ref={dropProvided.innerRef}
                  {...dropProvided.droppableProps}
                >
                  {items.map((x, i) => (
                    <ListItem
                      key={x.id}
                      data={x}
                      path={path}
                      title={title || get(x, titlePath, '')}
                      subtitle={
                        subtitle ||
                        get(x, subtitlePath, '') ||
                        (hasDate &&
                          formatDateRange(
                            {
                              startDate: x.startDate,
                              endDate: x.endDate,
                              language: i18n.language,
                            },
                            t,
                          ))
                      }
                      text={text || get(x, textPath, '')}
                      onEdit={() => handleEdit(x)}
                      isFirst={i === 0}
                      isLast={i === items.length - 1}
                      index={i}
                    />
                  ))}
                  {dropProvided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>

      <button
        onClick={handleAdd}
        className="ml-auto bg-red-300 active:bg-red-500 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 mt-5 shadow hover:shadow-md inline-flex items-center font-medium text-xs"
        style={{ transition: 'all .15s ease' }}
        type="button">
        <MdAdd/> &nbsp; Add New
      </button>
    </div>
  );
};

export default memo(List);
