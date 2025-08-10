import { Navigate } from 'react-router';

import { createBrowserRouter } from "react-router";

import { AuthPage } from '@/pages/authPage/ui/AuthPage';


export const router = createBrowserRouter([
  { path: "/auth", element: <AuthPage /> },
  { path: '*', element: <Navigate to='/auth' replace/>}
]);
