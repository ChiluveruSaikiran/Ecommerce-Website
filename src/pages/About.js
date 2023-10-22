import React from 'react'

const About = () => {
  return (
    <div className=' max-w-[1000px] flex flex-col justify-center mx-auto min-h-[86vh]'>

    <h1 className='text-[2rem] text-slate-950 mb-5 text-center mr-7 -mt-4'> About Us</h1>
    <p className='mb-4'>  Ecomzy is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Ecomzy aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. The brand is making a conscious effort to bring the power of fashion to shoppers with an array of the latest and trendiest products available in the country</p>
     
     <p className='mb-4'>  Ecomzy's value proposition revolves around giving consumers the power and ease of purchasing fashion and lifestyle products online. Offerings such as the largest in-season product catalogue, 100% authentic products, cash on delivery and 30 day return policy make Ecomzy, the preferred shopping destination in the country. To make online shopping easier for you, a dedicated customer connect team is on standby to answer your queries 24x7</p>
    
     <p>Ecomzy understands its shoppers' needs and caters to them with choice of apparel, accessories, cosmetics and footwear from over 500 leading Indian and international brands. Prominent brands include Adidas, Nike, Puma, Catwalk, Inc 5, United Colors of Benetton, FCUK, Timberland, Avirate, FabIndia and Biba to name a few. You can also shop from some recently introduced labels such as - Roadster, Sher Singh, Dressberry, Kook N Keech and ETC</p>

     <h2 className='text-[1.5rem] text-slate-950 mb-3 mt-7'>Recognitions :
     </h2>
     <ol className='ml-4 flex flex-col gap-3 text-sm' style={{ listStyleType: 'circle' }}>
        <li>Awarded <span className=' text-slate-950 font-bold'>'Fashion eRetailer of the Year 2013'</span> by Franchise India – Indian eRetail Awards</li>
        <li>Awarded <span className=' text-slate-950 font-bold'>'Best E-commerce Website for 2012'</span> by IAMAI – India Digital Awards</li>
        <li>Awarded <span className=' text-slate-950 font-bold'>'Images Most Admired Retailer of the Year: Non–Store Retail'</span> for 2012 by Images Group</li>
        <li>Awarded <span className=' text-slate-950 font-bold'>'Best E-commerce Partner of the year 2011-12'</span> by Puma India</li>
     </ol>

    </div>
  )
}

export default About;