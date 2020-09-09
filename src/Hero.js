import React, { Component } from 'react';
import App from './App';
import './side.css';


import firebaseApp from './config.js';


class  Hero  extends Component{
    state={
        students:[
            {
                first:'one',
                last:'one',
                age:'22',
            },
            {
                first:'two',
                last:'two',
                age:'22',
            },
            {
                first:'three',
                last:'three',
                age:'22',
            },
            {
                first:'four',
                last:'foru',
                age:'22',
            },
            {
                first:'five',
                last:'five',
                age:'22',
            },
            {
                first:'six',
                last:'six',
                age:'22',
            },
            {
                first:'seven',
                last:'seven',
                age:'22',
            },
        ],
        pageNo:0
    }

    signOut = (e) => {
        e.preventDefault()
        firebaseApp.auth().signOut().then( s => {
            this.props.history.push('/')
        })
      }
    addStudent = (e)=>{
        e.preventDefault()
        this.setState({
            students: [
                {
                    first:this.firstname.value,
                    last:this.lastname.value,
                    age:this.age.value,
                },
                ...this.state.students,
            ],
            pageNo:0
        })

        this.firstname.value=''
        this.lastname.value=''
        this.age.value=''
    }

    prevPage = e => {
        this.setState({
            pageNo: this.state.pageNo-1
        })
    }
    nextPage = e => {
        this.setState({
            pageNo: this.state.pageNo+1
        })
    }
   render(){
    const currPageStudents=this.state.students.slice(
        this.state.pageNo*3,
        (this.state.pageNo+1)*3
    )

    let studentlist = currPageStudents.map((stu,i)=> 
        <tr key={i}>
            <td>{stu.first}</td>
            <td>{stu.last}</td>
            <td>{stu.age}</td>
        </tr>
        )
        

    return(
 
      <div className="hero">
          
          <nav>
              <h2>Welcome</h2>
              <button onClick={this.signOut}>Signout</button>
          </nav>
          
        
        <form>
            <input placeholder="firstname" style={{color:'black'}} ref={ref=>this.firstname=ref} type='text' />
            <input placeholder="lastname" ref={ref=>this.lastname=ref} type='text' />
            <input placeholder="age" ref={ref=>this.age=ref} type='text' />
            <button onClick={this.addStudent}>submit</button>
        </form>

          <table >
              <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {studentlist}
              </tbody>
        </table>    

        <div>
            <button onClick={this.prevPage}>pre</button>
            {this.state.pageNo+1}
            <button onClick={this.nextPage}>next</button>
        </div>
      </div>
      
      
    );
   }
}


export default Hero;