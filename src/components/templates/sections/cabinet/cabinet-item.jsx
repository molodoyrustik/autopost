import React from 'react';

const CabinetItem = (props) => {
  const { image, text, date, id, handleDelete } = props;
  let mainApi = 'http://46.101.222.238:80/'
  return (
    <li className="cabinet__posts-item">
      <a className="cabinet__posts-link">
        <div className="cabinet__posts-img-wrapper">
          <i onClick={handleDelete(id)} className='post-remove'>delete</i>
          <div className="cabinet__posts-img-pos">
            <img src={`${mainApi}${image}`} alt="" className="cabinet__posts-img"/>
          </div>
        </div>
        <p className="cabinet__posts-time">{date}</p>
        <h4 className="cabinet__posts-title">{text}</h4>
      </a>
    </li>
  )
}

CabinetItem.defaultProps = {
  date: '17 May 2015 - 11:44'
}

export default CabinetItem;
