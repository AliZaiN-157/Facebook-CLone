import React from 'react'
import Story from './Story'
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://images.app.goo.gl/7vsXput3LgLnkN7d7"
                profileSrc="./download.jpg"
                title="Ali Zain" />
            <Story
                image="https://images.app.goo.gl/7vsXput3LgLnkN7d7"
                profileSrc="https://avatars2.githubusercontent.com/u/51964332?s=400&u=9dcac2f7e27ed34fd73b5587d60b564041bd54dc&v=4"
                title="Elon Musk" />
        </div>
    )
}

export default StoryReel;
