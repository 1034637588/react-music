import { Redirect } from "react-router-dom";

import Mine from '@/pages/mine';
import Discover from '@/pages/discover';
import Friend from '@/pages/friend';

import Recommend from "../pages/discover/child-pages/recommend";
import Ranking from "../pages/discover/child-pages/ranking";
import Songs from "../pages/discover/child-pages/songs";
import Djradio from "../pages/discover/child-pages/djradio";
import Artist from "../pages/discover/child-pages/artist";
import Album from "../pages/discover/child-pages/album";
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