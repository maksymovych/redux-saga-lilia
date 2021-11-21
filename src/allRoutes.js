import Posts from './pages/Posts';
import About from './pages/About';
import Error from './pages/Error';
import Post from './pages/Post/Post';
import Login from './pages/Login/Login';

export const allRoutes = [
  { path: '/posts/:id', component: Post, isPrivate: true },
  { path: '/posts', component: Posts, isPrivate: true },
  { path: '/about', component: About },
  { path: '/error', component: Error },
  { path: '/login', component: Login },
];
