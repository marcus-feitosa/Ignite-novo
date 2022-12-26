import styles from './Post.module.css'
import {Comment} from './Comment'
import { Avatar } from './Avatar'


export function Post(props){

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                
                    src="https://github.com/marcus-feitosa.png"/>
                    <div className={styles.authorInfo}>
                        <strong>
                            Marcus Feitosa
                        </strong>
                        <span>
                            Web Developer
                        </span>
                    </div>
                </div> 
                <time title="11 de Maio às 8:13 " dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at quo voluptatem blanditiis </p>
                <p>labore eligendi porro quae eaque, vero delectus odit laboriosam, possimus, quas magni. </p>
                <p><a href="">site.pica/muitopica</a></p>
                <p>
                    <a href="">#sitefoda</a>
                    <a href="">#testetop</a>
                    <a href="">#hexa</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"/>
                <footer>
                <button type="submit">Publicar</button>
                </footer>
               
            </form>

            <div className={styles.commentList}>
               <Comment/>
               <Comment/>
               <Comment/>
            </div>
        </article>
    )

}
