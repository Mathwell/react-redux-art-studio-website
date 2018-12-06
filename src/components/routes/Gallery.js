import React from 'react'
//import { ENODATA } from 'constants';
//import {Image, Thumbnail, Grid, Row, Col, Button} from 'react-bootstrap'
import GalleryImages from '../images/GalleryImages'

class Form extends React.Component {
    state = {
      imgs: []
    }

    handleChange = event => {
        //debugger
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        //this.sendFormDataSomewhere(this.state)
      }
     
      handleClick=event=>{
        let imgs=[]
        fetch('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=b11db2a17a833d9b1ac4c504bef12f4e&photoset_id=72157672941005002&user_id=115389063%40N04&extras=url_m&format=json&nojsoncallback=1&auth_token=72157702865537141-e259f6d49b8aace1&api_sig=e925f6c61b27751186a111b5f6498115')
        //fetch('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=b11db2a17a833d9b1ac4c504bef12f4e&photoset_id=72157672941005002&user_id=115389063%40N04&extras=url_sq&format=json&nojsoncallback=1&auth_token=72157702865537141-e259f6d49b8aace1&api_sig=e6208f757c94c9103c5ea1ccafcfa312')
        //fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=b11db2a17a833d9b1ac4c504bef12f4e&photoset_id=72157672941005002&user_id=115389063%40N04&extras=url_o&format=json&nojsoncallback=1&auth_token=72157702865537141-e259f6d49b8aace1&api_sig=98ac424798281298c08bc52960409b68`)
          .then(res => res.json()).catch(err=>console.log(err))        
          .then(data => {
              imgs=data.photoset.photo.map(img=>({link: img.url_m, text: img.title}))
              //this.state=Object.assign({}, this.state, { imgs })
              this.setState({imgs: imgs})
              console.log(this.state.imgs.length)
              //console.log(imgs1)             
            // this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })           
          }).catch(err=>console.log(err))  
          //debugger        
      }
      
    render() {
      return (
        // <form onSubmit={event => this.handleSubmit(event)}>
        //   <input type="text" name="firstName" onChange={event => {this.handleChange(event)}} value={this.state.firstName} />
        //   <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
        //   <input type='submit' value="Enter"/>
        // </form>
        //{this.fetchIMGs()}
        <div>
        <button onClick={this.handleClick}>Click to Fetch!</button>        
        <GalleryImages imgs={this.state.imgs}/> 
        </div>
      )
    }

    fetchIMGs(){
        let imgs=[]
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=5172439c9433528c61f2bf0c81e6d375&photoset_id=72157672941005002&user_id=115389063%40N04&extras=+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_m%2C+url_o&format=json&nojsoncallback=1&auth_token=72157674237332727-23b25b942f248103&api_sig=d9246ffd8c86b3b0339d55cd107f4418`)
          .then(res => res.json()).catch(err=>console.log(err))        
          .then(data => {
              imgs=data.photoset.photo.map(img=>({link: img.url_s, text: img.title, zoom_link: img.url_o, id: img.id}))
              this.setState({imgs: imgs})
              //console.log(this.state)                       
          }).catch(err=>console.log(err))  
          //debugger        
      }

     

      componentDidMount(){
        this.fetchIMGs()
        //this.displayIMGs()        
      }
      

  }

  export default Form