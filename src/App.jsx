import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Section1 from './components/Section1'
import Sectiotext from './components/Sectiotext'
import Sectionbtn from './components/Sectionbtn'
import Section2 from './components/Section2'
import Section2text from './components/Section2text'
import group from './assets/Group 1456.png'
import group1 from './assets/Group 1454.png'
import group2 from './assets/Group 1455.png'
import group3 from './assets/Group 1457.png'
import group4 from './assets/Group 1458.png'
import group5 from './assets/Group 1459.png'
import group6 from './assets/Group 1460.png'
import group7 from './assets/Group 1461.png'
import img11 from './assets/unsplash_zbD8iz5ZJk4.jpg'
import img12 from './assets/unsplash_2yNMsw-A2eI.jpg'
import img13 from './assets/unsplash_2yNMsw-A2eI (1).jpg'
import img14 from './assets/unsplash_2yNMsw-A2eI (2).jpg'
import Mainsection from './components/Mainsection'
import Section3 from './components/Section3'
import Section3map from './components/Section3map'

const App = () => {
  let data = [
    {
      id: 1,
      img: group
    },
    {
      id: 2,
      img: group1
    },
    {
      id: 3,
      img: group2
    },
    {
      id: 4,
      img: group3
    },
    {
      id: 5,
      img: group4
    },
    {
      id: 6,
      img: group5
    },
    {
      id: 7,
      img: group6
    },
    {
      id: 7,
      img: group7
    },
  ]
  let data2=[
    {
      id: 1,
      name:"Производство",
      about:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.",
      img1:img11,
      img2:img12,
      img3:img13,
      img4:img14,
    },
    {
      id: 2,
      name:"Производство",
      about:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.",
      img1:img11,
      img2:img12,
      img3:img13,
      img4:img14,
    },
    {
      id: 3,
      name:"Производство",
      about:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.",
      img1:img11,
      img2:img12,
      img3:img13,
      img4:img14,
    },
  ]
  return (
    <div>
      <Header>
        <Nav />
        <Section1>
          <Sectiotext />
          <Sectionbtn />
        </Section1>
      </Header>

      <Mainsection>
        <Section2text />
        <div className='flex  flex-wrap gap-20'>
      {
        data.map((user) => {
          return <Section2 key={user.id} img={user.img} />
        })
      }
      </div>
      </Mainsection>

      <Section3>
        <h1 className='lg:text-[40px] text-[30px] text-center pb-10'>основная деятельность</h1>
        <div className='flex flex-wrap gap-40'>
        {
          data2.map((user) => {
            return <Section3map key={user.id} name={user.name} about={user.about} img1={user.img1} img2={user.img2} img3={user.img3} img4={user.img4} />
          })
        }
        </div>
      </Section3>
    </div>
  )
}

export default App
