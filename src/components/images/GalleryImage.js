import React from 'react'
//import { ENODATA } from 'constants';
import {Thumbnail, Button} from 'react-bootstrap'


class GalleryImage extends React.Component{
    

    render(){
        return(
         <Thumbnail src={this.props.img.link} alt="242x200">
              <h3>{this.props.img.text}</h3>
              <p>Description</p>
              <p>
                  <Button bsStyle="primary" href={this.props.img.link}>Button</Button>
                  &nbsp;
                  <Button bsStyle="default">Button</Button>
              </p>
          </Thumbnail>
      
        )
}
}

GalleryImage.defaultProps={
    img: [{text: ""}]    
}

export default GalleryImage