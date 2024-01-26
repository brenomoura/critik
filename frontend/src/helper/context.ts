import { createContext } from "react";
import IPendingProductItem from "../types/pendingProductItemInterface";

interface ModalFormContextProps {
    setApproveModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    setDeclineModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedPendingProduct: React.Dispatch<React.SetStateAction<IPendingProductItem | null>>
}

export const ModalFormContext = createContext<ModalFormContextProps>({
    setApproveModalOpened: () => {},
    setDeclineModalOpened: () => {},
    setSelectedPendingProduct: () => {},
});