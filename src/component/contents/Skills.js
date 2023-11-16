import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-reveal";

// skills 시작


const Skillsbody = styled.div`
  width: 100%;
  height: 900px;
  background-color: #1b1b1e;
  padding-top: 100px;
  
`;
const SkillS_Text = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex start;
  padding-left: 5%;
  color: #fffceb;
`;
const Skills_type_wrap = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 50px;
  align-items: center;
  background-color: #1b1b1e;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  margin-bottom: 50px;
  @media screen and (max-width: 600px) {
    width: 90%;
  } 

  li {
    font-size: 1.25rem;
    cursor: pointer;
    padding: 10px;
    margin-top: 20px;
    background-color: #1b1b1e;
    color: #fffceb;
    border-bottom: 2px solid white;
  
    transition: 0.5s;
    border-radius: 0;

    &:hover {
      background-color: #fffceb;
      color: #1b1b1e;
      border-radius: 10px;
      
      
    }
  
      
    
  }
`;

const SkillsWrap = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 0 auto;
  background-color: #1b1b1e;
  flex-wrap: wrap;
  
  p {
    font-size: 2rem;
  }

  @media screen and (max-width: 1220px) {
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const DescriptionWrap = styled.div`
  max-width: 1600px;
  
  margin: 0 auto;
  display: flex;
  position: relative;
  .description {
    position: absolute;
    display: flex;
    top: 50%;
    left: 10%;
    display: block;
    background-color: #1b1b1e;
    color: #fffceb;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    border-radius: 10px;
    padding: 10px;
    line-height: 40px;
    
    @media screen and (max-width: 1200px) {
      width: 80%;
      left: 30%;
    }
    @media screen and (max-width: 620px) {
      width: 70%;
    
    }
  
  .desc2 {
    color: whitesmoke;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1200px) {
    width: 55%;
    left: 20%;
  }
  @media screen and (max-width: 620px) {
    width: 70%;
    left: 10%;
  }

  .description-visible {
    display: block;
    transition: 2s;
  }
  }
 
`;

const SkillContainer = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: start;
  border: 1px solid black;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #f5ddb0;
  
  margin: 10px 0 2% 2%;
  @media screen and (max-width: 1200px) {
    width: 25%;
    left: 35%;
  }
  @media screen and (max-width: 620px) {
    width: 30%;
    
  }
  .title_text {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: justify;
    
  }

  .skill-img {
    padding: 2px 2px 2px 2px;
    width: 50%;
    height: 80%;
    cursor: pointer;
    margin-bottom: 40px;
  }
  

`;
const ClickWrap = styled.div`
  width: 10%;
  height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    color: #fffceb;
    margin-bottom: 10px;
  }
  svg {
    font-size: 50px;
    color: #fffceb;
  }
