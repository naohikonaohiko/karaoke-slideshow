import React from 'react';
import './App.css';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'images/slide_1.jpg',
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg',
  'images/slide_5.jpg',
  'images/slide_6.jpg',
  'images/slide_7.jpg',
];

const properties = {
  duration: 15000,          // スライド1枚表示時間
  transitionDuration: 1000, // スライド間移動時間
  infinite:   false,        // オートリピート
  indicators: false,        // スライド下のドット付与有無
  arrows:     false,        // スライド左右の矢印付与有無
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

function App() {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            {/*<span>Slide 1</span>*/}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            {/*<span>Slide 2</span>*/}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            {/*<span>Slide 3</span>*/}
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default App;
