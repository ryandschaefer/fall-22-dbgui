import { Home, Login, Dashboard, TestSearchBars, NotFound, Profile, ChannelSearch } from "../components/pages";
import { Community, Comments} from "../components/pages/channel";

import { Home, Login, Dashboard, TestSearchBars, NotFound, Profile, ChannelSearch } from "../components/pages";

export const AllRoutes = () => [
    { path: "", element: <Home/> },
    { path: "/login", element: <Login/> },
    { path: "/channel/:channelId", element: <Community/> },
    { path: "/channel/:channelId/post/:postId", element: <Comments/> },
    { path: "/dashboard", element: <Dashboard/> },
    { path: "/TestSearchBars", element: <TestSearchBars/> },
    { path: "/profile", element: <Profile/> },
    { path: "/channel-search/:search", element: <ChannelSearch/> },
    { path: "*", element: <NotFound/> }
]