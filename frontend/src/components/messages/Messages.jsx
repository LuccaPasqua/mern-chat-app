import { useEffect, useRef } from "react"
import { useGetMessage } from "../../hooks/useGetMessages"
import { MessageSkeleton } from "../skeletons/Message.skeleton"
import { Message } from "./Message.jsx"
import { useListenMessages } from "../../hooks/useListenMessage.js";

export function Messages(){
   const {messages, loading} = useGetMessage();
   useListenMessages();
   const lastMessageRef = useRef();

   useEffect(() => {
      setTimeout(() => {
         lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
      }, [100]);
   }, [messages])
   

   return(
      <div className="px-4 flex-1 overflow-auto">
         {!loading && messages.length > 0 && messages.map((message) => (
            <div key={message._id}
               ref={lastMessageRef}
            >
               <Message  message={message}/>
            </div>
         ))}
      
         {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx}/>)}

         {!loading && messages.length === 0 && (
            <p className="text-center">Send a message to start the conversation</p>
         )}
      </div>
   )
}