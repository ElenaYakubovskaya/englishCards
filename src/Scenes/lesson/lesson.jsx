import React, { Component } from 'react';
import CardLesson from '../CardLesson/CardLesson';
import styled from 'styled-components';
/*
const wordsMap = new Map[
  ({
    Shy: 'скромный',
    Outgoing: 'общительный',
    Smart: 'умный',
    Friendly: 'дружелюбный',
    Supportive: 'оказывающий поддержку',
    Hardworking: 'трудолюбивый',
    Important: 'важный',
    'To improve': 'улучшать',
    Mean: 'невежливый / не приветливый',
    Stupid: 'глупый',
    Lazy: 'ленивый',
    Hard: 'сложный',
    Easy: 'легкий',
    Interesting: 'интересный',
    Boring: 'скучный',
    Young: 'молодой',
    Old: 'старый',
    First: 'первый',
    Last: 'последний',
    Private: 'личный',
    Public: 'публичный',
    Long: 'длинный',
    Short: 'короткий',
  },
  {
    Delivery: 'доставка',
    Takeout: 'еда с доставкой',
    'Market leader': 'лидер рынка',
    Dish: 'блюдо',
    Local: 'местный',
    Map: 'карта',
    Choose: 'выбрать',
    'Place an order': 'сделать заказ',
    'and so on': 'и т.д (informal)',
    'etc.': 'и т.д (formal)',
    Breakfast: 'завтрак',
    Lunch: 'обед',
    Dinner: 'ужин',
    Useful: 'полезный',
    Provide: 'предоставлять',
    Condition: 'условие',
    Employee: 'сотрудник',
    'Achieve financial stability': 'достигнуть финансовой стабильности',
    'On top of that': 'кроме того / вдобавок к этому',
    Reach: 'достигнуть / дотянуться ',
    Customer: 'заказчик / покупатель ',
    Price: 'цена',
    'High-quality service': 'сервис высокого качества',
    Ethical: 'этичный',
    Effective: 'эффективный',
    Gamechanger:
      'геймчейнджер /компания или продукт которая революционирует рынок',
    Prepare: 'подготовить',
    'In under 30 minutes': 'за менее чем 30 минут',
    'Sign up': 'зарегистрироваться / записаться',
    Fresh: 'свежий',
    'Step-by-step instructions': 'пошаговые инструкции',
    Equipment: 'оборудование',
    Receive: 'получить',
    Buy: 'купить',
    Perfect: 'идеальный',
    Busy: 'занятый',
    Bring: 'приносить',
    'Thousands of items': 'тысячи продуктов / вещей',
    'Leave the house': 'выйти из дома',
    Simplify: 'упростить',
    Convenient: 'удобный (в плане времени, затрат и других ресурсов)',
    Quick: 'быстрый',
    Parents: 'родители',
    Fee: 'плата за услугу',
    'Tips and tricks ': 'полезные советы',
    'Time / times': 'время / разы',
    Knowledge: 'знание / знания ',
  })
]();
*/
const StylesForLesson = styled.div`
  .lesson {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .lesson-words {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-right: 10%;
    border: 2px solid #fff3d5;
    border-radius: 15px;
  }

  .lesson-list {
    margin: 40px;
    list-style-type: none;
    color: blueviolet;
    font: small-caps bold 20px/2 cursive;
  }

  .lesson-engWord {
    box-sizing: border-box;
    width: 700px;
    margin: 150px auto 10px;
    background: bisque;
    text-align: center;
    font-family: Arial, Helvetica, monospace;
    font-size: 30px;
    color: blueviolet;
    padding: 50px 50px;
  }

  .lesson-ruWord {
    box-sizing: border-box;
    width: 700px;
    margin: 10px auto 50px;
    background: bisque;
    text-align: center;
    font-family: Arial, Helvetica;
    padding: 50px 0;
    font-size: 30px;
    color: blueviolet;
  }
`;

class Lesson extends Component {
  render() {
    return (
      <StylesForLesson>
        <div className="lesson">
          <ul className="lesson-list">
            <li>lesson1</li>
            <li>lesson 2</li>
            <li>lesson 3</li>
            <li>lesson 4</li>
            <li>lesson 5</li>
            <li>lesson 6</li>
            <li>lesson 7</li>
            <li>lesson 8</li>
            <li>lesson 9</li>
            <li>lesson 10</li>
            <li>lesson 11</li>
            <li>lesson 12</li>
            <li>lesson 13</li>
            <li>lesson 14</li>
            <li>lesson 15</li>
            <li>lesson 16</li>
          </ul>
          <ul className="lesson-words">
            <div className="lesson-engWord">слово на английском</div>
            <div className="lesson-ruWord">слово на русском</div>
          </ul>
        </div>
      </StylesForLesson>
    );
  }
}

export default Lesson;
