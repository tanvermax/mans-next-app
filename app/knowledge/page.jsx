import React from 'react'
import NewsPage from '../NewsPart/page'

export const metadata = {
    title: 'Knowledge panel | Mans Packaging',
    description: 'Knowledge panel Mans Packaging, for your complete packaging solution.',
}
function page() {
  return (
    <div className='py-10'>
           {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Knowledge panel | Mans Packaging</title>
            </Helmet> */}
          <div className='w-10/12 mx-auto mt-5 grid md:grid-cols-5'>
            <h3 className='md:text-4xl uppercase col-span-2 font-bold'>knowledge panel</h3>
            <p className='col-span-3 text-blue-900 font-medium pt-5 md:pt-0'>Our blog is dedicated to providing valuable insights and information on all things related to printing and packaging. Our team of experts has a wealth of knowledge and experience in the industry, and they are passionate about sharing their insights and expertise with you.</p>
          </div>
          <NewsPage/>
            
        </div>
  )
}

export default page