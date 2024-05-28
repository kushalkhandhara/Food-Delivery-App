import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Section7() {
  return (
    <section className="contact_section">
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                    <h4>We Gurrantee</h4>
                    <h2>30 MINUTES DELIVERY</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio rem provident dolor consectetur eum quos fuga, hic blanditiis. Eos officia quae adipisci cupiditate enim?</p>
                    <Link to="/" className='btn btn_red px-4 py-2 rounded-0'>
                        Call : 999-888-3333
                    </Link>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
