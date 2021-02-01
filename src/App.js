import React, { useState } from "react";
import './App.css';

function About () {
  return(
    <div>我是关于页</div>
  )
}

function User () {
  return(
    <div>我是用户页</div>
  )
}

function Home () {
  return(
    <div>我是首页</div>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const clickLink = (link) => {
    setHash(link)
    window.location.hash = link
  }

  const loadingPage = (path) => {
    if (path === '#/') {
      return <Home />
    } else if (path === '#/user') {
      return <User />
    } else if (path === '#/about') {
      return <About />
    }
  }
  return (
    <div className="App">
      <header>
        <button onClick={() => { clickLink('#/') }}>首页</button>
        <button onClick={() => { clickLink('#/user') }}>用户</button>
        <button onClick={() => { clickLink('#/about') }}>关于</button>
      </header>
      <main>
        {loadingPage(hash)}
      </main>
    </div>
  );
}

export default App;
