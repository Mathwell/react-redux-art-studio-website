import React from 'react'
//import { ENODATA } from 'constants';
import {Image, Thumbnail, Grid, Row, Col, Button} from 'react-bootstrap'
import GalleryImage from '../images/GalleryImage'

class Form extends React.Component {
    state = {
      firstName: "John"  ,
      lastName: "Smith",
      imgs: [{text: "1", link: "https://farm5.staticflickr.com/4212/34444995104_0dcea9621b_k.jpg"}]
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
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=cbf96787e709bb6e826e0f9244ed5cef&photoset_id=72157672941005002&user_id=115389063%40N04&extras=url_sq&format=json&nojsoncallback=1&auth_token=72157704305085784-1c61e2f3903e00e5&api_sig=361cb1fa3e36d89aa6f73f2bbf871b37`)
          .then(res => res.json()).catch(err=>console.log(err))        
          .then(data => {
              imgs=data.photoset.photo.map(img=>({link: img.url_sq, text: img.title}))
              this.state=Object.assign({}, this.state, { imgs })
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
        <h1>Count={this.state.imgs[0].text}</h1>
        <GalleryImage imgs={this.state.imgs}/> 
        </div>
      )
    }

    fetchIMGs(){
        let imgs=[]
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=cbf96787e709bb6e826e0f9244ed5cef&photoset_id=72157672941005002&user_id=115389063%40N04&extras=url_sq&format=json&nojsoncallback=1&auth_token=72157704305085784-1c61e2f3903e00e5&api_sig=361cb1fa3e36d89aa6f73f2bbf871b37`)
          .then(res => res.json()).catch(err=>console.log(err))        
          .then(data => {
              imgs=data.photoset.photo.map(img=>({link: img.url_sq, text: img.title}))
              this.state=Object.assign({}, this.state, { imgs })
              console.log(this.state)
              //console.log(imgs1)             
            // this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })           
          }).catch(err=>console.log(err))  
          //debugger        
      }

     

      componentDidMount(){
        this.fetchIMGs()
        //this.displayIMGs()        
      }
      

  }

  export default Form