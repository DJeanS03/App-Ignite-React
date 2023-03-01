import './styles.css';
import { Comment } from './Comment/index.jsx';

import { format, formatDistanceToNow } from 'date-fns' /*biblioteca de data e hora*/ 
import ptBR from 'date-fns/locale/pt-BR' /* coloca data e hora em portugues */


export function Main({author, publishedAt}){
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true,})
    
    return (
        <div className="main">
            <div className='header'>
                <div className="flex">
                    <img className='profile_photo avatar' src={author.avatarUrl} />
                    <div className="decription">
                        <strong className='name'>{author.name} </strong>
                        <span className='profession'>{author.role}</span>
                    </div>
                </div>
                <time className='time' title={publishedDateFormatted} dateTime={publishedAt.toISOString}>
                    {publishedDateRelativeNow}
                </time>            
            </div>

            <div className="content">
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p className='tags'>
                    <a href="#">#novoprojeto</a>
                    <a href="">#nlw</a>
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className='comment'>
                <strong className='comment_text'>Deixe seu feedback</strong>

                <textarea className='text_area'
                    placeholder='Deixe seu comentário aqui'
                />

                <button className='commentButton' type='submit'>Publicar</button>
            </form>

             <div className='commentList'>
                <Comment />
             </div>
        </div>
    )
}