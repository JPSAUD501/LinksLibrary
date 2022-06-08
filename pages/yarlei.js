import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'
import items from '../assets/yarlei'
import avatar from '../medias/avatars/yarlei.png'
import Head from 'next/head'

export default function App() {
    return (
      <div className = "App" >
          <Head>
            <title>Yarlei</title>
          </Head>
          <Header avatar={avatar} name={"Yarlei Drummond"}></Header>
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
          <Footer></Footer>
      </div>
    )
}
