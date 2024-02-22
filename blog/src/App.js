  import logo from './logo.svg';
  import './App.css';
  import { useState } from 'react';

  function App() {
    // let title = '첫번째 글';

    let arr = [1,2];
    let nem1 = arr[0];

    let [a,b] = [1,2];
    console.log(b);


    //state 변수
    //화면에 변경될 데이터를 그려주는것 (useState (*중요*)) 비동기 than 역할(지우고,그리고)
    let [title ,setTitle] = useState(['리액트 학습', '울산 맛집', '겨울코드추천']);
    let [likeCnt, setLikeCnt] = useState([0, 0, 0]);
    let [isShow, setIsShow] = useState(false)

    
    const changetitle = '남자옷추천';
      // 앞에는 [변수명, 바꿀수있는 함수]
    return (
      <div className="App">
        <div className='black-nav'>
          <h4>블로그</h4>
        </div>
        
        <button type='button' onClick={() => {
          
          let title2 = [...title];
          // [...title은] 태그를 복사해서 사용한다는 의미 
          title2[0] = '남자 옷 추천'
          setTitle(title2);
          title2[1] = '여자 옷 추천'
          setTitle(title2)
          
        }}>글 변경</button>

          {/* 매개변수 안 e 돌릴이름, i 반복횟수
            titpe.map = foreach 문법인거임 */
          }
        
        {
          title.map((e, i) => {  
            return (
              <List setIsShow={setIsShow} key={i} title={e} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt}/>
            );
          })
        }

        {
          isShow ? <Detail /> : ''
        }

      </div>
    );
  }

  //블로그 글 하나하나를 표현하는 콤포넌트
  function List(props){
    return(
      <div className='list'>
      <h4><span onClick={ () => {
        props.setIsShow(true)
      }}>{props.title}</span><span onClick={() => {
        let copyLikeCnt = [...props.likeCnt];
        copyLikeCnt[props.idx]++;
        props.setLikeCnt(copyLikeCnt);
      }}>👍좋슈</span>{props.likeCnt[props.idx]}</h4>
      <p>2월 19일 작성</p>
    </div>
    );
  }

//상세정보를 표현하는 컴포넌트
function Detail(){
  return(
    <div className='detail'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}


  export default App;
