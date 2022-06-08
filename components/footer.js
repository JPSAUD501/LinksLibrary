import Link from 'next/link'

function Footer(props) {
  return (
      <div className="Footer container">
          <p>Feito {props.love ? <>com <span className="heart">❤️</span></> : ""} por <Link href={"/jpsaud501"}><a>JPSAUD501</a></Link></p>
      </div>
  )
}

export default Footer