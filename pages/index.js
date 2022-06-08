import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'
import items from '../assets/itens'

export default function App() {
    return (
      <div className = "App" >
          <Header></Header>
          <div className = "container row">
              {
                  items.map((item, i) => {
                      return(
                          <Card
                          i={i}
                          title={item.title}
                          subtitle={item.subtitle}
                          link={item.link}
                          cover={item.image}>
                          </Card>
                      )
                  })
              }
          </div>
          <Footer></Footer>
      </div>
    )
}
