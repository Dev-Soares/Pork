import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@/shared/hooks/useUser'

export default function ProtectedRoute() {
  const { isLogged, loading } = useUser()

  if (loading) return null

  return isLogged ? <Outlet /> : <Navigate to="/login" replace />
}
