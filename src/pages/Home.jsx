import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="py-5 pl-5">
      <section
        id="hero-section"
        className=" h-[70vh] overflow-hidden bg-cover bg-bottom rounded-2xl bg-[url('https://images.unsplash.com/photo-1736866694970-4a9aa67e94f1?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      >
        <div id="blur-bg" className="bg-black/20 flex h-full w-full">
          <div id="hero-data" className="mt-auto pl-5 py-5 ">
            <h1 className="text-4xl font-bold">Welcome to <br />Dadi ka Khazana</h1>
            <p className="py-4 text-lg font-medium">Discover and share delicious recipes from around the world.</p>
            <div id="hero-cta-btn" className="flex gap-2">
              <button className="bg-red-400 w-65 py-3 text-lg font-medium rounded-xl active:scale-[0.98] transition">Explore Recipes</button>
              <FontAwesomeIcon onClick={()=>navigate('/create_recipe')} icon={faPlus} className="bg-zinc-300/30 p-4 rounded-xl active:scale-[0.95] transition" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
