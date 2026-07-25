import { createContext } from 'react'
import type { User } from '@/modules/profile/types/user'

export interface UserContextValue {
  user: User | null
  loading: boolean
  isLogged: boolean
  refreshUser: () => Promise<void>
}

export const UserContext = createContext<UserContextValue | null>(null)
