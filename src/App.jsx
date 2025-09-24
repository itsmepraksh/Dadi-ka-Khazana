import Nav from "./components/Nav"
import MainRoutes from "./routes/MainRoutes" 

 

const App = () => {
  return (
    <div className="bg-zinc-800 min-h-screen w-full text-white relative">
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App