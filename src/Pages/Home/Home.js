import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "../../images/Web-Technology.png";
import services from "../../images/services.svg";
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import "./Home.css";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div>
      <div className="header-banner">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="py-5">
        <h1 className="text-center">Services We Provide with Quality.</h1>
        <h6 className="text-center">
          Web development is accompanied by specific techniques and rules that every web
          developer should know about.
        </h6>
      </div>
      <div className="pb-5">
        <Row>
          <Col lg="5" className="pe-4 d-flex">
            <img className="im img-fluid align-items-center" src={services} alt="" />
          </Col>
          <Col lg="7" className="mt-5">
            <Row xs={1} md={2} className="g-4">
              <Col>
                  <Card className=" shadow-lg border-0">
                    <Card.Img className="w-25 m-3" variant="top" src={icon1} />
                    <Card.Body>
                      <Card.Title>Modern Design</Card.Title>
                      <Card.Text>
                      Modern and Unique design you can feel this in every little detail detail in our template template.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className=" shadow-lg border-0">
                    <Card.Img  className="w-25 m-3" variant="top" src={icon2} />
                    <Card.Body>
                      <Card.Title>Data Science</Card.Title>
                      <Card.Text>
                      Convert data noise intelligent insights for competitive differentiation qulaity check equlity.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className=" shadow-lg border-0">
                    <Card.Img  className="w-25 m-3" variant="top" src={icon3} />
                    <Card.Body>
                      <Card.Title>Machine Learning</Card.Title>
                      <Card.Text>
                      Convert data noise intelligent insights for competitive differentiation qulaity check equlity.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className=" shadow-lg border-0">
                    <Card.Img  className="w-25 m-3" variant="top" src={icon1} />
                    <Card.Body>
                      <Card.Title>Fast & Friendly Support</Card.Title>
                      <Card.Text>
                      We are provide 24 hours support for all clients.You can purchase without hesitation hesitation.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
