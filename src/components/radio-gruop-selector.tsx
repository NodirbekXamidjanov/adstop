import {
    Field,
    FieldContent,
    FieldDescription,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Megaphone, ShieldCheck } from "lucide-react"

interface RadioGroupChoiceCardProps {
    onValueChange: (val: string) => void
}

export function RadioGroupChoiceCard({ onValueChange }: RadioGroupChoiceCardProps) {
    return (
        <RadioGroup onValueChange={onValueChange} className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
            <FieldLabel htmlFor="advertiser-plan" className="bg-white flex-1">
                <Field orientation="horizontal">
                    <FieldContent>
                        <Megaphone className="w-6 h-6 text-[#070707] mb-4" />
                        <FieldTitle>I'm an Advertiser</FieldTitle>
                        <FieldDescription>
                            I want to promote my product
                        </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="advertiser" id="advertiser-plan" />
                </Field>
            </FieldLabel>
            <FieldLabel htmlFor="influncer-plan" className="flex-1">
                <Field orientation="horizontal">
                    <FieldContent>
                        <ShieldCheck className="w-6 h-6 text-[#070707] mb-4" />
                        <FieldTitle>I'm an Influncer</FieldTitle>
                        <FieldDescription>I want to collaborate with brands</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="influncer" id="influncer-plan" />
                </Field>
            </FieldLabel>
        </RadioGroup>
    )
}
// import {
//     Field,
//     FieldContent,
//     FieldDescription,
//     FieldLabel,
//     FieldTitle,
// } from "@/components/ui/field"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Megaphone, ShieldCheck } from "lucide-react"

// export function RadioGroupChoiceCard() {
//     return (
//         <RadioGroup
//             defaultValue="advertiser"
//             className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl"
//         >
//             {/* Advertiser */}
//             <FieldLabel htmlFor="advertiser-plan" className="cursor-pointer">
//                 <Field orientation="horizontal" className="bg-white rounded-2xl p-6 shadow-sm border border-transparent hover:border-gray-300 transition-all h-full">
//                     <FieldContent className="flex flex-col gap-3">
//                         <Megaphone className="w-6 h-6 text-gray-700" />
//                         <div>
//                             <FieldTitle className="text-base font-semibold">I'm an Advertiser</FieldTitle>
//                             <FieldDescription className="text-sm text-[#8d8d91]">
//                                 I want to promote my product
//                             </FieldDescription>
//                         </div>
//                     </FieldContent>
//                     <RadioGroupItem value="advertiser" id="advertiser-plan" className="self-start mt-1" />
//                 </Field>
//             </FieldLabel>

//             {/* Influencer */}
//             <FieldLabel htmlFor="influencer-plan" className="cursor-pointer">
//                 <Field orientation="horizontal" className="bg-white rounded-2xl p-6 shadow-sm border border-transparent hover:border-gray-300 transition-all h-full">
//                     <FieldContent className="flex flex-col gap-3">
//                         <ShieldCheck className="w-6 h-6 text-gray-700" />
//                         <div>
//                             <FieldTitle className="text-base font-semibold">I'm an Influencer</FieldTitle>
//                             <FieldDescription className="text-sm text-[#8d8d91]">
//                                 I want to collaborate with brands
//                             </FieldDescription>
//                         </div>
//                     </FieldContent>
//                     <RadioGroupItem value="influencer" id="influencer-plan" className="self-start mt-1" />
//                 </Field>
//             </FieldLabel>
//         </RadioGroup>
//     )
// }