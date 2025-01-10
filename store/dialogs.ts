import {create} from 'zustand'

type DialogsState = {
    signIn: boolean
    setDialogs: (value: Partial<DialogsState>) => void
}

export const useDialogsStore = create<DialogsState>((set) => ({
    signIn: false,
    setDialogs: (value) => set((state) => ({ ...state, ...value }))
}))
