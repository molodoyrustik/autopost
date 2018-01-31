import React from 'react';

const ScaleItem = (props) => {
  const { scale, handleClickItem, currentScale } = props;
  return (
    <li onClick={handleClickItem(scale)} className={`step-edit__item ${ currentScale === scale ? 'step-edit__item--bg': ''}`}>
      {props.scale}
    </li>
  )
}

export default ScaleItem;
