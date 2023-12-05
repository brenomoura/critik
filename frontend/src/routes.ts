export const routes = [
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
]

export const adminRoutes = [
    {
        path: "admin/products",
        element: <ProductManagement />
    },
    {
        path: "admin/product/add",
        element: <AddProduct />
    },
    {
        path: "admin/violation-reports",
        element: <ViolationReports />
    },
]