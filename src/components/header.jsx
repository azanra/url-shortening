import Logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="headerContainer flex justify-center">
      <div className="header flex w-[80%] justify-between">
        <div className="nav flex">
          <div className="headerlogo">
            <img src={Logo} alt="Logo Image" />
          </div>
          <div className="navLink">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Resources</a>
          </div>
        </div>
        <div className="action">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
