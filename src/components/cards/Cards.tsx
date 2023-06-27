import React, { useState, useRef } from "react";
import styles from "./cards.module.scss";
import { themeDirectory } from "./theme.data";
import arrow from './images/arrow.png'

function Cards() {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 35.07; // процент от ширины окна браузера
  const visibleCardsCount = 2.5;

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    setStartX(event.clientX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!dragging) return;
    const x = event.clientX - startX;
    containerRef.current!.scrollLeft = scrollLeft - x;
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseEnter = () => {
    setDragging(false);
  };

  const containerWidth = themeDirectory.length * cardWidth;
  const visibleContainerWidth = visibleCardsCount * cardWidth + 1.61; // процент + пиксели для отступа

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        ref={containerRef}
        style={{ width: `${visibleContainerWidth}vw` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
      >
        <ul className={styles.cardList} style={{ width: `${containerWidth}vw` }}>
          {themeDirectory.map((theme: any, index: number) => (
            <li key={index} className={`${styles.card} ${styles.clip}`} style={{ backgroundColor: theme.color }}>
              <div className={styles.cardMain}>
                  <div className={styles.cardLogo}>
                  <img src={`/summerPractice23/src/components/cards/images/${theme.id}.png`} alt={`Image for ${theme.text}`} />
                  </div>
                  <div className={styles.cardContent}>
                    <p>{theme.text}</p>
                    <br />
                    <b>{theme.example}</b>
                    <br />
                    <b>{theme.example2}</b>
                  </div>
              </div>
              <img className={styles.cardLink}  src={arrow}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cards;
