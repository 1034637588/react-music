import { Redirect } from "react-router-dom";

import Mine from '@/pages/mine';
import Discover from '@/pages/discover';
import Friend from '@/pages/friend';


const routers = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: '/discover',
        exact: true,
        component: Discover
    },
    {
        path: '/mine',
        exact: true,
        component: Mine
    },
    {
        path: '/friend',
        exact: true,
        component: Friend
    }
];

export default routers;