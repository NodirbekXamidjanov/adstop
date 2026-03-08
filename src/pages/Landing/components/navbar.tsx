import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <div className="px-6 font-google">
        <div className="py-2 relative flex justify-between items-center border-b">
          <h1 className="font-bold" onClick={() => navigate("/")}>AdsTop</h1>
          <ul className="hidden md:flex items-center gap-8 text-[#4b5563] font-medium">
            <li>
              <a href="#work">How it Works?</a>
            </li>
            <li>
              <a href="#hero">Solutions</a>
            </li>
            <li>
              <a href="#service">Pricing</a>
            </li>
          </ul>
          <div className="flex gap-4 items-center">
            <a href="#" className="text-[#4b5563] font-medium" onClick={() => navigate("/login")}>Log In</a>
            <Button variant={"default"} className="rounded-[60px]" onClick={() => navigate("/register")}>Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
}
