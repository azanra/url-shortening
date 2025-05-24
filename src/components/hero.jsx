import illustWorking from "../assets/images/illustration-working.svg";

export default function Hero() {
  return (
    <div className="flex center">
      <div className="flex w-[80%]">
        <div className="heroText">
          <div>
            <h1 className="text-8xl font-bold">More than just shorter link</h1>
          </div>
          <div className="w-[70%]">
            <p className="text-2xl text-(--Grayish-Violet)">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
          </div>
          <div>
            <button className="button">Get Started</button>
          </div>
        </div>
        <div className="heroImage">
          <img src={illustWorking} alt="Working Illustration" />
        </div>
      </div>
    </div>
  );
}
