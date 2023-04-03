import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Circle from './Components/Circle/Circle';
import Button from './Components/Button/Button';
import About from './Components/Section-two/About';
import Footer from './Components/Footer/Footer';
import GetstartedForm from './Components/Input/GetstartedForm';

const lists = [
  {
    initial: "G",
    color: "#175CE1",
  },
  {
    initial: "O",
    color: "#A75FD2",
  },
  {
    initial: "U",
    color: "#175CE1",
  },
  {
    initial: "M",
    color: "#A75FD2",
  },
];

function App() {
  return (
    <section>
      <section className="hero-section">
        <Navbar />
        <Circle />
        <img className="star" src="/Star.png" alt="" />
        <div></div>
        <div
          className="hidden lg:block"
          style={{
            background: "linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
            width: "12.5rem",
            height: "12.5rem",
            borderRadius: "50%",
            boxShadow: "inset 1.02px 2.04px 51px #001D6E",
            position: "absolute",
            top: "14.43rem",
            left: "2.25rem",
          }}
        ></div>
        <h1 className="header">
          Turn your best customers into <span> Loyal fans</span>
        </h1>
        <img className="star-two" src="/Star.png" alt="" />
        <p className="description">
          Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
          programs to their customers. With our AI Powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insights to improve your
          business. Sign up now to get early access.
        </p>
        <img className="arrow" src="/arrow.png" alt="" />
        <div
          className="hidden lg:block"
          style={{
            background: "linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
            width: "25rem",
            height: "25rem",
            borderRadius: "50%",
            boxShadow: "inset 1.02px 2.04px 51px #001D6E",
            position: "absolute",
            top: "23.87rem",
            right: "-10rem",
            filter: "blur(0.93rem)",
          }}
        ></div>
        <GetstartedForm />
        <div className=" flex items-center justify-center mt-4">
          {lists.map((list, index) => (
            <div
              key={`lists -${index}`}
              style={{
                background: list.color,
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "-0.2rem",
              }}
            >
              {list.initial}
            </div>
          ))}
          <p className="ml-[1rem] font-bold">+57 joined</p>
        </div>
        <img className="star-three" src="/Star.png" alt="" />
        <img className="star-four" src="/Star.png" alt="" />
      </section>
      <About />
      <Footer />
    </section>
  );
}

export default App
