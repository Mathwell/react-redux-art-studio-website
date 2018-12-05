import React from 'react'
//import { ENODATA } from 'constants';
import {Image, Thumbnail, Grid, Row, Col, Button} from 'react-bootstrap'


class GalleryImage extends React.Component{
    

    render(){
        let i=0
        //debugger
        return(
  <Grid>
  <Row>
      <Col xs={6} md={4}>
          <Thumbnail src={this.props.imgs[0].link} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                  <Button bsStyle="primary">Button</Button>
                  &nbsp;
                  <Button bsStyle="default">Button</Button>
              </p>
          </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
      <Thumbnail src={this.props.imgs[0].link} alt="242x200">
              <h3>{this.props.imgs[0].text}</h3>
              <p>Description</p>
              <p>
                  <Button bsStyle="primary">Button</Button>
                  &nbsp;
                  <Button bsStyle="default">Button</Button>
              </p>
          </Thumbnail>
       </Col>
      <Col xs={6} md={4}>
      <Thumbnail src={this.props.imgs[0].link} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
              <Button bsStyle="primary">Button</Button>
              &nbsp;
              <Button bsStyle="default">Button</Button>
              </p>
          </Thumbnail>
</Col>
</Row>
</Grid>)    

}}

GalleryImage.defaultProps={
    imgs: [{link: 'https://farm5.staticflickr.com/4212/34444995104_0dcea9621b_k.jpg'}]
}

export default GalleryImage