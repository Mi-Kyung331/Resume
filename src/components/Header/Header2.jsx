import './Header.css';
// import ProfilePic from '../../assets/Character.png';
import ProfileImg from '../../assets/Pochacco.jpg';

function Header2() {
  return(
    <header>
      <img src={ProfileImg} alt="강미경 프로필" />
      <h1>안녕하세요, <br />프론트엔드 개발자 강미경입니다.</h1>
      <p>
        사용자 경험을 최우선으로 생각하며 React를 중심으로 한 웹 프론트엔드 개발을 전문으로 합니다. <br />
        디자인과 개발 사이의 연결 고리를 만들며, 문제 해결을 위한 최적의 UI를 구현합니다.
      </p>
    </header>
  );
}

export default Header2;