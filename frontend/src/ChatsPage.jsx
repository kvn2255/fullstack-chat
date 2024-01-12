

import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) =>{
    return (
        <div style ={{height: '100vh'}}>
           <PrettyChatWindow
                projectId={"576efc04-31ed-4ab4-86ff-8b901be57afc"}
                username= {props.user.username}
                secret= {props.user.secret}
                style={{ height: '100%' }}
         />

        </div>
    )
}

export default ChatsPage