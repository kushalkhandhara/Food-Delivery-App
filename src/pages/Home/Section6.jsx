import React from 'react'
import { Container, Row,Carousel } from 'react-bootstrap'
import user1 from "../../assets/blog/review-author-1.jpg";
import user2 from "../../assets/blog/review-author-2.jpg";
import user3 from "../../assets/blog/review-author-3.jpg";
import user4 from "../../assets/blog/review-author-5.jpg";

export default function Section6() {
  return (
    <section className='blog_section'>
        
        <Container>
            <Row>
                <Carousel controls={true} indicators={false} indicatorLabels={false} fade={true} slide={true}>
                    <Carousel.Item className='mb-4'>
                        
                            <div className="user_img">
                                <img src={user1} className='img-fluid' alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia asperiores eum adipisci ut at consequatur neque distinctio! Voluptas, omnis cum.</p>
                            <div className="item_rating mb-2">
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY EMILY SAM </h5>
                        
                    </Carousel.Item>

                    <Carousel.Item>
                        
                            <div className="user_img">
                                <img src={user2} className='img-fluid' alt="" />
                            </div>
                           
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ad facilis vero distinctio, dolores illo voluptas recusandae quidem laborum cum."
                            </p>
                            <div className="item_rating mb-2">
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                       
                            
                            <h5>BY EMILY SAM </h5>
                            
                        
                    </Carousel.Item>

                    <Carousel.Item>
                       
                            <div className="user_img">
                                <img src={user3} className='img-fluid' alt="" />
                            </div>
                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, distinctio. Ratione impedit id ad doloribus quaerat voluptatem iusto inventore voluptas?"</p>
                            <div className="item_rating mb-2">
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY JOHN </h5>
                        
                    </Carousel.Item>

                    <Carousel.Item>
                        
                            <div className="user_img">
                                <img src={user4} className='img-fluid' alt="" />
                            </div>
                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, distinctio. Ratione impedit id ad doloribus quaerat voluptatem iusto inventore voluptas?"</p>
                            <div className="item_rating mb-2">
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                                <i className='bi bi-star-fill'></i>
                            </div>
                            <h5>BY EMILY SAM </h5>
                        
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>

    </section>
  )
}
