
const ImageCard = props =>{
    return(
        <> 
            <div onMouseOver = {props.onMouseOverInImageCard} className = "CardImage">
                <img className = "BackgroundImage" alt = "bakc" src = {props.BackgroundImage} />
                <div className = {`DarkerZero Darker`}></div>
                <div className = "ContentOfCardImage none">
                    <button className = "DeleteButton">Delete</button>
                    <p>Image Title</p>
                </div>
            </div>
        </>
    )
}

export default ImageCard