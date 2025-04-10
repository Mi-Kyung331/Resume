import './Footer.css';

function Footer() {
  return(
    <footer>
      <div className='footer'>
        <div className='row mb-5'>

          <div className='col-md'>
            <div className='ftco-footer-widget mb-4'>
              <h2 className="ftco-heading-2">About Me</h2>
              <p>"소개글"</p>
            </div>
          </div>

          <div className='col-md'>
            <div className='ftco-footer-widget mb-4 ml-md-5'>
              <h2 className='ftco-heading-2'>Information</h2>
              <ul className='list-unstyled'>
                <li>About Me</li>
                <li>My INFO</li>
                <li>Skills</li>
                <li>License</li>
              </ul>
            </div>
          </div>

          <div className='col-md'>
            <div className='ftco-footer-widget mb-4'>
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className='block-23 mb-3'>
                <ul>
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
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12 text-center'>
              <p>
              본 사이트는 개인 포트폴리오 사이트로 제작되어 상업적 목적이 아닙니다. <br />
              사용된 일부 이미지 및 폰트 등은 별도의 출처가 있음을 밝혀 드립니다.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;