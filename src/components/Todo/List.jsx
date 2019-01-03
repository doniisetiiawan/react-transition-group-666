import React from 'react';
import PropTypes from 'prop-types';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './List.css';

const List = props => (
  <ul>
    <TransitionGroup>
      {props.items.map((item, key) => (
        <CSSTransition
          classNames="todo"
          timeout={300}
        >
          <li
            key={key}
            className={`${item.completed ? 'completed' : 'pending'}`}
          >
            {item.task}

            <div className="actions">
              <span
                className={item.completed ? 'hide' : 'done'}
                onClick={() => props.markAsCompleted(item.id)}
              >
                <i className="fa fa-check" />
              </span>
              <span
                className="trash"
                onClick={() => props.removeTask(item.id)}
              >
                <i className="fa fa-trash" />
              </span>
            </div>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </ul>
);

List.propTypes = {
  items: PropTypes.array,
  markAsCompleted: PropTypes.func,
  removeTask: PropTypes.func,
};

export default List;
