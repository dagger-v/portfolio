import "./Home.css";

const Home = () => {
  const name = "Dagger";
  return (
    <div className="home__content">
      <span>Hello, I'm {name}</span>
      <span>A Front End Developer</span>
    </div>
  );
};
export default Home;
