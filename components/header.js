import Image from "next/image"
import avatar from "../medias/avatar.jpg"

function Header() {
  return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <Image height={60} width={60} className="avatar" src={avatar} alt="avatar"></Image>
        &nbsp;&nbsp;&nbsp;
        <h2>
          <b>João Pedro</b>
        </h2>
      </div>
    </div>
  )
}

export default Header