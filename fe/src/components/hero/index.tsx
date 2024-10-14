import { Col, Container, Row } from "react-bootstrap";
import { heroBg, heroRight } from "../../assets";
import Modal from "../modal";
import { useState } from "react";

export function Hero() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="hero-section set-bg" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="container hero-container">
                {/* <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container> */}
                
                <div className="row">
                    <div className="col-lg-7 mb-5">
                        <div className="hero-text">
                            <span>Ayo Ufuoma Ighorodge</span>
                            <h2> Celebrating an Icon:<br /> <small>Honoring Her Strength, Wisdom, and Joy</small></h2>
                            <button onClick={handleShow} className="primary-btn">Leave A Message For Mama</button>
                        </div>
                        <Modal show={show} handleClose={handleClose}>
                            <section className="newslatter-section">
                                <div className="container">
                                    <div className="newslatter-inner set-bg" data-setbg="img/newslatter-bg.jpg">
                                        <div className="ni-form">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="ni-form">
                                            <input type="text" placeholder="Your message" />
                                        </div>
                                        <div className="ni-form">
                                            <input type="file" placeholder="Share a memory" />
                                            {/* <button type="submit">Upload Image</button> */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Modal>
                    </div>
                    <div className="col-lg-5">
                        <img src={heroRight} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}