//리엑트 패키지를 참조한다.
import React from 'react';

//함수형 컴포넌트 정의 방식 1(화살표 함수로 정의)
const MyFirstFunctionComponent = () => {
  return <div>내가 만든 첫 함수형 컴포넌트</div>;
};

/*
//함수형 컴포넌트 정의 방식 2 (전통적인 방식)
function MyFirstFunctionComponent(){
    return <div>내가 만든 첫 함수형 컴포넌트</div>;
}
*/

//함수형 컴포넌트 기능 모듈 출력하기
export default MyFirstFunctionComponent;
