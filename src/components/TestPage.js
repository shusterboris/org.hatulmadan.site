import React, { Component } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

export default class TestPage extends Component {
    
    state = {
        
        myAnsw:"",
        /*  
       q1:{ "question":"questionA",
           "answers":[
			{"value":"a1", "res":"true"},
           {"value":"a2", "res":"false"},
		   {"value":"a3", "res":"false"}
		   ] 
    }*/
    }

    constructor(props){
        super(props);    
        this.answ=["бред","бред сивой кобылы","а так можно было","бинго"];
        this.quest="Как вы относитесь к этому?";
        this.myAnsw=props.myAnsw;
        this.onItemChange=this.onItemChange.bind(this)
    }
    /* componentDidMount() {
      
        -+
            return axios.get('assets/data/quiz.json')
                .then(res => res.data.data);
        
    } */
    onItemChange(selected){
        this.setState({myAnsw: selected} );    
       
    }
   render() {
   const listItems = this.answ.map((str) => <SingeLine str={str} itemChange={this.onItemChange}/>  );
   
        return( <div className='card'>  
                <div className="p-orange">{this.quest}</div>
                { listItems}
                {this.state.myAnsw}
           
        </div>)     
    }
}
class SingeLine extends React.Component{
    state = {
        a1:false,
    }    
    constructor(props){
        super(props);
        this.str=props.str;
        this.a1=props.a1;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({a1: e.checked} );
        this.props.itemChange(this.str);
      }
    render() {
        return(
            <div>
            <div className="p-inputgroup">
                 {/* <Checkbox inputId="cb1" checked={this.state.a1} onChange={(e) => this.setState({a1: e.checked} )} /> */}
                  <Checkbox inputId="cb1" checked={this.state.a1} onChange={this.handleChange} />
                 <label htmlFor="cb1" className="p-checkbox-label">{this.str}</label>
             </div>
             </div>
       
   ) }
}