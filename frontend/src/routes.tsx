import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import ProductApproval from "./pages/ProductApproval"
import ProductDetails from "./pages/ProductDetails"
import ProductDiscussions from "./pages/ProductDiscussions"
import ProductFormPage from "./pages/ProductFormPage"
import Rankings from "./pages/Rankings"
import UserProfile from "./pages/UserProfile"
import ViolationReports from "./pages/ViolationReports"
import ProductDiscussionThread from "./pages/ProductDiscussionThread"


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
        path: "/product/:productId/discussions",
        element: <ProductDiscussions />
    },
    {
        path: "/product/:productId/discussions/:discussionId",
        element: <ProductDiscussionThread />
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
        path: "/admin",
        children: [
            {
                path: "products",
                element: <ProductApproval />
            },
            {
                path: "product/add",
                element: <ProductFormPage />
            },
            {
                path: "violation-reports",
                element: <ViolationReports />
            },
        ],
    },
])
