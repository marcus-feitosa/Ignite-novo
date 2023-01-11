import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import "./global.css"
import styles from './App.module.css'

const posts=[{
  id: 1,
  author:{
    avatarUrl:"https://github.com/marcus-feitosa.png",
    name:"Marcus Feitosa",
    role:"Dev Junior"
  },
  content:[
    {type:"paragraph", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at quo voluptatem blanditiis",},
    {type:"paragraph", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at quo voluptatem blanditiis"},
    {type:"link", content:"#sitetop"},        
  ],
  publishedAt: new Date("2022-12-23 20:00:00")
},

{
  id: 2,
  author:{
    avatarUrl:"https://github.com/maykbrito.png",
    name:"Renato Augusto",
    role:"Camisa 8"
  },
  content:[
    {type:"paragraph", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at quo voluptatem blanditiis",},
    {type:"paragraph", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at quo voluptatem blanditiis"},
    {type:"link", content:"#aquitemumsite"},        
  ],
  publishedAt: new Date('2022-12-20 20:00:00')
},



]

export function App() {
  return (
    <div> 
    <Header />
    <div className={styles.wrapper}>

      <Sidebar />
      <main>
        {
          posts.map(post =>{
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            
            )
          })
        }
      </main>
    </div>
    </div>
  )
}


