import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
  button = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ]
  render() {
    const {filter, onFilterChange} = this.props;
    const buttons = this.button.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button" onClick={() => onFilterChange(name)}
                className= {`btn ${clazz}`} key = {name}>{label}</button>
      );
    });
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
