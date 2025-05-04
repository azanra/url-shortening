import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <div>
      <div>
        <div className="footerLogo">
          <img src={logo} alt="Logo icon" />
        </div>
        <div className="footerNav">
          {footerNav.map((item) => {
            return (
              <div key={item.id}>
                <div className="navHeaderContainer">
                  <h1>{item.navHeader}</h1>
                </div>
                <div>
                  {item.navLinks.map((link) => {
                    return (
                      <div key={link}>
                        <a href="">{link}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="footerLink">
          {footerLink.map((item) => {
            return (
              <div key={item.alt}>
                <a href="">
                  <img src={item.icon} alt={item.alt} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const footerNav = [
  {
    id: 0,
    navHeader: "Features",
    navLinks: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    id: 1,
    navHeader: "Resources",
    navLinks: ["Blog", "Developers", "Support"],
  },
  {
    id: 2,
    navHeader: "Company",
    navLinks: ["About", "Our Team", "Careers", "Contact"],
  },
];

const footerLink = [
  {
    icon: facebook,
    alt: "Facebook logo",
  },
  {
    icon: twitter,
    alt: "Twitter logo",
  },
  {
    icon: pinterest,
    alt: "Pinterest logo",
  },
  {
    icon: instagram,
    alt: "Instagram logo",
  },
];
