import React from 'react';

import './todo-list-item.css';

export default class ToDoListItem extends React.Component {
  
  state = {
    done: false,
    important: false,
  }

  onLableClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }; 
    });
  }

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }; 
    });
  };

  render() {
    const {label} = this.props;
    const {done, important} = this.state;
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if(important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          onClick = { this.onLableClick }
          className="todo-list-item-label">
          {label}
        </span>
  
        <button type="button"
                onClick = {this.onMarkImportant}
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
        onClick={this.props.onDeleted}
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}