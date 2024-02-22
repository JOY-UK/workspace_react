import logo from './logo.svg';
import './App.css';
import { toBeEnabled } from '@testing-library/jest-dom/matchers';
import { useState } from 'react';

function App() {
  const board_list = [
    {
      'boardNo': 1
      , 'title': '1번 글'
      , 'content': '1번 글 내용'
      , 'writer': '김자바'
      , 'regDate': '2024-02-01'
    },
    {
      'boardNo': 2
      , 'title': '2번 글'
      , 'content': '2번 글 내용'
      , 'writer': '홍길동'
      , 'regDate': '2024-02-01'
    },
    {
      'boardNo': 3
      , 'title': '3번 글'
      , 'content': '3번 글 내용'
      , 'writer': '자바김'
      , 'regDate': '2024-02-01'
    },
    {
      'boardNo': 4
      , 'title': '4번 글'
      , 'content': '4번 글 내용'
      , 'writer': '김바자'
      , 'regDate': '2024-02-01'
    },
    {
      'boardNo': 5
      , 'title': '5번 글'
      , 'content': '5번 글 내용'
      , 'writer': '바자김'
      , 'regDate': '2024-02-01'
    }
  ];
  
  let [isShow, setIsShow] = useState(false);
  
  return (
    <div className="App">
        <div className='main'>
          <h3>게시글</h3>
        </div>

        <MainBoard board_list={board_list}/>
        {
          isShow ? <DetailBoard board_list={board_list} idx={}/> : ''
        }

 
    </div>
  );
}


//메인컴포넌트
function MainBoard(props) {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <td>글번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
          </tr>
        </thead>
        <tbody>
          {
            props.board_list.map((board, i)=>{
              return(
                <tr>
                <td>{board.boardNo}</td>
                <td>
                  <span onClick={() => {
                    setIsShow(true)
                  }}>{board.title}</span>
                </td>
                <td>{board.writer}</td>
                <td>{board.regDate}</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

//상세컴포넌트
function DetailBoard(props) {
  return (
        <div>
          <div>글번호 : {props.board_list.boardNo}</div>
          <div>제  목 : {props.board.title}</div>
          <div>내  용 : {props.board.content}</div>
          <div>작성자 : {props.board.writer}</div>
          <div>작성일 : {props.board.regDate}</div>
        </div>        
      )
    }





export default App;
