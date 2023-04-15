import Posts from "./components/task1/posts";
import Launches from "./components/task2/Launches";
import Users from "./components/task3/Users";
import {useState} from "react";
import UserPost from "./components/task3/UserPost";
import UserPosts from "./components/task3/UserPosts";

const App = () => {
    const  [userId, setUserId] = useState(null)
    return (
        <div>
            {/*<h1>Posts</h1>*/}
            {/*<Posts/>*/}
            {/*<Launches/>*/}
            <Users setUserId={setUserId}/>
            {userId && <UserPosts userId={userId}/>}
        </div>
    );
};

export default App;