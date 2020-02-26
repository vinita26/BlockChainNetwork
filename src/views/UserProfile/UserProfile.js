import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
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

export default function SimpleSelect() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    product_type: ''
  });

  const inputLabel = React.useRef(null);
  //const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);


  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const validateProduct = (product_type, product_id) => {
    console.log("product type :", product_type + "product id: " + product_id);
    //validateProduct(product);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Detect Product</h4>
              <p className={classes.cardCategoryWhite}>Provide Product ID to verify</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <p>Product Type</p>

                </GridItem>

                <GridItem xs={6} sm={6} md={6}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="product-type-label">Product Type</InputLabel>
                    <Select
                      native
                      labelId="product-type-label"
                      id="product-type-select"
                      value={state.product_type}
                      onChange={handleChange('age')}
                    // labelWidth={labelWidth}
                    >
                      <option value={1}>Tyres</option>
                      <option value={2}>Brakes</option>
                      <option value={3}>Odometer</option>
                    </Select>

                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <p>Product ID:</p>

                </GridItem>

                <GridItem xs={6} sm={6} md={6}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Product ID</InputLabel>




                  </FormControl>
                </GridItem>
              </GridContainer>
              <Button
                className="checkProduct"
                color="primary"
                round
                onChange={validateProduct}
              >
                Validate Product
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

    </div>
  );
}
