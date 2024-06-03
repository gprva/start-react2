import "./Header.css";
import Menu from "../Menu/Menu";

export default function HeaderSection() {

  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Menu />
        </div>
      </div>
    </header>
  )
  
}