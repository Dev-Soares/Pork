import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="min-h-dvh flex flex-col items-center justify-center bg-[#0a0a0a] text-neutral-100 px-6 text-center">
          <p className="text-5xl mb-4">🐷</p>
          <h1 className="text-xl font-semibold mb-2">Algo deu errado</h1>
          <p className="text-sm text-neutral-500 max-w-xs mb-6">
            Encontramos um problema inesperado. Tente recarregar a página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-lg bg-brand text-neutral-950 font-semibold text-sm hover:bg-brand-light transition-colors cursor-pointer"
          >
            Recarregar
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
