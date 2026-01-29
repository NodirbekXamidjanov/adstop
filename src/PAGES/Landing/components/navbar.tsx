import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <>
      <div className="px-6 font-google">
        <div className="py-2 relative flex justify-between items-center border-b">
          <h1 className="font-bold">AdsTop</h1>
          <ul className="hidden md:flex items-center gap-8 text-[#4b5563] font-medium">
            <li>
              <a href="#">How it Works?</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
          <div className="flex gap-4 items-center">
            <a href="#" className="text-[#4b5563] font-medium">Log In</a>
            <Button variant={"default"} className="rounded-[60px]">Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
}
