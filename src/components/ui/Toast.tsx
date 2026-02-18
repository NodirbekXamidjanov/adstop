// Toast xabarnoma komponenti — ekranning pastida chiqadi

interface ToastProps {
  message: string
  onClose: () => void
}

export default function Toast({ message, onClose }: ToastProps) {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5
                 bg-zinc-900 text-white px-4 py-3 rounded-xl text-sm font-medium
                 shadow-lg animate-[fadeIn_0.2s_ease]"
      onClick={onClose}
    >
      <span className="text-green-400">✓</span>
      {message}
    </div>
  )
}