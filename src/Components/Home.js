import "./Home.css";

const Home = () => {
  const name = "Dagger";
  return (
    <main className="home__content">
      <p>
        Hello, I'm <span className="home__color">{name}</span> <br></br> A Front
        End Developer
      </p>
      <button className="home__button">About Me</button>
    </main>
  );
};
export default Home;
