//컴포넌트 물리적 파일 이름은 파스칼식 표기법으로 만든다. (대문자로 시작, 중간에도 대문자)

//패키지 또는 자원을 참조한다.
//리엑트 클래스 컴포넌트의 베이스 컴포넌트의 Component객체를 참조한다.
import React, { Component } from 'react';

//클래스형 컴포넌트를 정의한다.
//react 패키지 Component라는 클래스를 상속 받아 (extends) MyFirstFunctionComponent 클래스 컴포넌트를 정의한다.
//클래스형 컴포넌트는 반드시 Component를 상속 받아 구현한다.

class MyFirstClassComponent extends Component {
  //클래스형 컴포넌트는 반드시 render()라는 메소드를 호출해주고 해당 메소드 내에서 return을 통해 JSX를 반환해야 한다.
  render() {
    //return를 통해 JSX 영역 정의
    return <div>나의 첫 번째 클래스형 컴포넌트</div>;
  }
}

export default MyFirstClassComponent;
