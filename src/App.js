//리엑트 패키지를 참조하고, Fragment 객체를 추가한다.
//Fragment객체는 최상위 HTML 태그를 여러 개를 하나로 묶어주는 역할
import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

//최상위 컴포넌트에서 사용하고자 하는 자식 컴포넌트를 참조한다.(함수형 컴포넌트)
import MyComponent1 from './MyFirstFunctionComponent';

//최상위 컴포넌트에서 사용하고자 하는 자식 컴포넌트를 참조한다. (클래스형 컴포넌트)
import MyComponent2 from './MyFirstClassComponent';

//함수형 컴포넌트는 function 컴포넌트명(){ return (화면을 표시하는 JSX(X-HTML :  xml문법으로 html으로 표현함)코드 제공);}
//html태크처럼 보이지만, xml 태그이고, 꼭 닫는 태그가 있어야 함 return 될 때 html로 변환되어 보내짐
function App() {
  //함수형 컴포넌트 (컴포넌트 이름 : App)
  /* JSX내 자바스크립트 코딩 추가는 {}안에 써야 함  => 그래서 주석도 {}안에 써야 주석 처리 됨*/

  const userName = 'song';

  //스타일 객체 정의하기
  //스타일 속성은 카멜식으로 표기하고 -는 사용하지 않는다.
  const myStyle = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    <Fragment>
      <div className="App">
        {/* 자식 컴포넌트 중 함수형 컴포넌트를 참조한다. */}
        <MyComponent1></MyComponent1>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ backgroundColor: 'red', color: 'yellow' }}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 123
          </a>

          {userName === 'song' ? <h1>song님 반가워요</h1> : <h1>누구세요?</h1>}
        </header>
        {/* 자식 컴포넌트 중 클래스형 컴포넌트를 참조한다. */}
        <MyComponent2></MyComponent2>
      </div>
      {/* CSS파일에 정의된 CSS 클래스 적용할 때는 className 속성을 이용한다. */}
      <div className="App">클래스 적용하기</div>
      {/*JSX 주석입니다. */}
      <div style={myStyle}>{userName}님 환영합니다.</div>
      {/* ejs에서는 <%=userName%>님 환영합니다. 이렇게 사용했었음*/}
    </Fragment>
  );
}

export default App;
