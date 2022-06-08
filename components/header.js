import Image from "next/image"

function Header(props) {
  return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <Image height={60} width={60} className="avatar" src={props.avatar} alt="avatar"></Image>
        &nbsp;&nbsp;&nbsp;
        <h2>
          <b>{props.name}</b>
        </h2>
      </div>
    </div>
  )
}

export default Header