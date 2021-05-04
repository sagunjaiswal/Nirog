import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const DoctorCategoryCard = (props) => {
  return (
    <div>
      <Card body inverse color="primary">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="success">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="info">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="warning">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body inverse color="danger">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </div>
  );
};

export default DoctorCategoryCard;
