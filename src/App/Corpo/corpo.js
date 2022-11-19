import BottomBar from "./bottombar";
import Posts from "./Posts/posts";
import Sidebar from "./Sidebar/sidebar";
import Stories from "./Stories/stories";

export default function Corpo() {
    return (
        <div className="container-page">
            <div className="vertical">
                <Stories />
                <Posts />
                <BottomBar />
            </div>

            <Sidebar />
        </div>
    )
}