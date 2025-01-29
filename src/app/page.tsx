import Landing from "@/components/Landing/landing";
import Footer from "../components/Footer/footer";
import Navbar from "../components/NavBar/navbar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
  );
}