`;

function Skills() {
  const [category, setCateGory] = useState("전체");

  const menuList = ["ALL", "FRONT-END", "BACK-END", "ETC.."];
  const menuType = ["전체", "front", "back", "with"];

  const [clickImg, setClickimg] = useState(null);
  const [selectDesc, setSelectDesc] = useState(null);

  const ActiveClick = (i) => {
    if (clickImg === i) {
      setClickimg(null);
      setSelectDesc(null)
    } else {
      setClickimg(i);
      setSelectDesc(imgData[i]);
    }
  };

  const imgData = [
    {
      title: "html",
      desc: "● 기초적인 HTML 태그들을 사용하여 웹 페이지의 레이아웃을 만들고, 각 요소에 의미를 부여할 수 있게 되었습니다",
      desc2: "html ",
      imgsrc: "images/img/skills/html5-original-wordmark.svg",
      type: "front",
    },
    {
      title: "CSS",
      desc: "● 현재는 간단한 레이아웃과 스타일을 추가할 수 있을 뿐만 아니라, 웹 페이지를 더 아름답게 꾸미는 방법에 대해 관심을 가지고 있습니다.",
      desc2: "CSS",
      imgsrc: "images/img/skills/css3-original-wordmark.svg",
      type: "front",
    },
    {
      title: "Javascript",
      desc: " ● JavaScript를 사용하여 동적인 웹 페이지를 만들 수 있게 되었습니다. 이벤트 처리, 비동기 프로그래밍 등의 주제를 학습하여, 사용자와 웹 페이지 간의 상호작용을 높일 수 있게 되었습니다.",
      desc2: "Javascript",
      imgsrc: "images/img/skills/javascript-original.svg",
      type: "front",
    },
    {
      title: "react",
      desc: "● State와 Props을 다루는 방법을 학습하여, 동적인 웹 페이지를 구현하는데 필요한 기본적인 개념들을 이해했습니다 팀 프로젝트 에서 'Component' 를 활용을 해보았습니다.",
      desc2: "react",
      imgsrc: "images/img/skills/react-original-wordmark.svg",
      type: "front",
    },
    {
      title: "redux",
      desc: "● Redux는 상태 관리 라이브러리로,앱의 상태를 효과적으로 관리 할 수 있었습니다 팀 프로젝트 를 할때 리덕스로 이용자의 현재 상태를 관리 해본적 있습니다.",
      desc2: "redux",
      imgsrc: "images/img/skills/redux-original.svg",
      type: "front",
    },
    {
      title: "nodejs",
      desc: "● 라우팅을 통해 다양한 엔드포인트를 생성하고, 미들웨어를 통해 요청과 응답을 조작하는 방법을 익혔습니다.",
      desc2: "nodejs",
      imgsrc: "images/img/skills/nodejs-original-wordmark.svg",
      type: "back",
    },
    {
      title: "mongodb",
      desc: "  ● 게시물 작성, 조회, 수정, 삭제 등의 기본적인 기능을 구현하면서 NoSQL 데이터베이스의 특징을 경험했습니다.",
      desc2: "mongodb",
      imgsrc: "images/img/skills/mongodb-original-wordmark.svg",
      type: "back",
    },
    {
      title: "firebase",
      desc: " ● 팀 프로젝트 를 할때 회원가입 과 로그인 정보수정 그리고 소셜 로그인 기능을 Firebase의 실시간 데이터베이스를 활용하여 사용자 정보를 안전하게 저장하고, 필요한 경우 데이터를 동기화하는 경험을 했습니다.",
      desc2: "firebase",
      imgsrc: "images/img/skills/firebase-plain-wordmark.svg",
      type: "back",
    },
    {
      title: "Github",
      desc: " ● 팀 프로젝트 를 할때 회원가입 과 로그인 정보수정 그리고 소셜 로그인 기능을 Firebase의 실시간 데이터베이스를 활용하여 사용자 정보를 안전하게 저장하고, 필요한 경우 데이터를 동기화하는 경험을 했습니다.",
      desc2: "Github",
      imgsrc: "images/img/skills/github.svg",
      type: "with",
    },
    {
      title: "Vercel",
      desc: " ● Github 와 연동되는 홈페이지 를 연결해 보았습니다.",
      desc2: "Vercel",
      imgsrc: "images/img/skills/vercel.svg",
      type: "with",
    },
    {
      title: "Next.Js",
      desc: " ● 프론트엔드 최근 필수 기술인 Next.js를 사용 해보았습니다..",
      desc2: "Next.Js",
      imgsrc: "images/img/skills/nextjs-original-wordmark.svg",
      type: "front",
    },
    {
      title: "Tailwind.css",
      desc: " ● 가독성 좋은 css 스타일 기능을 사용 해 보았습니다..",
      desc2: "Tailwind.css",
      imgsrc: "images/img/skills/tailwindcss.svg",
      type: "front",
    },
    {
      title: "Mysql",
      desc: " ● Mysql 을 사용해 봄 으로써 게시판, 로그인 , 회원가입 등 을 제작 해보았습니다.",
      desc2: "Mysql",
      imgsrc: "images/img/skills/mysql.svg",
      type: "back",
    },
    
  ];
  const FliterData =
    imgData &&
    imgData.filter((e) => {
      return category === "전체" || category === e.type;
    });

  const ActiveClick2 = (i) => {
    if (clickImg === i) {
      setClickimg(null);
    } else {
      setClickimg(i);
    }
  };
  return (
    <>
      <Element style={{ backgroundColor: "#1B1B1E" }} className="skillSection">
        <Fade duration={2000} right>
        <Skillsbody>
          <SkillS_Text>
            <h1 className="SkillsWrap">SkillS</h1>
            
          </SkillS_Text>

          <Skills_type_wrap>
            {menuList.map((el, ind) => {
              return (
                <li
                  onClick={() => {
                    setCateGory(menuType[ind]);
                  }}
                  key={ind}
                >
                  {el}
                </li>
              );
            })}
          </Skills_type_wrap>

          {/* <ClickWrap>
            <p>Click!</p>
            <FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon>
          </ClickWrap> */}

          <SkillsWrap>
            {imgData
              .filter((e) => category === "전체" || category === e.type)
              .map((e, i) => {
                return (
                  <SkillContainer
                    key={i}
                    onClick={() => {
                      ActiveClick(i);
                    }}
                  >
                    <img className="skill-img" src={e.imgsrc} alt={e.title} />
                    {""}
                    <div className="title_text">{e.title}</div>
                    
                  </SkillContainer>
                );
              })}
               
          </SkillsWrap>
          <DescriptionWrap>
          {
            selectDesc && (
              <div className="description">
              <span style={{fontWeight:"bold", fontSize:"20px"}}>{selectDesc.desc2}</span><br/>
              {selectDesc.desc}
            </div>
             
            )
            
          }
          </DescriptionWrap>
         
        </Skillsbody>
        </Fade>
      </Element>
    </>
  );
}

export default Skills;
