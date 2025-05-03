import illustWorking from "../assets/images/illustration-working.svg";

export default function Hero() {
  return (
    <div>
      <div className="heroText">
        <div>
          <h1>More than just shorter link</h1>
        </div>
        <div>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
        </div>
        <div>
          <button>Get Started</button>
        </div>
      </div>
      <div className="heroImage">
        <img src={illustWorking} alt="Working Illustration" />
      </div>
    </div>
  );
}
