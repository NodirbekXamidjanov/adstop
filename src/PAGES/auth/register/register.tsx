import { RadioGroupChoiceCard } from "@/components/radio-gruop-selector"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/authContext/registerContext"
import { ArrowRight } from "lucide-react"
import React, { useState } from "react"
import { useNavigate } from "react-router" // ✅ OZGARDI: Outlet olib tashlandi (ishlatilmagan)

export const Register: React.FC = () => {
    const navigate = useNavigate()
    const [role, setRole] = useState<string>("")
    const { updateRegisterData } = useAuth() // ✅ OZGARDI: user olib tashlandi (ishlatilmagan)

    const handleSelectRole = (selectedRole: string) => {
        // ✅ OZGARDI: updateRegisterData ga ham beramiz, navigate ga ham to'g'ridan ishlatamiz
        updateRegisterData({ role: selectedRole })
        navigate(`/register/${selectedRole}`)
    }

    return (
        <>
            <div>
                <div className="w-[90%] m-auto flex justify-between items-center">
                    <div className="w-30 cursor-pointer" onClick={() => navigate("/")}>
                        <img src="/image.png" alt="" />
                    </div>
                    <div className="flex items-center">
                        <p className="text-[#8d8d91] text-[12px] font-normal hidden md:block">Already have an account?</p>
                        <Button variant={'link'} className="w-15 text-[14px]" onClick={() => navigate("/login")}>Login</Button>
                    </div>
                </div>

                <div className="w-full bg-[#f5f5f7]">
                    <div className="flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-16">
                        <span className="text-xs font-medium tracking-widest text-[#8d8d91] border border-[#d1d1d6] rounded-full px-4 py-1 mb-6 bg-white">
                            STEP 1 OF 2
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
                            Get started with AdsTop
                        </h1>
                        <p className="text-[#8d8d91] mb-10 text-center">
                            Choose how you want to use AdsTop
                        </p>
                        <RadioGroupChoiceCard onValueChange={setRole} />
                    </div>

                    <div className="w-[90%] flex justify-end m-auto pb-4 md:pb-30">
                        {/* ✅ OZGARDI: role ni to'g'ridan handleSelectRole ga beramiz */}
                        <Button disabled={!role} onClick={() => handleSelectRole(role)}>
                            Continue <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="w-[90%] m-auto flex justify-between items-center py-4 text-xs text-[#8d8d91]">
                    <span>© 2024 AdsTop Inc. All rights reserved.</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:underline">Privacy</a>
                        <a href="#" className="hover:underline">Terms</a>
                        <a href="#" className="hover:underline">Help</a>
                    </div>
                </div>
            </div>
        </>
    )
}