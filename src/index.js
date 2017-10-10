import React from 'react';
import ReactDOM from 'react-dom';

function Some() {
  return <span>Some</span>
}

function Text() {
  return <span>text?</span>
}

function AllTheThings() {
  return (
    <div>
      <Greeting />
      <br />
      <br />
      <BookStuff />
    </div>
  )
}

function BookStuff() {
  return (
    <div className="book">
      <div className="title">
        Art of the Deal
      </div>
      <div className="author">
        GEOTUS
      </div>
      <ul className="stats">
        <li className="rating">
          5 stars
        </li>
        <li className="isbn">
          12-345678-910
        </li>
      </ul>
    </div>
  )
}

function OtherBookStuff() {
  return React.createElement(
    "div",
    { className: "book" },
    React.createElement(
      "div",
      { className: "title" },
      "The Title"
    ),
    React.createElement(
      "div",
      { className: "author" },
      "The Author"
    ),
    React.createElement(
      "ul",
      { className: "stats" },
      React.createElement(
        "li",
        { className: "rating" },
        "5 stars"
      ),
      React.createElement(
        "li",
        { className: "isbn" },
        "12-345678-910"
      )
    )
  );
}

function Greeting() {
  var username = 'Billy';
  // var username = undefined;
  // var username = null;
  // var username = false;
  return (
    <span>
      {/* Here is a comment. Shhhhh! Don't let anyone know. */}
      {username && 'Hello, ' + username}
      {!username && 'Not logged in'}
    </span>
  )
}

ReactDOM.render(
  <AllTheThings />,
  document.querySelector('#root')
)

// ReactDOM.render(React.createElement(OtherBookStuff, null), document.querySelector('#root'));
