import React from 'react';

import './LifeStyleShowBar.scss';

const LifeStyleShowBar = () => {
  return (
    <div className="lifeStyle-show-bar bar-cards">


      <div className="lifeStyle-article">
        <img src={"https://images.unsplash.com/photo-1505976442149-53a82393903b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} alt="babies" />
        <div className="lifeStyle-article-text">
          <p>Have you met?</p>
          <p>Paz Rodrigz</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="btn-black">Read More</button>
        </div>
      </div>

      <div className="lifeStyle-article">
        <img src={"https://images.unsplash.com/photo-1505976442149-53a82393903b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} alt="babies" />
        <div className="lifeStyle-article-text">
          <p>Have you met?</p>
          <p>Paz Rodrigz</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button className="btn-black">Read More</button>
        </div>
      </div>


    </div>
  );
}

export default LifeStyleShowBar;