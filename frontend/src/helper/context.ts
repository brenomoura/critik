import { createContext } from "react";
import IPendingProductItem from "../types/pendingProductItemInterface";
import IPendingReportItem from "../types/pendingReportItemInterface";

interface ProductModalFormContextProps {
    setApproveModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    setDeclineModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedPendingProduct: React.Dispatch<React.SetStateAction<IPendingProductItem | null>>
}

export const ProductModalFormContext = createContext<ProductModalFormContextProps>({
    setApproveModalOpened: () => {},
    setDeclineModalOpened: () => {},
    setSelectedPendingProduct: () => {},
});

interface ReportModalFormContextProps {
    setApproveModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    setDeclineModalOpened: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedPendingReport: React.Dispatch<React.SetStateAction<IPendingReportItem | null>>
}

export const ReportModalFormContext = createContext<ReportModalFormContextProps>({
    setApproveModalOpened: () => {},
    setDeclineModalOpened: () => {},
    setSelectedPendingReport: () => {},
});