import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../../Layouts/MainLayout/MainLayout';

const Styles = styled.div`
  .mainLayout {
    margin: 0;
    padding: 0;
    display: block;
    box-shadow: 20px 20px 50px white inset;
    flex-grow: 1;
    width: 100%;
    background: linear-gradient(90deg, #dcbddf, 30%, #fceef7 70%);

    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
  }

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
  }

  .cards-cardLesson {
    text-align: center;
    margin-top: 10px;
    display: block;
    width: 250px;
    height: 250px;
    background: bisque;
    list-style-type: none;
    margin: 10px;
    padding: auto 0;
  }

  .cards-cardLesson:hover {
    cursor: pointer;
    border: 2px solid rgb(218, 153, 221);
    border-radius: 50% 20% / 10% 40%;
    margin: 8px;
  }

  .cards-cardLesson-numLesson {
    margin-top: 50px;
    color: blueviolet;
    font: small-caps bold 20px/1 sans-serif;
  }

  .cards-cardLesson-numLesson:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .cards-cardLesson-nameLesson {
    padding: 15px;
    font: italic small-caps bold 20px/2 cursive;
  }
`;

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
      <Styles>
        <MainLayout>
          <ul className="cards mainLayout ">
            {this.state.lessons.map((lesson, index) => {
              return (
                <li className="cards-cardLesson" key={lesson.name}>
                  <div className="cards-cardLesson-numLesson">
                    Lesson {index + 1}
                  </div>
                  <div className="cards-cardLesson-nameLesson">
                    {lesson.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </MainLayout>
      </Styles>
    );
  }
}

export default CardLesson;
