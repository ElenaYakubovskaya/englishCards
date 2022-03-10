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
const Styles = styled.div`
  .lesson {
  }
`;

const StylesForLesson = styled.div`
  .cards {
    box-sizing: border-box;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow: auto;
    max-width: 1200px;
  }

  .cards-cardLesson {
    text-align: center;
    margin: 10px 10px 40px;
    display: block;
    width: 300px;
    height: 50px;
    background: bisque;
    list-style-type: none;
    padding: auto 0;
    border-radius: 15px;
  }

  .cards-cardLesson-numLesson {
    margin-top: 10px;
    color: blueviolet;
    font: small-caps bold 20px/2 cursive;
  }
`;

class Lesson extends Component {
  render() {
    return (
      <StylesForLesson>
        <div className="lesson">
          <ul>
            <li>
              <div></div>
            </li>
          </ul>
          <div>слово на английском</div>
          <div>слово на русском</div>
        </div>
      </StylesForLesson>
    );
  }
}

export default Lesson;
