import React from 'react';
import { Form } from 'react-bootstrap';


export class FormTypes extends React.Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div style={{ textAlign: "center" }}>

                <Form style={{marginRight: '30%',marginLeft:"23%"}} >


                    <Form.Group aria-label="Default select example">
                        <Form.Label>choose your favorite cat breed</Form.Label>
                        <Form.Control onChange={this.props.showFunpro} style={{ marginRight: "15px" }} name="cars" id="cars" as='select'>
                            <option value="all"> All Items </option>
                            <option value="1"> horn 1 </option>
                            <option value="2"> horn 2 </option>
                            <option value="3"> horn 3 </option>
                            <option value="100"> horn 100 </option>
                        </Form.Control>
                    </Form.Group>


                </Form>
            </div>
        )
    }
}

export default FormTypes
