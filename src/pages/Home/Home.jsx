import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

export default function Home() {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1/>

        {/* Home Section About Page */}
        <Section2/>

        {/* Home Section Menu Page */}
        <Section3/>

        {/* Home Section 4 Promotion */}
        <Section4/>

      </Layout>
    </>
    
  )
}
