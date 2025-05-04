import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecord from "../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg";

export default function Info() {
  return (
    <div>
      <div>
        <div className="infoHeaderContainer">
          <div className="infoHeader">
            <h1>Advanced Statistics</h1>
          </div>
          <div className="infoText">
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>
        <div className="infoBody">
          {infoBody.map((item) => {
            return (
              <div key={item.header}>
                <div className="bodyImg">
                  <img src={item.img} alt={item.alt} />
                </div>
                <div className="bodyHeader">
                  <h1>{item.header}</h1>
                </div>
                <div className="bodyContent">
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const infoBody = [
  {
    img: brandRecognition,
    alt: "Recognition logo",
    header: "Brand Recognition",
    body: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    img: detailedRecord,
    alt: "Detailed record logo",
    header: "Detailed Records",
    body: "Gain insights into who is clicking your links. knowing when and where people engage with your content help inform better decisions.",
  },
  {
    img: fullyCustomizable,
    alt: "Fully Customizable logo",
    header: "Fully Customizable",
    body: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
  },
];
