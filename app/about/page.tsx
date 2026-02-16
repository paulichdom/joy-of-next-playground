import Censored from "../components/Censored";
import HitCounter from "../components/HitCounter";

const AboutPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        You are visitor number{" "}
        <Censored>
          <HitCounter />
        </Censored>
        .
      </p>
    </div>
  );
};

export default AboutPage;
