import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="flex h-[80vh] items-center justify-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to LabMate
        </h1>
      </div>
    </>
  );
}

export default Home;