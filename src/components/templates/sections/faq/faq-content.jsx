import React from 'react';

const FaqContent = (props) => {
  return (
    <section className="faq__content">
      <div className="faq__content-title-wrapper">
        <h2 className="faq__content-title">What is Autoposting?</h2>
        <p className="faq__content-desc">Onlypult is a service for posting scheduled Instagram updates. You can upload images from your computer, apply filters from the web, manage one or multiple Instagram accounts, give an SMM manager posting rights without giving them access to your brand’s Instagram account.</p>
        <div className="faq__content-img-wrapper">
          <img src="/images/faq/content-img.jpg" alt="" className="faq__content-img"/>
        </div>
      </div>

      <div className="faq__content-ques-answer">
        <h3 className="faq__content-question">What are SCHEDULED POSTS?</h3>
        <p className="faq__content-answer">These are some pretty philosophical issues. In short, SMM means social media marketing and scheduled posting means preparing social media updates to be posted later. If you don't have anything to do with SMM, don’t rush to leave just yet — our statistics show that 15% of our users are regular instagramers who just love posting images from the web.</p>
      </div>
      <div className="faq__content-ques-answer">
        <h3 className="faq__content-question">What are INSTAGRAM POSTS?</h3>
        <p className="faq__content-answer">These are images already posted on your Instagram account — not necessarily via Onlypult.</p>
      </div>
      <div className="faq__content-ques-answer">
        <h3 className="faq__content-question">What is Planner?</h3>
        <p className="faq__content-answer">Planner is a tool for precise calendar planning. For instance, you have a weekly media plan for months.</p>
      </div>
    </section>
  )
}

export default FaqContent;
