import { ReactNode } from 'react'

export type StoreProviderProps = {
  children: ReactNode
}

export type UseStoreDataReturn<Store> = {
  get: () => Store
  set: (value: Partial<Store>) => void
  subscribe: (callback: () => void) => () => boolean
}

export type UseStoreContextData<Store, SelectorOutput> = [
  SelectorOutput,
  (value: Partial<Store>) => void,
]

export type UseStoreSelector<Store, SelectorOutput> = (store: Store) => SelectorOutput
