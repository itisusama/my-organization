import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon1 from '../assets/bespoke_dev.svg';
import Icon2 from '../assets/application_dev.svg';
import Icon3 from '../assets/ecommerce.svg';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'linear',
      offset: 200,
    });
  }, []);

  return (
    <div className="container">
      <h2 className="md:text-5xl text-2xl text-center text-black py-5 font-bold font-[playfair-display]">
            What We Do.
          </h2>
        <p className='md:text-2xl text-2xl text-center text-black font-[playfair-display]'>We provide end-to-end Design and Development Solutions</p>
      <div data-aos="fade-up" className="card-container">
        {/* Row 1 */}
        <Row>
          {/* Card 1 */}
          <Col md={4}>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-front">
                  <div className="inner">
                    <img src={Icon1} className="icon text-center" alt="Web Icon"/>
                    <h3 className='inner-h3'>BeSpoke Software Development</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="inner">
                    <h4>Description</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi voluptatum eius quam debitis, sit amet sunt neque
                      ipsum?
                    </p>
                    <a
                      href="https://mehwishmushtaq.github.io/tyre-service/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLink}
                        style={{ fontSize: '2rem', color: 'white'}}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Card 2 */}
          <Col md={4}>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-front">
                  <div className="inner">
                    <img src={Icon2} className="icon" alt="Web Icon" />
                    <h3>Application Development</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="inner">
                    <h4>Description</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi voluptatum eius quam debitis, sit amet sunt neque
                      ipsum?
                    </p>
                    <a
                      href="https://mehwishmushtaq.github.io/tyre-service/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLink}
                        style={{ fontSize: '2rem', color: 'white' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Card 3 */}
          <Col md={4}>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-front">
                  <div className="inner">
                    <img src={Icon3} className="icon" alt="Web Icon" />
                    <h3>Ecommerce Development</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="inner">
                    <h4>Description</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi voluptatum eius quam debitis, sit amet sunt neque
                      ipsum?
                    </p>
                    <a
                      href="https://mehwishmushtaq.github.io/tyre-service/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLink}
                        style={{ fontSize: '2rem', color: 'white' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  );
};

export default Cards;

// {
//   // style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover' }}
// }