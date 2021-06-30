import React from 'react';
import hornd from "../jasonFiles/class_01_images.json"
import HornedBeast from './HornedBeast';
import FormTypes from './FormTypes';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            arr: hornd
        }
    }

    setItems = (newArr2) => {
        this.setState({
            arr: newArr2
        })
    }

    showItemsFun = (event) => {

        let newArr = [];
        let num = event.target.value;

        newArr = hornd.filter((item) => {
            if (item.horns == num) {
                return true;
            }
        })
        if (newArr.length == 0) {
            newArr = hornd
        }

        this.setItems(newArr)

    }



    render() {

        return (

            <div  style={{ marginLeft: '7%' }}>

                <FormTypes showFunpro={this.showItemsFun} />
                
                {

                    this.state.arr.map((item, i) => {


                        return (


                            <HornedBeast image_url={item.image_url} description={item.description} title={item.title} key={i} />


                        )

                    })
                }
            </div>
        )
    }
}

export default Main
