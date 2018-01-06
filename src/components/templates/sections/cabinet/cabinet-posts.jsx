import React from 'react';

const CabinetPosts = (props) => {
  return (
    <div className="cabinet__posts">
      <ul className="cabinet__posts-list">
        <li className="cabinet__posts-item cabinet__posts-item-add">
                <a href="#" className="cabinet__posts-link">
                  <div className="cabinet__posts-img-wrapper">
                    <img src="images/cabinet/add-post.png" alt="" className="cabinet__posts-img"/>
                  </div>
                  <h4 className="cabinet__posts-title">Add new post</h4>
                  <p className="cabinet__posts-time">Looks like we have sent all of your updates</p>
                </a>
        </li>
        <li className="cabinet__posts-item">
                <a href="#" className="cabinet__posts-link">
                  <div className="cabinet__posts-img-wrapper">
                    <a href="#" className='post-remove'>remove</a>
                    <img src="images/cabinet/box.png" alt="" className="cabinet__posts-img"/>
                  </div>
                  <p className="cabinet__posts-time">17 May 2015 - 11:44</p>
                  <h4 className="cabinet__posts-title">Футболочка Цена : 5...</h4>
                </a>
        </li>
        <li className="cabinet__posts-item">
                <a href="#" className="cabinet__posts-link">
                  <div className="cabinet__posts-img-wrapper">
                    <a href="#" className='post-remove'>remove</a>
                    <img src="images/cabinet/pillow-1.png" alt="" className="cabinet__posts-img"/>
                  </div>
                  <p className="cabinet__posts-time">17 May 2015 - 11:44</p>
                  <h4 className="cabinet__posts-title">Футболочка Цена : 5...</h4>
                </a>
        </li>
        <li className="cabinet__posts-item">
                <a href="#" className="cabinet__posts-link">
                  <div className="cabinet__posts-img-wrapper">
                    <a href="#" className='post-remove'>remove</a>
                    <img src="images/cabinet/pillow-3.png" alt="" className="cabinet__posts-img"/>
                  </div>
                  <p className="cabinet__posts-time">17 May 2015 - 11:44</p>
                  <h4 className="cabinet__posts-title">Футболочка Цена : 5...</h4>
                </a>
        </li>
        <li className="cabinet__posts-item">
                <a href="#" className="cabinet__posts-link">
                  <div className="cabinet__posts-img-wrapper">
                    <a href="#" className='post-remove'>remove</a>
                    <img src="images/cabinet/box.png" alt="" className="cabinet__posts-img"/>
                  </div>
                  <p className="cabinet__posts-time">17 May 2015 - 11:44</p>
                  <h4 className="cabinet__posts-title">Футболочка Цена : 5...</h4>
                </a>
        </li>
        <li className="cabinet__posts-item">
                <a href="#" className="cabinet__posts-link">
                  <div className="cabinet__posts-img-wrapper">
                    <a href="#" className='post-remove'>remove</a>
                    <img src="images/cabinet/pillow-2.png" alt="" className="cabinet__posts-img"/>
                  </div>
                  <p className="cabinet__posts-time">17 May 2015 - 11:44</p>
                  <h4 className="cabinet__posts-title">Футболочка Цена : 5...</h4>
                </a>
        </li>
      </ul>
    </div>
  )
}

export default CabinetPosts;
