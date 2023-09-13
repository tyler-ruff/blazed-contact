<script setup lang="ts">
    import { reactive } from 'vue';
    import * as Ably from 'ably';
    useHead({
        title: "Live Chat"
    });
    //Move Ably API calls to /server/api and /middleware
    /*
    console.log(process.env.ablyAPIKey);
    let options: Ably.Types.ClientOptions = { key: process.env.ablyAPIKey };
    let client = new Ably.Realtime(options); 
    let channel = client.channels.get('feed'); 
    */
    //Publish to channel
    //channel.publish('greeting', 'Hello World!');
    //Subscribe to a channel
    /*
    channel.subscribe((message: { name: any; data: any; }) => {
        messageFeed.messages.push({
            name: message.name,
            data: message.data
        })
        //message.name; // 'greeting'
        //message.data; // 'Hello World!'
    });
    */
    //Querying the History
    /*
    channel.history((err: any, messagesPage: { items: Message[]; } | undefined) => {
        if(messagesPage != undefined){
        messageFeed.messages = messagesPage.items as Message[];
        }
        /*
        messagesPage                                    // PaginatedResult
        messagesPage.items                              // array of Message
        messagesPage.items[0].data                      // payload for first message
        messagesPage.items.length                       // number of messages in the current page of history
        messagesPage.hasNext()                          // true if there are further pages
        messagesPage.isLast()                           // true if this page is the last page
        messagesPage.next(function(nextPage) { ... });  // retrieves the next page as PaginatedResult
    
    }, );
    */
</script>
<template>
    <div>
        <ul>
            <li>
                Under Construction!
            </li>
        </ul>
        <textarea></textarea>
    </div>
</template>