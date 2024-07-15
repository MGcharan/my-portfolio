import React from 'react'
import './achievement.css'
import IMG1 from '../../assets/port1.png'
 import IMG2 from '../../assets/port2.png'
import IMG3 from '../../assets/port3.png'
import IMG4 from '../../assets/port4.png'
// import IMG5 from '../../assets/portfolio5.jpg'
// import IMG6 from '../../assets/portfolio6.jpg'


const Achievement = () => {
  return (
    <section id='achievement'>
      <h5>My Work</h5>
      <h2>Achievement</h2>

      <div className="container achievement__container">
        
        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Github Tracker </h3>
          <div className="achievement__item-cta">
          <a href="https://giri-git-tracker.netlify.app" className='btn' target='_blank'>View</a>
          <a href="https://github.com/MGcharan/GitTracker.git://github.com/MGcharan/mini-game.git" className='btn btn-1 ' target='_blank'>Code</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Guess the Number Using React</h3>
          <div className="achievement__item-cta">
          <a href="https://giri-mini-game.netlify.app" className='btn' target='_blank'>View</a>
          <a href="https://github.com/MGcharan/mini-game.git" className='btn btn-1 ' target='_blank'>Code</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Libaray Management</h3>
          <div className="achievement__item-cta">
          <a href="https://formit-library.netlify.app" className='btn' target='_blank'>View</a>
          <a href="https://github.com/MGcharan/formit-libary.git" className='btn btn-1 ' target='_blank'>Code</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>E-Commerce Shoping Using React</h3>
          <div className="achievement__item-cta">
          <a href="https://giricharan-shopping-cart.netlify.app" className='btn' target='_blank'>View</a>
          <a href="https://github.com/MGcharan/context-api-task.git" className='btn btn-1' target='_blank'>Demo</a>
          </div>
        </article>

      
      </div>
    </section>
  )
}

export default Achievement