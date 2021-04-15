import React from 'react';
import { Redirect } from "react-router-dom";

const Mine = React.lazy(() => import("@/pages/mine"));
const Discover = React.lazy(() => import("@/pages/discover"));
const Friend = React.lazy(() => import("@/pages/friend"));

const Recommend = React.lazy(() => import("../pages/discover/child-pages/recommend"));
const Ranking = React.lazy(() => import("../pages/discover/child-pages/ranking"));
const Songs = React.lazy(() => import("../pages/discover/child-pages/songs"));
const Djradio = React.lazy(() => import("../pages/discover/child-pages/djradio"));
const Artist = React.lazy(() => import("../pages/discover/child-pages/artist"));
const Album = React.lazy(() => import("../pages/discover/child-pages/album"));

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
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      }
    ]
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