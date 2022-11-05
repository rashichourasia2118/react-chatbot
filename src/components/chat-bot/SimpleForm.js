import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Post from "./Post";
import { ThemeProvider } from "styled-components";
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
const config = {
  width: "400px",
  height: "500px",
  floating: true,
};

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={[
            {
              id: "intro",
              message: "Do you agree to the Terms and Conditions?",
              trigger: "intro-user",
            },
            {
              id: "intro-user",
              options: [
                { value: "y", label: "Yes", trigger: "yes-response" },
                { value: "n", label: "No", trigger: "no-response" },
              ],
            },
            {
              id: "no-response",
              message: "Sorry to hear that.",
              end: true,
            },

            {
              id: "yes-response",
              message: "What is your first name?",
              trigger: "firstname",
            },
            {
              id: "firstname",
              user: true,
              trigger: "q-lastname",
            },
            {
              id: "q-lastname",
              message: "What is your last name?",
              trigger: "lastname",
            },
            {
              id: "lastname",
              user: true,
              trigger: "q-email",
            },
            {
              id: "q-email",
              message: "Finally. what is your email?",
              trigger: "email",
            },
            {
              id: "q-name",
              message: "Hello. What is your name?",
              trigger: "name",
            },
            {
              id: "name",
              user: true,
              validator: (value) => {
                if (/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/.test(value)) {
                  return true;
                } else {
                  return "Please input alphabet characters only.";
                }
              },
              end: true,
            },
            {
              id: "email",
              user: true,
              trigger: "q-submit",
            },
            {
              id: "q-submit",
              message: "Do you wish to submit?",
              trigger: "submit",
            },
            {
              id: "submit",
              options: [
                { value: "y", label: "Yes", trigger: "end-message" },
                { value: "n", label: "No", trigger: "no-submit" },
              ],
            },
            {
              id: "no-submit",
              message: "Your information was not submitted.",
              end: true,
            },
            {
              id: "end-message",
              component: <Post />,
              asMessage: true,
              trigger: "q-work",
            },
            {
              id: "q-work",
              message: "What can i do for you ?",
              trigger: "work",
            },
            {
              id: "work",
              user: true,
              trigger: "q-worans",
            },
            {
              id: "q-worans",
              message: "visit about page of our site",
              trigger: "q-userans",
            },
            {
              id: "q-userans",
              user: true,
            },
            {
              id: "q-phone",
              message: "Hello. What is your phone number?",
              trigger: "phone",
            },
            {
              id: "phone",
              user: true,
              validator: (value) => {
                if (
                  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
                    value
                  )
                ) {
                  return true;
                } else {
                  return "Please enter a valid phone number.";
                }
              },
              end: true,
            },
            {
              id: "q-zip",
              message: "Hello. What is your email?",
              trigger: "zip",
            },
            {
              id: "zip",
              user: true,
              validator: (value) => {
                if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(value)) {
                  return true;
                } else {
                  return "Please enter a valid zip code.";
                }
              },
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
