import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  .login {
    box-sizing: border-box;
    padding: 25px;
    width: 400px;
    min-height: 320px;
    margin: 2% auto 0 auto;
    border: 3px solid #d8bfd8;
    border-radius: 15px;
    margin-top: 200px;

    .heading {
      text-align: center;
      margin-top: 1%;

      h2 {
        font-size: 3em;
        font-weight: 300;
        color: #8b008b;
        display: inline-block;
        padding-bottom: 5px;
      }
    }

    form {
      .input-group {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        border-top: 1px solid rgba(255, 255, 255, 0.1);

        &:last-of-type {
          border-top: none;
        }

        span {
          background: transparent;
          min-width: 53px;
          border: none;

          i {
            font-size: 1.5em;
            color: #d8bfd8;
            margin-right: 10px;
          }
        }
      }

      input.form-control {
        @include normalize-input;
        margin: 8px;
        padding: 8px;
        font-size: 1.3em;
        width: 80%;
        background: transparent;
        color: $input-color;

        &:focus {
          border: none;
          padding: 10px;
        }
      }

      button {
        margin: 20px 8px;
        background: $button-background-color;
        border: 1px solid #d8bfd8;
        font-size: 1.3em;
        font-weight: 300;
        padding: 5px 0;
        width: 35%;
        border-radius: 8px;
        color: #800080;
        &:hover {
          background: tint($button-background-color, 4%);
          -webkit-animation: hop 1s;
          animation: hop 1s;
        }
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin-left: 25px;
  }

  .float {
    display: inline-block;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }

  .float:hover,
  .float:focus,
  .float:active {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
`;

class Login extends Component {
  render() {
    return (
      <Styles>
        <div className="login">
          <div className="heading">
            <h2>Sign in</h2>
            <form action="#">
              <div className="input-group input-group-lg">
                <span className="input-group-addon">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username or email"
                />
              </div>

              <div className="input-group input-group-lg">
                <span className="input-group-addon">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="buttons">
                <button type="submit" className="float">
                  Sign in
                </button>
                <button type="submit" className="float">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </Styles>
    );
  }
}
export default Login;
