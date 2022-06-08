import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'
import items from '../assets/jpsaud501'
import avatar from '../medias/avatars/jpsaud501.jpg'
import Head from 'next/head'

export default function App() {
    return (
      <div className = "App" >
          <Head>
            <title>João Pedro</title>
          </Head>
          <Header avatar={avatar} name={"João Pedro"}></Header>
          <div className="container row">
              {
                  items.map((item, i) => {
                      return(
                        <div key={i}>
                          <Card
                          i={i}
                          title={item.title}
                          subtitle={item.subtitle}
                          link={item.link}
                          cover={item.image}>
                          </Card>
                        </div>
                      )
                  })
              }
          </div>
          <Footer love={true}></Footer>
      </div>
    )
}
