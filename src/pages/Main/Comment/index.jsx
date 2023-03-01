import './styles.css';

export function Comment(){
    return(
        <div>

        <div className="comment_content ">   
            <img className='profile_photo profile_photo' src="https://github.com/Diego3g.png"/>        
            <div className="comment_box">
                <div className="comment_header">
                    <div className="comment_decription">
                        <strong className='name'>Devon Lane</strong>   
                        <time className='time' title='01/03/2023 às 08:42' dateTime='2023-03-01 08:42:57'>Cerca de 2h atrás</time>            
                    </div>
                    <i class='bx bxs-trash trash_icon '></i>
                </div>
                <div className='comment_text'>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
            </div>

        </div>
            <div className="footer">
                <i class='bx bx-like like'> 
                </i><p>Aplaudir</p>
                <span className='number'>03</span>
            </div>  
         </div>
        
        
        
    )
} 
