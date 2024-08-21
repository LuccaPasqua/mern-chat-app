import {Conversation} from './Conversation';
import { useGetConversations} from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

export function Conversations(){
  const {loading, conversations} = useGetConversations();

   return(
      <div className="py-2 flex flex-col overflow-auto">
         {conversations.map((conversation, idx) => {
            return(
               <Conversation 
                  key={conversation._id}
                  conversation={conversation}
                  emoji={getRandomEmoji()}
                  lastIndex={idx === conversations.length - 1}
               />
            )

         })}
         {loading ?
            <span className="loading loading-spinner mx-auto"></span>
            : null
         }

      </div>
   )
}

//STARTER CODE FOR THIS FILE
// {
  
  
//    return(
//       <div className="py-2 flex flex-col overflow-auto">
//          <Conversation />
//          <Conversation />
//          <Conversation />
//          <Conversation />

//       </div>
//    )
// }