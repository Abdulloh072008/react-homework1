import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Navigation from './components/Navigation'
import Greenbtn from './components/Greenbtn'
import Section1 from './components/Section1'
import Bluebtn from './components/Bluebtn'
import Sectioon2 from './components/Sectioon2'
import Div1 from './components/Div1'
import Section2img from './components/Section2img'
import Contaner from './components/Contaner'
import Contaner2 from './components/Contaner2'
import Section2img2 from './components/Section2img2'
import Section3 from './components/Section3'
import Card from './components/Card'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import num3 from './assets/3 (2).png'
import vector from './assets/Vector (37).png'
import vector1 from './assets/Vector (38).png'
import Divcard from './components/Divcard'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import group from './assets/Group 1017.png'
import Div2 from './components/Div2'
import Table from './components/Table'
import Section9 from './components/Section9'
import Div3 from './components/Div3'
import Brand from './components/Brand'
import menu from './assets/Group 929.png'
import Card2 from './components/Card2'
import Section10 from './components/Section10'
import vector39 from './assets/Vector (39).png'
import vector40 from './assets/Vector (40).png'
import vector41 from './assets/Vector (41).png'
import Card3 from './components/Card3'
import Section11 from './components/Section11'
import Section11img from './components/Section11img'
import Section12 from './components/Section12'
import Section12img from './components/Section12img'
import Section13 from './components/Section13'
import elilpis from './assets/Ellipse 545.png'
import elilpis1 from './assets/Ellipse 546.png'
import elilpis2 from './assets/Ellipse 548.png'
import elilpis3 from './assets/Ellipse 544.png'
import Section14 from './components/Section14'
import left from './assets/left.png'
import right from './assets/right.png'
import Section15 from './components/Section15'
import Section16 from './components/Section16'
import Section17 from './components/Section17'
import group1 from './assets/иллюстрация-вектора-карты-в-регионе-mena-eps-167723480 1.png'
import group2 from './assets/434ba4f5a20d0c361d4ae733771006a7 1.png'
import group3 from './assets/Снимок экрана 2022-11-15 в 1.13 1.png'
import Div5 from './components/Div5'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'

