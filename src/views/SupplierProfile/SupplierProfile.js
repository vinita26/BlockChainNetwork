import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

const state = [];
const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SupplierProfile() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        product_type: ''
    });

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const addProduct = (product_type) => {
        console.log("product type :", product_type);
        //validateProduct(product);
    };

    const getSuppliers = () => async dispatch => {
        console.log("inside getSuppliers")
        try {
            const res = await fetch('http://ec2-3-87-126-187.compute-1.amazonaws.com:8080/api/Manufacturer');
            const data = await res.json();
            console.log("Manufactures data:", data)
        } catch (error) {
            console.log('error', error)
        }

    }

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>Add Product Card</h4>
                            <p className={classes.cardCategoryWhite}>To add new product into network</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <p>Product Type</p>

                                </GridItem>

                                <GridItem xs={6} sm={6} md={6}>
                                    <FormControl className={classes.formControl}>
                                        <option value="" disabled>Select Product Type</option>
                                        <Select
                                            native
                                            labelId="product-type-label"
                                            id="product-type-select"
                                            value={state.product_type}
                                            onChange={handleChange('age')}
                                        // labelWidth={labelWidth}
                                        >
                                            <option value={1} >Wheels</option>
                                            <option value={2} >Brakes</option>
                                            <option value={3} >Odometer</option>
                                        </Select>

                                    </FormControl>
                                </GridItem>
                            </GridContainer>

                            <Button
                                className="checkProduct"
                                color="info"
                                round
                                onClick={e => addProduct}
                            >
                                Add Product
                             </Button>
                            <Button
                                className="checkProduct"
                                color="info"
                                round
                                onClick={getSuppliers}
                            >
                                Get suppliers
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>

        </div>
    );
}
