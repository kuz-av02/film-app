'use client'

import Button from "@/components/Button/Button";
import * as Style from "./index.styled";
import React, {useEffect, useState} from "react";


export default function Comments(props: {PersonKey: number}){

    const [comments, setComments] = useState<CommentData[]>([])
    const [newComment, setNewComment] = useState<string>("")
    const [isSend, setIsSend] = useState<boolean>(true)


    const commentsStorageKey = `comments-` + String(props.PersonKey)
    useEffect(() => {
        if (isSend){
            const storageComments = localStorage.getItem(commentsStorageKey)
            if (storageComments == null) {
                setComments([])
            }
            else {
                setComments(JSON.parse(storageComments))
            }
            setIsSend(false)
        }
    }, [isSend, props.PersonKey])

    const onCommentDelete = (id: string) => {
        const newComments: CommentData[] = comments.filter(com => com.name !== id)
        localStorage.setItem(commentsStorageKey, JSON.stringify(newComments))
        // clear input field
        setNewComment("")
        // set flag to load comments from localstorage
        setIsSend(true)
        // setComments(newComments)
    }

    const onCommentSend = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        if (newComment.length > 0) {
            const newComments: CommentData[] = comments
            newComments.push({
                name: `Пользователь ${comments.length + 1}`,
                text: newComment
            })
            localStorage.setItem(commentsStorageKey, JSON.stringify(newComments))
            // clear input field
            setNewComment("")
            // set flag to load comments from localstorage
            setIsSend(true)
            // setComments(newComments)
        }

    }

    return (
        <Style.Comments>
            {comments.map(c => (
                <Comment
                    key={c.name} {...c}
                    deleteHandler={onCommentDelete}
                />

            ))}
            <Style.Form onSubmit={onCommentSend}>
                <Style.Input
                    placeholder={'Что вы думаете о фильме'}
                    value={newComment}
                    onChange={(current) => setNewComment(current.target.value)}
                >

                </Style.Input>
                <Button
                    // type='submit'
                    name='send'
                    action={() => console.log('a')}
                />
            </Style.Form>
        </Style.Comments>
    )
}

interface CommentData {
    name: string,
    text: string,
}

interface CommentProps extends CommentData{
    deleteHandler: (id: string) => void
}

const Comment = (props: CommentProps)=> {
    return (
        <Style.Comment>
            <Style.DeleteButton
                onClick={() => props.deleteHandler(props.name)}
            >
                delete
            </Style.DeleteButton>
            <Style.Text>
                {props.text}
            </Style.Text>
            <Style.User>
                <Style.MainImg src="https://static.vecteezy.com/system/resources/previews/003/065/406/original/flat-design-concept-cinema-icon-free-vector.jpg"></Style.MainImg>
                <Style.Name>
                    {props.name}
                </Style.Name>
            </Style.User>

        </Style.Comment>
    )
}