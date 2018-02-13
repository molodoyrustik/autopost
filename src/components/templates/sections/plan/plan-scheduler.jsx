import React from 'react';
import { DatePicker, TimePicker } from "@blueprintjs/datetime";

import "@blueprintjs/datetime/dist/blueprint-datetime.css";
import "@blueprintjs/core/dist/blueprint.css";

const PlanContent = (props) => {
  return (
    <div className="plan__content">

      <div className="step">
        <div className="step__title-wrapper">
          <h2 className="step__title"><span>Step 1.</span> Создание плана</h2>
          <p className="step__text">Choose your timezone, schedule your times and we will make sure that all your post are
              sent and will  be published as your planned.</p>
        </div>
        <div className="step__create-plan">
          <div className="choose-time">
            <div className="datapicker__wrapper">
              <DatePicker minDate={new Date()} classnName='data-picker' showActionsBar={true}/>
            </div>

            <div className="timepicker__wrapper">
              <label className='timepicker__label'>
                <p className='timepicker__title'>Post at these 0 times:</p>
                <div className="timepicker-wrapper">
                  <TimePicker minTime={new Date()} showArrowButtons={true} />
                </div>
              </label>
            </div>

            <button className="add-time">Добавить время публикации</button>
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step__title-wrapper">
          <h2 className="step__title"><span>Step 2.</span> Добавить пост в планироващик</h2>
          <p className="step__text">Your posts will appear according to the schedule that you made in your planner.</p>
        </div>

        <li className="cabinet__posts-item cabinet__posts-item-add">
          <a href="" className="cabinet__posts-link">
              <div className="cabinet__posts-img-wrapper">
                <img src="/images/cabinet/add-post.png" alt="" className="cabinet__posts-img"/>
              </div>
              <h4 className="cabinet__posts-title">Add new post</h4>
              <p className="cabinet__posts-time">Looks like we have sent all of your updates</p>
          </a>
          </li>
      </div>
    </div>
  )
}

export default PlanContent;
