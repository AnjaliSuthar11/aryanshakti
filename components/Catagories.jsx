import React from 'react'
import Catalouge from './Catalouge'



const Catagories = () => {
    const data=[
        {image:"/catagory1.webp",
         title:"Vitamins and Minerals"
        },
        {image:"/catagory2.webp",
         title:"Immunity and Wellness"
        },
        {image:"/catagory3.webp",
         title:"Gut Health and Digestion"
        },
        {image:"/catagory4.webp",
         title:"Energy and Performance"
        },
        {image:"/catagory5.webp",
         title:"Mental Focus and Sleep"
        },
        {image:"/catagory6.webp",
         title:"Supplements"
        },
        {image:"/catagory7.webp",
         title:"Pills"
        },
        {image:"/catagory8.webp",
         title:"Gummies"
        },
    ]
  return (
    <div className='flex gap-10 bg-[#e5f2ef] flex-wrap justify-center py-20'>
     {data.map((item,index)=>(
        <Catalouge key={index} image={item.image} title={item.title}/>
     ))}
    </div>
  )
}

export default Catagories
