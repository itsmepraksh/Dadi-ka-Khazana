import Nav from "./components/Nav"
import MainRoutes from "./routes/MainRoutes" 

 

const App = () => {
  return (
    <div className="bg-zinc-800 min-h-screen text-white">
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App