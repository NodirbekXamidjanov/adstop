import { LoginFormAdvRegistration } from "@/components/login-form-advertiser-registration";
import { Button } from "@/components/ui/button";
import type React from "react";
import { useNavigate } from "react-router";

export const CreateAdvAccount: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className=" flex flex-col items-center">


            <div className="w-full m-auto px-5 flex justify-between items-center border-b">
                <div className="w-30">
                    <img src="/image.png" alt="" />
                </div>
                <p className="text-[#8d8d91] text-[14px] font-normal hidden md:block ">Advertiser Registration</p>
                <div className="flex items-center">
                    <p className="text-[#8d8d91] text-[12px] font-normal hidden md:block ">Already have an account?</p>
                    <Button variant={'link'} className="w-15 text-[14px]" onClick={() => navigate("/login")}>Login</Button>
                </div>
            </div>
            <span className="text-[12px] relative left-27 mt-2 font-normal text-[#8d8d91]">
                STEP 2 OF 2
            </span>
            <div className="w-full max-w-sm">
                <LoginFormAdvRegistration />

            </div>
        </div>
    )
}