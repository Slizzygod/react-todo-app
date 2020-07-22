import React, {Component} from 'react';

import './post-list-item.css';

export default class PostlistItem extends Component{

  render() {
    const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;
    
    let classNames = "app-list-item d-flex justify-content-between";

    if (important) {
      classNames += ' important';
    }

    if (like) {
      classNames += ' like';
    }

    return (
      <div className = {classNames}>
      <span onClick = {onToggleLike} className = "app-list-item-label">
        {label}
      </span>
      <div className = "d-flex justify-content-center align-items-center">
        <button className = "btn-star btn-sm" onClick = {onToggleImportant}>
          <i className = "fa fa-star"></i>
        </button>
        <button onClick = {onDelete} className = "btn-trash btn-sm">
          <i className = "fa fa-trash-o"></i>
        </button>
        <i className = "fa fa-heart"></i>
      </div>
      </div>
    )
  }
}