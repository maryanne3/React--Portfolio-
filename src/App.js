import Header from "./components/Header";
import Routes from "./components/Routes";


function App() {
  const personalDetails = {
    name: "Maryan.A",
    location: "United Kingdom",
    email: "maryanne@outlook.com",
    availability: "For Hire!",
  };

  return (
    <>
      <Header />
      <Routes personalDetails={personalDetails} />
    </>
  );
}



export default App;