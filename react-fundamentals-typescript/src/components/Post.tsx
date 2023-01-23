import styles from './Post.module.css'
import {Comment} from './Comment'
import { Avatar } from './Avatar'

import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post(props:PostProps){
    const [comments, setComments] = useState([
        "Post muito legal ein"
      
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
       
    })
    const isNewCommentEmpty = newCommentText.length == 0;

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
         setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                
                    src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>
                            {props.author.name}
                        </strong>
                        <span>
                            {props.author.role}
                        </span>
                    </div>
                </div> 
                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
               {props.content.map(line=>{
                if(line.type=='paragraph'){
                    return <p key={line.content}>{line.content}</p>
                } else if(line.type=='link'){
                    return <p key={line.content}><a href='#'>{line.content}</a></p>
                }
               })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                name="comment" 
                placeholder="Deixe um comentário" 
                value={newCommentText} 
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />
                <footer>
                <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
               
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
               })}
            </div>
        </article>
    )

}
