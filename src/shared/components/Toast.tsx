import toast from 'react-hot-toast'
import {
  CheckCircleIcon,
  XCircleIcon,
  WarningIcon,
  InfoIcon,
} from '@phosphor-icons/react'
import CustomToast from './CustomToast'

export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export interface NotifyOptions {
  description?: string
  duration?: number
}

export const variantConfig: Record<
  ToastVariant,
  {
    icon: typeof CheckCircleIcon
    accent: string
    iconBg: string
    iconColor: string
    barColor: string
  }
> = {
  success: {
    icon: CheckCircleIcon,
    accent: 'border-brand/30',
    iconBg: 'bg-brand/15',
    iconColor: 'text-brand',
    barColor: 'bg-brand',
  },
  error: {
    icon: XCircleIcon,
    accent: 'border-red-500/30',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
    barColor: 'bg-red-500',
  },
  warning: {
    icon: WarningIcon,
    accent: 'border-amber-500/30',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    barColor: 'bg-amber-500',
  },
  info: {
    icon: InfoIcon,
    accent: 'border-sky-500/30',
    iconBg: 'bg-sky-500/15',
    iconColor: 'text-sky-400',
    barColor: 'bg-sky-500',
  },
}

function notify(
  variant: ToastVariant,
  title: string,
  options?: NotifyOptions,
) {
  return toast.custom(
    (t) => (
      <CustomToast
        t={t}
        variant={variant}
        title={title}
        description={options?.description}
      />
    ),
    { duration: options?.duration ?? 4000 },
  )
}

export const showToast = {
  success: (title: string, options?: NotifyOptions) =>
    notify('success', title, options),
  error: (title: string, options?: NotifyOptions) =>
    notify('error', title, options),
  warning: (title: string, options?: NotifyOptions) =>
    notify('warning', title, options),
  info: (title: string, options?: NotifyOptions) =>
    notify('info', title, options),
  dismiss: toast.dismiss,
}
