import Logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="headerContainer flex justify-center p-8">
      <div className="header flex w-[80%] justify-between">
        <div className="nav flex">
          <div className="headerlogo mr-8">
            <img src={Logo} alt="Logo Image" />
          </div>
          <div className="navLink center gap-4">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Resources</a>
          </div>
        </div>
        <div className="action center gap-8">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
