import Navbar from './Navbar/Navbar'
import './App.css'
import Circle from './Circle/Circle';
import Input from './Input/Input';
import Button from './Button/Button';
import About from './Section-two/About';

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
      <div className="hero-section">
        <Navbar />
        <Circle />
        <img className="star" src="/Star.png" alt="" />
        <div></div>
        <div
          style={{
            background: "linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
            width: "12.5rem",
            height: "12.5rem",
            borderRadius: "50%",
            boxShadow: "inset 1.02px 2.04px 51px #001D6E",
            position: "absolute",
            top: "14.43rem",
          }}
        ></div>
        <h1 className="header">
          Turn your best customers into <span> Loyal fans</span>
        </h1>
        <img className="star-two" src="/public/Star.png" alt="" />
        <p className="description">
          Get ready to revolutionize the way you interact with your customers
          and drive sales with Loyalbaze. Join the waiting list now to be among
          the first to experience the future of customer loyalty.
        </p>
        <img className="arrow" src="/arrow.png" alt="" />
      <div
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
      <Input />
      <Input />
      <Button className="second-button" label="Get early access" />
      <div className="absolute flex items-center justify-center top-[50rem] m-auto left-[35rem]">
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
            }}
            >
            {list.initial}
          </div>
        ))}
        <p className="ml-[1rem]">+57 joined</p>
      </div>
      <img className="star-three" src="/public/Star.png" alt="" />
      <img className="star-four" src="/public/Star.png" alt="" />
        </div>
        <About/>
    </section>
  );
}

export default App
