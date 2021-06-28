import React from "react";


class HornedBeast extends React.Component{
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h2> {this.props.title} </h2>
                <p> {this.props.description} </p>
                <img src={this.props.image_url} alt={"alsa"}  width={300}/>
                
            </div>
        )
    }
}


export default HornedBeast ;