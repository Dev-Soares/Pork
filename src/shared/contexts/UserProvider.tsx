import type { ReactNode } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useFindMe, meQueryKey } from '@/shared/hooks/useFindMe'
import { UserContext } from './UserContext'

export function UserProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient()
  const { data, isLoading } = useFindMe()

  const refreshUser = async () => {
    await queryClient.invalidateQueries({ queryKey: meQueryKey })
  }

  return (
    <UserContext.Provider value={{ user: data ?? null, loading: isLoading, isLogged: !isLoading && data != null, refreshUser }}>
      {children}
    </UserContext.Provider>
  )
}
