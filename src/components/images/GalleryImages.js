import React from 'react'
//import { ENODATA } from 'constants';
import {Grid, Row, Col} from 'react-bootstrap'
import GalleryImage from './GalleryImage'


class GalleryImages extends React.Component{
    

    render(){
        let i=0
        const galleryImages = this.props.imgs.map((img, index) => {
            return (
            <Col xs={6} md={4}>
            <GalleryImage key={index} img={img} />
            </Col>)

          });
        debugger
        return(
   <Grid>
     <Row>
{/* //       <Col xs={6} md={4}>
//           <GalleryImage img={this.props.imgs[i]} />          
//       </Col>
//       <Col xs={6} md={4}>
//         <GalleryImage img={this.props.imgs[i+1]} /> 
//        </Col>
//       <Col xs={6} md={4}>
//         <GalleryImage img={this.props.imgs[i+2]} /> 
//     </Col> */}
    {galleryImages}
    </Row>
 </Grid>

)    

}}

GalleryImages.defaultProps={
    imgs: [{link: "", text: "1"}, {}, {}]
}

export default GalleryImages