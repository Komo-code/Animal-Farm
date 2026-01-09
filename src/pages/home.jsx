
import hero from "../assets/hero.png";

function Home() {
  return (
    <div className="flex md:grid-cols-2 gap-4 p-8 bg-green-100">
        <div className="flex flex-col gap-4 justify-center w-1/2 p-4 text-center">
        <div>
          <h1 className="font-bold mb-4 text-green-500 text-4xl">Welcome to <span className="text-green-900">Animal Farm</span></h1>
            <p className="text-green-650">Explore the world of animals and their stories.</p>
        </div>
        <div>
          <button className="bg-green-500 text-center text-white px-4 py-2 rounded hover:bg-green-700 w-1/3">Click here!</button>
        </div>  
      </div>
        <div className="rounded w-1/2">
            <img className="rounded-full" src={hero} alt="Hero" />
        </div>
    </div>
  );
}

export default Home;