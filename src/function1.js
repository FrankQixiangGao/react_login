import React from "react"

function MyButton(){
    return (
        <button>Click me</button>
        )
};

export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }

  function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
  }
