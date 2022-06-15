function Videos () {
    return(
        <div>
            <div className="videos" >
            {/* esse código abaixo serve para adicionar vídeos a página! */}
           <video width="320" height="240" controls>
            <source src="video.mp4" type="video/mp4"/>
        </video>
        </div>
        <br/>
        
        
        {/* <div className="vid" >
        <video width="320" height="240" controls>
            <source src="video.mp4" type="video/mp4"/>
        </video>
        </div> */}
        </div>
    )
}

export default Videos;