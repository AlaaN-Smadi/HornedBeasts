import React from 'react';
import hornd from "../jasonFiles/class_01_images.json"
import HornedBeast from './HornedBeast';

class Main extends React.Component {

    // showData = () =>{

    // }

    render() {
        return (
            <div style={{marginLeft:'7%'}}>
                {hornd.map((item, index) => {
                    return (
                        <section style={{display:'inline-block' ,margin:'2%'}}>
                            <HornedBeast image_url={item.image_url} description={item.description} title={item.title} key={index} />
                        </section>
                    )
                })}
            </div>
        )
    }
}

export default Main
