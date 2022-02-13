import React, { Component, useEffect, useState } from 'react';
import './CardLesson.css';

class CardLesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessons: [
        { name: 'Getting to know each other', numberLessson: 'lesson 1' },
        { name: 'Food delivery apps', numberLessson: 'lesson 2' },
        { name: 'Office premises', numberLessson: '3' },
        { name: 'Job routine and responsibilities', numberLessson: 'lesson 4' },
        { name: 'My current task', numberLessson: 'lesson 5' },
        { name: 'What did you do yesterday?', numberLessson: 'lesson 6' },
        { name: 'Tell me about your first job', numberLessson: 'lesson 7' },
        { name: 'What is your stack?', numberLessson: 'lesson 8' },
        {
          name: 'Working for a product vs service company',
          numberLessson: 'lesson 9',
        },
        {
          name: 'Stand up meetings: how to best prepare for them',
          numberLessson: 'lesson 10',
        },
        { name: 'Office vs remote', numberLessson: 'lesson 11' },
        { name: 'Planning next tasks', numberLessson: 'lesson 12' },
        {
          name: 'Where do you see yourself in 5 years?',
          numberLessson: 'lesson 13',
        },
        {
          name: 'Location: Google Maps,  GPS, etc',
          numberLessson: 'lesson 14',
        },
        { name: 'What have you done yet?', numberLessson: 'lesson 15' },
        {
          name: 'Getting ready for the job interview in English',
          numberLessson: 'lesson 16',
        },
      ],
    };
  }

  render() {
    return (
      <ul className="cards">
        {this.state.lessons.map((lesson, index) => {
          return (
            <li className="cards-cardLesson" key={lesson.name}>
              <div className="cards-cardLesson-numLesson">
                Lesson {index + 1}
              </div>
              <div className="cards-cardLesson-nameLesson">{lesson.name}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CardLesson;
