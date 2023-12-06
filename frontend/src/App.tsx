import { RouterProvider } from "react-router-dom";
import { adminRouter, router } from './routes';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
