import React from 'react';
import './index.scss';

export const Background = () => {
  const numBalls = 25;
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundImage =
      'url(' +
      require(`../../assets/images/images_background/img${Math.floor(Math.random() * 14)}.png`) +
      ')';
    ball.style.backgroundSize = 'cover';
    ball.style.backgroundRepeat = 'no-repeat';
    ball.style.backgroundPosition = 'center center';
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.floor(Math.random() * 1.5) + 1.5}em`;
    ball.style.height = ball.style.width;
    balls.push(ball);
    document.querySelector('#root').append(ball);
  }

  // Keyframes
  balls.forEach((el, i) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -5 : 5),
      y: Math.random() * 12,
    };

    let anim = el.animate(
      [{ transform: 'translate(0, 0)' }, { transform: `translate(${to.x}rem, ${to.y}rem)` }],
      {
        duration: (Math.random() + 1) * 2000,
        direction: 'alternate',
        fill: 'both',
        iterations: Infinity,
        easing: 'ease-in-out',
      },
    );
  });

  return <></>;
};
