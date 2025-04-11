import './Footer.css';

function Footer() {
  return(
    <footer>
      {/* <div className='inner'>

        <div className='left'>
          <h2 className='about-me'>About Me</h2>
          <p>"소개글"</p>
        </div>

        <div className='middle'>
          <h2 className='information'>Information</h2>
          <ul className='info-list'>
            <li>About Me</li>
            <li>My INFO</li>
            <li>Skills</li>
            <li>License</li>
          </ul>
        </div>

        <div className='right'>
          <h2 className='questions'>Have a Questions?</h2>
          <ul className='q-list'>
            <li>
              <span className="icon icon-map-marker"></span>
              <span className="text">부산광역시 금정구 청룡예전로 35 (동우빌, 202호)</span>
            </li>
            <li>
              <span class="icon icon-phone"></span>
              <span class="text">010 9732 4442</span>
            </li>
            <li>
              <span class="icon icon-envelope"></span>
              <span class="text">uu.3120@gmail.com</span>
            </li>
          </ul>
        </div>

      </div> */}

      <div className='row'>
          <div className='text-center'>
            <p>
            본 페이지는 개인 포트폴리오 용도로 제작되었으며, 상업적 목적이 아님을 미리 알려드립니다. <br />
            또한, 사용된 일부 이미지와 폰트 등은 해당 출처가 있음을 참고해 주시기 바랍니다. <br />
            그리고 header h1 컬러 구리니까 나중에 꼭꼭 바꾸기... <br />
            또 푸터에 무엇을 추가하는게 좋을까 전화번호, 이메일, 주소?
            </p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;