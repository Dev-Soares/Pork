import toast, { type Toast as ToastType } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { XIcon } from '@phosphor-icons/react'
import { variantConfig, type ToastVariant } from './Toast'

export interface CustomToastProps {
  t: ToastType
  variant: ToastVariant
  title: string
  description?: string
}

export default function CustomToast({ t, variant, title, description }: CustomToastProps) {
  const config = variantConfig[variant]
  const Icon = config.icon
  const duration = t.duration ?? 4000

  return (
    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.96 }}
      animate={{
        opacity: t.visible ? 1 : 0,
        y: t.visible ? 0 : -16,
        scale: t.visible ? 1 : 0.96,
      }}
      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
      className={`relative flex w-85 max-w-[calc(100vw-2rem)] items-start gap-3 overflow-hidden rounded-2xl border ${config.accent} bg-neutral-900/95 p-4 pr-10 shadow-2xl shadow-black/40 backdrop-blur-xl`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${config.iconBg}`}
      >
        <Icon size={20} weight="fill" className={config.iconColor} />
      </div>

      <div className="flex-1 pt-0.5">
        <p className="text-sm font-semibold leading-tight text-neutral-50">
          {title}
        </p>
        {description && (
          <p className="mt-1 text-xs leading-relaxed text-neutral-400">
            {description}
          </p>
        )}
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="absolute right-3 top-3 rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-200"
        aria-label="Fechar"
      >
        <XIcon size={14} weight="bold" />
      </button>

      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: duration / 1000, ease: 'linear' }}
        className={`absolute bottom-0 left-0 h-0.5 ${config.barColor}`}
      />
    </motion.div>
  )
}
