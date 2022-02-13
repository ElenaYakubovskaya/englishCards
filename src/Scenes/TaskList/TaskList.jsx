import React, { useEffect, useState } from 'react';
import CardLesson from '../../Components/CardLesson/CardLesson';

const TaskList = (props) => {
  const [cardList, setCardList] = useState([]);
  const [cardListHeader, setCardListHeader] = useState('Initial header');

  const updateHeader = (value) => {
    setCardListHeader(value);
  };

  return (
    <div className={'cardList'}>
      {}
      {cardList.map((taskInfo) => (
        <CardLesson
          updateHeader={updateHeader}
          cardName={taskInfo.cardName}
          cardText={taskInfo.cardText}
        />
      ))}
      <button
        onClick={() => {
          setCardListHeader('newCardName');
        }}
      >
        Click me!!
      </button>
    </div>
  );
};

export default TaskList;