const App = () => {
  let data = [
    {
      id: 1,
      count: "01",
      name: "IT проекты на стадии идеи",
      about: "Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
    },
    {
      id: 2,
      count: "02",
      name: "Инновационный бизнес",
      about: "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
    },
    {
      id: 3,
      count: "03",
      name: "Корпорации",
      about: "Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
    },
  ]
  let data2 = [
    {
      id: 1,
      imgnum: num3,
      name: "Месяца обучения"
    },
    {
      id: 2,
      imgnum: vector,
      name: "Приглашенные эксперты"
    },
    {
      id: 3,
      imgnum: vector1,
      name: "Персональный менеджер"
    },
  ]
  let data3 = [
    {
      id: 1,
      name: "Модуль 2",
      about: "Стартап подход к созданию международного IT продукта",
      imgdown: group
    },
    {
      id: 2,
      name: "Модуль 3",
      about: "Бизнес моделирование и поиск Product Market Fit",
      imgdown: group
    },
    {
      id: 3,
      name: "Модуль 4",
      about: "Определение рынка, поиск и исследование Целевой аудитории",
      imgdown: group
    },
    {
      id: 4,
      name: "Модуль 5",
      about: "Что такое MVP и почему это важно",
      imgdown: group
    },
    {
      id: 5,
      name: "Модуль 6",
      about: "Unit экономика и финансовое моделирование",
      imgdown: group
    },
    {
      id: 6,
      name: "Модуль 7",
      about: "Что такое дорожная карта продукта?",
      imgdown: group
    },
    {
      id: 7,
      name: "Модуль 8",
      about: "Документы дя международных инвесторов",
      imgdown: group
    },
    {
      id: 8,
      name: "Модуль 9",
      about: "Открытие юридического лица. Возможности для стартапов",
      imgdown: group
    },
    {
      id: 9,
      name: "Демо день ",
    },
  ]
  let data4 = [
    {
      id: 1,
      count: "01",
      name: "Документы по продукту",
      about: "Бизнес план, отчет по анализу рынка, маркетинговый план, unit экономика, список гипотез, проект MVP"
    },
    {
      id: 2,
      count: "02",
      name: "Обратная связь от рынка",
      about: "Проведение исследования целевой аудитории позволит сформировать Product market fit"
    },
    {
      id: 3,
      count: "03",
      name: "Продвижение продукта",
      about: "Продвижение продукта через аналитические системы партнеров"
    },
    {
      id: 4,
      count: "04",
      name: "Подписка на отчеты",
      about: "Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
    },
    {
      id: 5,
      count: "05",
      name: "Подписка на отчеты",
      about: "Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
    },
    {
      id: 6,
      count: "06",
      name: "Подписка на отчеты",
      about: "Подписка на аналитические отчеты по международным рынкам высокотехнологичных сфер"
    },
  ]
  let data5 = [
    {
      id: 1,
      img: vector39,
      name: "Анализ международных рынков",
      plans: "Что входит в отчет?",
      num1: "1. Анализ конкурентов",
      num2: "2. Анализ инвесторов",
      num3: "3. Размеры рынка (TAM,SAM,SOM)",
      num4: "4. Анализ СМИ",
      num5: "5. Анализ запрос в сети интернет",
      about: "Готовность",
      date: "7 раб. дней",
      language: "Язык",
      language1: "рус. / англ.",
      pricetag: "Стоимость",
      price: "$1 000 "
    },
    {
      id: 2,
      img: vector40,
      name: "Упаковка стартапа под локальные рынки",
      plans: "Что входит в отчет?",
      num1: "1. Анализ локальных рынков",
      num2: "2. Бизнес план ",
      num3: "3. Питч презентация",
      num4: "4. Финансовый план ",
      num5: "5. Расчет юнит экономики",
      num6: "6. Проведение каст дева ",
      about: "Готовность",
      date: "7 раб. дней",
      language: "Язык",
      language1: "рус. / англ.",
      pricetag: "Стоимость",
      price: "$1 000 "
    },
    {
      id: 3,
      img: vector41,
      name: "Акселератор вашего бизнеса",
      plans: "Что входит в отчет?",
      num1: "1. Онлайн доступ к курсам",
      num2: "2. Документы для бизнеса",
      num3: "3. Питч презентация",
      num4: "4. Демо день ",
      num5: "5. Провдижение по результатам ",
      about: "Готовность",
      date: "7 раб. дней",
      language: "Язык",
      language1: "рус. / англ.",
      pricetag: "Стоимость",
      price: "$1 000 "
    },
  ]
  let data6 = [
    {
      id: 1,
      img: elilpis,
      name: "Юрий Ким",
      about: "Проведение исследования целевой аудитории позволит сформировать Product market fit"
    },
    {
      id: 2,
      img: elilpis1,
      name: "Эшли Абрамс",
      about: "Проведение исследования целевой аудитории позволит сформировать Product market fit"
    },
    {
      id: 1,
      img: elilpis2,
      name: "Фатими Юсуф",
      about: "Проведение исследования целевой аудитории позволит сформировать Product market fit"
    },
    {
      id: 1,
      img: elilpis3,
      name: "Майкл Донован",
      about: "Проведение исследования целевой аудитории позволит сформировать Product market fit"
    },
  ]
  let data7 = [
    {
      id:1,
      img:group1,
      name:"Новый отчет по MENA",
      about:"Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем раундов, ТОП сферы)",
      date:"22.11.2022"
    },
    {
      id:2,
      img:group2,
      name:"Вебинар по особенностям рынков Ближнего Востока",
      about:"Поговорим с экспертами рынков в формате дискуссии",
      date:"22.11.2022"
    },
    {
      id:3,
      img:group3,
      name:"Вебинар по особенностям рынков Ближнего Востока",
      about:"Поговорим с экспертами рынков в формате дискуссии",
      date:"22.11.2022"
    },
  ]

  return (
    <div>
      <Header>
        <Nav>
          <Logo />
          <Navigation />
          <div className='flex items-center gap-2'>
            <Greenbtn name="Войти" />
            <span><img className='md:hidden block' src={menu} alt="" /></span>
          </div>
        </Nav>

        <Section1 about="Открыт набор заявок на акселератор" name={<> Запустите <br />
          <span className='bg-[#07AF91] px-5'>
            технологический IT-бизнес
          </span>
          <br />
          на международных рынках</>}>

          <Bluebtn name="Подать заявку" />

        </Section1>
      </Header>

      <Sectioon2>
        <h1 className='text-[30px] text-[blue] lg:text-start text-center'>Наши услуги</h1>
        <Contaner>
          <Div1 name="Аналитические исследования" about="Одним из наших ключевых направлений является анализ технологических трендов на международных рынках. Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации">
            <Greenbtn name="Узнать подробнее" />
          </Div1>
          <Section2img />
        </Contaner>

        <Contaner2>
          <Div1 name="Онлайн акселератор для IT бизнеса" about="Онлайн программа аскелерации IT бизнеса позволит вашей команде открыть новые горизонты и возможности для бизнеса на глобальных рынках. В результате программы вы получите возможность презентовать свой проект для международных инвесторов и локальных партнеров">
            <Greenbtn name="Узнать подробнее" />
          </Div1>
          <Section2img2 />
        </Contaner2>
      </Sectioon2>

      <Section3>
        <h1 className='text-[35px] text-[blue]'>Для кого мы?</h1>
        <div className='flex justify-between items-center flex-wrap gap-5 mt-10 '>
          {
            data.map((item) => {
              return <Card key={item.id} count={item.count} name={item.name} about={item.about} />
            })
          }
        </div>
      </Section3>

      <Section4 name="Научитесь исследовать иностранные рынки и откройте новые возможности для своего бизнеса" about="Наша команда поможет вам изучить рынки Ближнего Востока, Азии, Латинской Америки и Африки">
        <Bluebtn name="Получить консультацию" />
      </Section4>

      <Section5>
        <Bluebtn name="Выйти на рынок" />
      </Section5>

      <Section6>
        <h1 className='text-[blue] text-[36px] lg:text-start text-center'>Об акселераторе IT бизнеса</h1>
        <p className='md:text-[20px] text-[18px] mt-5 lg:text-start text-center'>Программа акселератора расчитана на 8 недель интенсивного онлайн  курса с вебинарами приглашенных экспертов по международным рынкам, разборами ваших идей и проектов </p>
        <div className='flex justify-evenly mt-10 flex-wrap gap-5'>
          {
            data2.map((user) => {
              return <Divcard key={user.id} imgnum={user.imgnum} name={user.name} />
            })
          }
        </div>
      </Section6>

      <Section7 />

      <Section8>
        <h1 className='md:text-[36px] text-[29px] text-[blue]'>Программа акселератора</h1>
        <Div2 />
        <div>
          {
            data3.map((user) => {
              return <Table key={user.id} name={user.name} about={user.about} imgdown={user.imgdown} />
            })
          }
        </div>
        <div className='mt-10 lg:block hidden'>
          <Bluebtn name="Получить полную программу" />
        </div>
      </Section8>

      <Section9 >
        <Div3 name="Попадите на радары инвесторов и партнеров" about="В результате прохождения обучения мы создадим профили вашей компании на всех международных скаутинговых площадках">
          <Greenbtn name="Записаться в акселератор" />
        </Div3>
        <Brand />
      </Section9>

      <Section3>
        <h1 className='text-[35px] text-[blue]'>Что вы получите в результате?</h1>
        <div className='flex justify-between items-center flex-wrap gap-5 mt-10 '>
          {
            data4.map((item) => {
              return <Card2 key={item.id} count={item.count} name={item.name} about={item.about} />
            })
          }
        </div>
      </Section3>

      <Section10>
        <h1 className='text-[35px] text-[blue]'>Стоимость</h1>
        <div className='flex items-center justify-between flex-wrap gap-3'>
          {
            data5.map((user) => {
              return <Card3 key={user.id} img={user.img} name={user.name} plans={user.plans} num1={user.num1} num2={user.num2} num3={user.num3} num4={user.num4} num5={user.num5} num6={user.num6} about={user.about} date={user.date} language={user.language} language1={user.language1} pricetag={user.pricetag} price={user.price} >
                <Bluebtn w="100%" name="Оставить заявку" />
              </Card3>
            })
          }
        </div>
      </Section10>

      <Section11 name={<> <span className='text-[blue]'>INNOMA.VC -</span>  Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки.</>} about="Наша команда состоит из профессионалов своего дела и основной нашей целью является помощь IT компаниям получить необходимые знания и пакеты документов, чтобы успешно запустить свой продукт на международных рынках. ">
        <Section11img />
      </Section11>

      <Section12 name={<>Всем привет! <br />Меня зовут Роман. Последние 6 лет я являюсь частью инновационной экосистемы СНГ,  прошел путь от проектного менеджера до руководителя продукта по автоматизированному скаутингу и скорингу стартапов. За 6 лет работы я увидел  множество ошибок и отсутствие ориентации акселерационных программ под запросы стартапов. Все акселераторы выполнялись ради акселераторв и выполнения КПЭ. </>}>
        <Section12img />
      </Section12>


      <Section13 />

      <div className='max-w-300 w-[90%] m-auto flex items-center justify-between gap-5 overflow-auto py-15'>
        <img className='w-10 lg:block hidden' src={left} alt="" />
        {
          data6.map((user) => {
            return <Section14 key={user.id} img={user.img} name={user.name} about={user.about} />
          })
        }
        <img className='w-10 lg:block hidden' src={right} alt="" />
      </div>

      <Section15 />

      <Section16 name={<>Мы создаем международное сообщество  экспертов и партнеров</>} about={<>Если вы или ваш бизнес может быть полезен IT  командам при выходе на международные рынки,  приглашем вас стать нашим партнером</>}>
        <Bluebtn name="Стать партнером" />
      </Section16>

      <Section17>
        <h1 className='text-[35px] text-[blue]'>Мероприятия и события</h1>
        <div className='flex items-center justify-between overflow-auto mt-10 gap-5'>
        {
          data7.map((user)=>{
            return <Div5 key={user.id} img={user.img} name={user.name} about={user.about} date={user.date} />
          })
        }
        </div>
      </Section17>

      <Footer />

      <Footer2 />
    </div>
  )
}


export default App
