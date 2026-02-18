import { useForm } from 'react-hook-form'
import Toast from '../../components/ui/Toast'
import { useToast } from '../../hooks/useToast'

interface SettingsForm {
  firstName: string
  lastName: string
  email: string
  companyName: string
  phone: string
}

export default function AdvertiserSettingsPage() {
  const { message, showToast, hideToast } = useToast()
  const { register, handleSubmit } = useForm<SettingsForm>({
    defaultValues: {
      firstName: 'Alex',
      lastName: 'Valiyev',
      email: 'alex@company.com',
      companyName: 'TechCorp',
      phone: '+998 90 123 45 67',
    },
  })

  function onSubmit() {
    // Backend tayyor bo'lganda:
    //   await axios.put('/api/user/profile', data)
    showToast('Sozlamalar saqlandi!')
  }

  return (
    <div>
      {message && <Toast message={message} onClose={hideToast} />}

      <div className="mb-7">
        <h2 className="text-xl font-bold">Settings</h2>
        <p className="text-sm text-zinc-500 mt-0.5">Hisob sozlamalari</p>
      </div>

      <div className="card max-w-[520px]">
        <h3 className="font-semibold mb-5">Profile Information</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">First Name</label>
              <input className="input" {...register('firstName')} />
            </div>
            <div>
              <label className="label">Last Name</label>
              <input className="input" {...register('lastName')} />
            </div>
          </div>
          <div>
            <label className="label">Email</label>
            <input className="input" type="email" {...register('email')} />
          </div>
          <div>
            <label className="label">Company Name</label>
            <input className="input" {...register('companyName')} />
          </div>
          <div>
            <label className="label">Phone</label>
            <input className="input" type="tel" {...register('phone')} />
          </div>
          <button type="submit" className="btn btn-primary btn-md">Save changes</button>
        </form>
      </div>
    </div>
  )
}
