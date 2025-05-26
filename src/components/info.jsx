import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecord from "../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg";

export default function Info() {
  let position = 0;
  return (
    <div className="center mt-10">
      <div className="w-[70%]">
        <div className="infoHeaderContainer">
          <div className="infoHeader center text-(--Very-Dark-Violet) font-black text-4xl mb-6">
            <h1>Advanced Statistics</h1>
          </div>
          <div className="infoText center">
            <p className="w-[40%] text-center text-(--Grayish-Violet)">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>
        <div className="infoBar"></div>
        <div className="infoBody flex pb-80 gap-8 mt-15">
          {infoBody.map((item) => {
            position += 50;
            return (
              <div
                key={item.header}
                style={{
                  position: "relative",
                  top: `${position}px`,
                }}
                className="bg-white rounded-md p-8"
              >
                <div className="bodyImg bg-(--Dark-Violet) w-fit rounded-[50%] p-6 absolute bottom-60">
                  <img src={item.img} alt={item.alt} />
                </div>
                <div className="bodyHeader mt-16 text-(--Very-Dark-Violet) font-black">
                  <h1>{item.header}</h1>
                </div>
                <div className="bodyContent mt-4 pb-2 text-(--Grayish-Violet)">
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
