import { useRef, createContext, useContext, useCallback, useSyncExternalStore } from 'react'

import {
  StoreProviderProps,
  UseStoreContextData,
  UseStoreDataReturn,
  UseStoreSelector,
} from './types'

export default function createFastContext<Store>(initialState: Store) {
  function useStoreData() {
    const store = useRef(initialState)
    const get = useCallback(() => store.current, [])
    const subscribers = useRef(new Set<() => void>())
    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value }
      subscribers.current.forEach((callback) => callback())
    }, [])
    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback)
      return () => subscribers.current.delete(callback)
    }, [])
    return { get, set, subscribe }
  }

  const StoreContext = createContext<UseStoreDataReturn<Store> | null>(null)

  function StoreProvider(props: StoreProviderProps) {
    const { children } = props
    return <StoreContext.Provider value={useStoreData()}>{children}</StoreContext.Provider>
  }

  function useStore<SelectorOutput>(
    selector: UseStoreSelector<Store, SelectorOutput>,
  ): UseStoreContextData<Store, SelectorOutput> {
    const store = useContext(StoreContext)
    if (!store) {
      throw new Error('Store not found')
    }
    const state = useSyncExternalStore(store.subscribe, () => selector(store.get()))
    return [state, store.set]
  }

  return [useStore, StoreProvider]
}
