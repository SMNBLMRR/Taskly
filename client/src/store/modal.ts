import { create } from "zustand";

export interface ModalStoreInterface {
    isOpen:boolean,
    setIsOpen:(value:boolean) => void,
}

const modalStore = create<ModalStoreInterface>((set) => ({
    isOpen:false,
    setIsOpen: (value:boolean) => set({isOpen:value}),
}))

export default modalStore