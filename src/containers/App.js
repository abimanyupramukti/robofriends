import React, {Component} from 'react'
import 'tachyons'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css'
import ErrorBoundary from '../components/ErrorBoundary';

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            robots:[],
            searchField:''
        }
    }
    
  
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response=>Response.json())
        .then(users=>{
            this.setState({robots: users})
        })
    }

    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value})
    }

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}></SearchBox>
                <Scroll >
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}></CardList>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}