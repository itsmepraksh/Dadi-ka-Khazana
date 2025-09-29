import Footer from "./components/Footer"
import Nav from "./components/Nav"
import MainRoutes from "./routes/MainRoutes" 

 

const App = () => {
  return (
    <div className=" bg-zinc-800 min-h-screen w-full text-white relative font-['GilroyMedium']">
      <Nav/>
      <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default App