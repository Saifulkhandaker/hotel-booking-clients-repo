import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Rooms from '../Pages/Rooms/Rooms';
import MyBookings from '../Pages/MyBookings/MyBookings';
import ErrorPage from '../Pages/ErrorPage';
import ViewDetails from '../Components/ViewDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import AboutUs from '../Pages/AboutUs/AboutUs';

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
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path:'/myBookings',
                element: <PrivateRoute>
                    <MyBookings></MyBookings>
                </PrivateRoute>
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute>
                    <ViewDetails></ViewDetails>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default myCreatedRoute;