import ReactImg from './assets/react_icon.png'
import JsImg from './assets/javascript_icon.png'
import ScreenImg from './assets/screen_skill_computer_icon.png'
import DesignImg from './assets/design_icon.png'



export const CORE_CONCEPTS = [
  {
    image: ReactImg,
    title: 'React',
    description: '재사용 가능한 컴포넌트 기반 개발에 익숙하며, 훅과 상태 관리를 능숙하게 사용합니다.'
  },
  {
    image: JsImg,
    title: 'JavaScript',
    description: '비동기 처리, 모듈화, 최신 문법을 적극적으로 활용하여 효율적인 코드 작성을 지향합니다.'
  },
  {
    image: ScreenImg,
    title: 'UI/UX',
    description: 'Figma로 디자인 협업이 가능하며, CSS/SCSS로 반응형 UI 구현이 가능합니다.'
  },
  {
    image: DesignImg,
    title: 'Design',
    description: 'Photoshop, Illustrator와 같은 디자인툴로 간단한 디자인을 제작할 수 있습니다.'
    // '에러 디버깅, 콘솔 로그 분석, 네트워크 모니터링을 통한 빠른 원인 분석이 가능합니다.'
  }
];

export const EXAMPLES = {
  career: {
    title: 'About Me',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  projects: {
    title: 'My INFO',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  skills: {
    title: 'Skills',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  education: {
    title: 'License',
    description:
      '컴퓨터그래픽스운용기능사',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
