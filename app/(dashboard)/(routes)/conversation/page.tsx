'use client'

import Heading from '@/components/heading'
import * as z from 'zod'
import { Form, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { formSchema } from "./constants"
import React, { useState } from 'react'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation"
import OpenAI from "openai";
import axios from 'axios'
import { ChatCompletionMessage } from 'openai/resources/chat'
import Empty from '@/components/empty'
import Loader from '@/components/loader'
import { cn } from '@/lib/utils'
import UserAvatar from '@/components/user-avatar'
import BotAvatar from '@/components/bot-avatar'


const ConversationPage = () => {
  
    const openai = new OpenAI();

    const router = useRouter()
    const [messages , setMessages] = useState<ChatCompletionMessage[]>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        const userMessage: ChatCompletionMessage = {
          role: 'user',
          content: values.prompt
        }

        const newMessages = [...messages , userMessage]

        const response = await axios.post("/api/conversation" , {
          messages: newMessages
        })

        setMessages((current) => [...current , userMessage , response.data])

        form.reset()
      } catch (error) {
        //Todo
        console.log(error)
      } finally {
        router.refresh()
      }
    }

  return (
    <div>
      <Heading 
        title='Conversation'
        description="Our most advanced conversation model"
        icon={ChatBubbleIcon}
        iconColor='text-violet-500'
        bg-color="bg-violet-500/10"
      />

        <div className='px-4 lg:px-8' >
          <div>
            <Form {...form} >
              <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 '
              >
                <FormField
                  name='prompt'
                  render={({ field }) => (
                    <FormItem  className='col-span-12 lg:col-span-10'>
                        <FormControl className='m-0 p-0' >
                            <Input 
                              className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent '
                              disabled={isLoading}
                              placeholder='How do I calculate the radius of a circle?'
                              {...field}
                            />
                        </FormControl>
                    </FormItem>
                  )}
                />
                <Button className='col-span-12 lg:col-span-2 w-full' disabled={isLoading} >
                  Generate
                </Button>
              </form>
            </Form>
            </div>
            <div className='space-y-4 mt-4' >
                {isLoading && (
                  <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted' >
                      <Loader />
                  </div>
                )}
                {messages.length === 0 && !isLoading && (
                  <Empty label="Start a conversation." />
                )}
                <div className='flex flex-col-reverse gap-y-4 ' >
                  {messages.map((message) => (
                    <div 
                      key={message.content}
                      className={cn('p-8 w-full flex items-start gap-x-8 rounded-lg' , 
                        message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                      )}  
                    >
                        {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                        {message.content}
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConversationPage
