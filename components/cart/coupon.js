import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function Coupon(props) {
    return (
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input 
          placeholder="Mã giảm giá"
          value={props.codefake}
          onChange={props.inputCode}
           />
        </FormGroup>
        <Button 
        color="primary"
        onClick={props.appCoupon}
        >Áp dụng</Button>
      </Form>
    )
}