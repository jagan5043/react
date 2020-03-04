import React,{Component} from 'react'

class AddPhoto extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
            event.preventDefault();
            console.log(event.target.elements.link.value)
            console.log(event.target.elements.description.value)
    }

    render(){
        return(
                <div>
                       <h1>Photowall</h1>
                       <div className="form">
                           <form onSubmit={this.handleSubmit}>
                               <input type="text" placeholder="Link" name="link"/>
                               <input type="text" placeholder="Description" name="description"/>
                               <button className="form button">Post</button>
                           </form>
                           
                           
                        </div> 

                </div>


        )
    }
}

export default AddPhoto