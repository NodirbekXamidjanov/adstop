import { LoginFormFinishSetup } from "@/components/finish-setup-login-form"

export const FinishSetupInfRegister: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-between w-full bg-white absolute border border-b top-0 px-[2%]">
                <div className="w-30"> <img src="/image.png" alt="" /></div>
                <a href="#" className="text-[#8d8d91] hover:underline text-[12px] font-normal">Need help?</a>
            </div>
            <div className="w-full max-w-sm mt-12" >
                <LoginFormFinishSetup />
            </div>

            <span className="mb-5 mt-25 md:mt-18 text-[11px] text-center text-gray-400 leading-relaxed">© 2024 AdsTop Inc. All rights reserved.</span>

        </div>
    )
}