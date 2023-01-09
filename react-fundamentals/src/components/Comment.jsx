import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment(props){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
    props.onDeleteComment(props.content);
    }

    function handleLikeComment(){
        //sempre que for alterado um valor e seu valor anterior seja necessário 
        //usar este padrão:
        setLikeCount((state) => {
            return state + 1;
        });
    }


    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/marcus-feitosa.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcus Feitosa</strong>
                            <time title="11 de Maio às 8:13 " dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}