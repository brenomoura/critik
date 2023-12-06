import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import ProductApproval from "./pages/ProductApproval"
import ProductDetails from "./pages/ProductDetails"
import ProductDiscussions from "./pages/ProductDiscussions"
import ProductFormPage from "./pages/ProductFormPage"
import Rankings from "./pages/Rankings"
import SearchResults from "./pages/SearchResults"
import UserProfile from "./pages/UserProfile"
import ViolationReports from "./pages/ViolationReports"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/product/:productId",
        element: <ProductDetails />
    },
    {
        path: "/product/:id/discussion",
        element: <ProductDiscussions />
    },
    {
        path: "/rankings",
        element: <Rankings />
    },
    {
        path: "/profile/:profileId",
        element: <UserProfile />
    },
    {
        path: "/search",
        element: <SearchResults />
    },
    {
        path: "/admin/products",
        element: <ProductApproval />
    },
    {
        path: "/admin/product/add",
        element: <ProductFormPage />
    },
    {
        path: "/admin/violation-reports",
        element: <ViolationReports />
    },
])
