import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router"
import { SelectDemo } from "./selectDemo"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/context/authContext/registerContext"

interface AdvertiserFormData {
  companyName: string
  businessCategory: string
  website: string
  country: string
  email: string
  password: string
  terms: boolean
}

export function LoginFormAdvRegistration({ className, ...props }: React.ComponentProps<"div">) {
  const navigate = useNavigate()
  const { updateRegisterData, completeRegister } = useAuth() // ✅ OZGARDI: user olib tashlandi (kerak emas)

  const [formData, setFormData] = useState<AdvertiserFormData>({
    companyName: "",
    businessCategory: "",
    website: "",
    country: "",
    email: "",
    password: "",
    terms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSelect = (name: keyof AdvertiserFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // ✅ OZGARDI: field nomlarini RegisterData ga moslashtirdik
    const mapped = {
      companyName: formData.companyName,
      businessCategory: formData.businessCategory,
      companyWebsite: formData.website,   // website → companyWebsite
      country: formData.country,
      workEmail: formData.email,          // email → workEmail
      password: formData.password,
    }

    updateRegisterData(mapped)
    completeRegister(mapped) // ✅ OZGARDI: mapped ni to'g'ridan to'g'ri beramiz

    navigate("/advertiser")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>

              <Field>
                <FieldLabel>Company / Brand name</FieldLabel>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="e.g Acme Corp"
                />
              </Field>

              <Field>
                <FieldLabel>Business Category</FieldLabel>
                <SelectDemo
                  options={["Electronics", "Fashion & Beauty", "Food & Beverage"]}
                  onValueChange={handleSelect("businessCategory")}
                />
              </Field>

              <Field>
                <FieldLabel>Company Website</FieldLabel>
                <Input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://"
                />
              </Field>

              <Field>
                <FieldLabel>Country</FieldLabel>
                <SelectDemo
                  options={["Uzbekistan", "Russia", "USA", "Kyrgyzstan"]}
                  onValueChange={handleSelect("country")}
                />
              </Field>

              <Field>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <FieldLabel>Work Email</FieldLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className="flex-1">
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="•••••••••"
                    />
                  </div>
                </div>
              </Field>

              <FieldGroup className="mx-auto">
                <Field orientation="horizontal">
                  <Checkbox
                    id="terms-checkbox-basic"
                    checked={formData.terms}
                    onCheckedChange={(checked) =>
                      setFormData(prev => ({ ...prev, terms: !!checked }))
                    }
                    required
                  />
                  <FieldLabel htmlFor="terms-checkbox-basic">
                    <p className="text-[11px] text-center text-gray-400 leading-relaxed">
                      I agree to the{" "}
                      <a href="#" className="underline underline-offset-2 text-[#090909c3]">
                        Terms of service.{" "}
                      </a> and{" "}
                      <a href="#" className="underline underline-offset-2 text-[#090909c3]">
                        Privacy Policy.
                      </a>
                    </p>
                  </FieldLabel>
                </Field>
              </FieldGroup>

              {/* ✅ OZGARDI: onClick olib tashlandi, faqat type="submit" qoldi */}
              <Button type="submit" className="h-10 rounded-[15px]">
                Create Account <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}