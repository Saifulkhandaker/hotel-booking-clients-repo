import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Rooms from '../Pages/Rooms/Rooms';
import MyBookings from '../Pages/MyBookings/MyBookings';
import ErrorPage from '../Pages/ErrorPage';

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path:'/myBookings',
                element: <MyBookings></MyBookings>
            }
        ]
    }
])

export default myCreatedRoute;