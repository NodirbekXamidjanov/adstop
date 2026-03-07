import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router"
import { SelectDemo } from "./selectDemo"
import { Button } from "./ui/button"
import { ArrowRight, Lock } from "lucide-react"
import { useState } from "react" // ✅ QOSHILDI
import { useAuth } from "@/context/authContext/registerContext" // ✅ QOSHILDI

// ✅ QOSHILDI: Form data interface
interface FinishSetupFormData {
  contentCategory: string
  notificationEmail: string
  country: string
}

export function LoginFormFinishSetup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate()
  const { updateRegisterData, completeRegister } = useAuth() // ✅ QOSHILDI

  // ✅ QOSHILDI: formData state
  const [formData, setFormData] = useState<FinishSetupFormData>({
    contentCategory: "",
    notificationEmail: "",
    country: "",
  })

  // ✅ QOSHILDI: input handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // ✅ QOSHILDI: submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mapped = {
      contentCategory: formData.contentCategory,
      notificationEmail: formData.notificationEmail,
      country: formData.country,
    }

    updateRegisterData(mapped)
    completeRegister(mapped) // ✅ localStorage ga saqlaydi
    navigate("/dashboard")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Finish setup</CardTitle>
          <CardDescription className="text-[14px]">
            Complete your profile to start matching with brands.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* ✅ OZGARDI: onSubmit qoshildi */}
          <form onSubmit={handleSubmit}>
            <FieldGroup>

              <Field>
                <FieldLabel>Content Category</FieldLabel>
                {/* ✅ OZGARDI: name, value, onChange qoshildi */}
                <Input
                  name="contentCategory"
                  type="text"
                  value={formData.contentCategory}
                  onChange={handleChange}
                  placeholder="Avto Blogging"
                  required
                />
              </Field>

              <Field>
                <FieldLabel>Notification Email</FieldLabel>
                {/* ✅ OZGARDI: name, value, onChange qoshildi */}
                <Input
                  name="notificationEmail"
                  type="email"
                  value={formData.notificationEmail}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                />
                <p className="text-[#86868b] text-[12px]">We'll send campaign requests to this address</p>
              </Field>

              <Field>
                <FieldLabel>Country</FieldLabel>
                {/* ✅ OZGARDI: onValueChange qoshildi */}
                <SelectDemo
                  options={["Uzbekistan", "Russian", "USA", "Kyrgyzstan", "Other"]}
                  onValueChange={(val) => setFormData(prev => ({ ...prev, country: val }))}
                />
              </Field>

              {/* ✅ OZGARDI: onClick olib tashlandi, type="submit" qoldi */}
              <Button type="submit" className="h-10 rounded-[15px]">
                Create Account <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-[11px] gap-2 ml-18 flex items-center text-gray-400 leading-relaxed">
                <Lock size={16} />Your data is encrypted and secure.
              </p>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}