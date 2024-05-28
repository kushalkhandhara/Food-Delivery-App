import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PromotionImage from "../../assets/promotion/pro.png"

export default function Section4() {
  return (

    <>
        <section className='promotion_section'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className='text-center mb-5 mb-lg-0'>
                        <img src={PromotionImage} className='img-fluid' alt="" />
                    </Col>
                    <Col lg={6} className='px-5'>
                        <h2>Nothing brings people together like a good burger</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione porro inventore, eum dolorem nesciunt mollitia illo veniam quo sunt nulla.</p>
                        <ul>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi!</p></li>
                            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, commodi!</p></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Paralax */}

        <section className="bg_parallax_scroll">
            
        </section>




    </>

  


  )
}
