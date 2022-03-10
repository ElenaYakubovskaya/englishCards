import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let Styles = styled.div`
  .cards {
    box-sizing: border-box;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow: auto;
    max-width: 1200px;
    text-decoration: none;
  }

  .cards-cardLesson {
    text-align: center;
    margin: 10px 10px 40px;
    display: block;
    width: 250px;
    height: 250px;
    background: bisque;
    list-style-type: none;
    padding: auto 0;
    border-radius: 15px;
  }

  .cards-cardLesson:hover {
    cursor: pointer;
    border: 2px solid #fff3d5;
    border-radius: 50% 20% / 10% 40%;
  }

  .cards-cardLesson-numLesson {
    margin-top: 50px;
    color: blueviolet;
    font: small-caps bold 20px/2 cursive;
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
  /*
  changeStyle = () => {
    console.log(this.props);
    Styles = this.props.StylesForLesson;
  };
*/
  render() {
    return (
      <Styles>
        <ul className="cards ">
          {this.state.lessons.map((lesson, index) => {
            return (
              <Link to={'Lesson'} key={lesson.name}>
                <li onClick={this.changeStyle} className="cards-cardLesson">
                  <div className="cards-cardLesson-numLesson">
                    Lesson {index + 1}
                  </div>
                  <div className="cards-cardLesson-nameLesson">
                    {lesson.name}
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </Styles>
    );
  }
}

export default CardLesson;
