import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg"> Cafee </span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2016/01/02/04/59/coffee-1117933_960_720.jpg"
        alt=""
      />
    </div>
  )
}
