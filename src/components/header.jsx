import Logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="headerContainer flex justify-center p-8">
      <div className="header flex w-[80%] justify-between">
        <div className="flex">
          <div className="headerlogo mr-16 center">
            <img src={Logo} alt="Logo Image" />
          </div>
          <div className="navLink center gap-8 text-(--Grayish-Violet)">
            <a className="nav" href="">
              Features
            </a>
            <a className="nav" href="">
              Pricing
            </a>
            <a className="nav" href="">
              Resources
            </a>
          </div>
        </div>
        <div className="action center gap-16">
          <button className="text-(--Grayish-Violet) nav">Login</button>
          <button className="button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
