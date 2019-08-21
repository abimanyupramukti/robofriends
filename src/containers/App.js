import React, {Component} from 'react'
import 'tachyons'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css'
import ErrorBoundary from '../components/ErrorBoundary';
import{setSearchField, requestRobots} from '../actions'
import {connect} from 'react-redux'


const mapStateToProprs = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.robots,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: ()=>{dispatch(requestRobots())}
    }
}

class App extends Component{
    
  
    componentDidMount(){
      this.props.onRequestRobots()
    }

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !isPending ? 
        <h1 className='tc'>Loading</h1> :
        (<div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange}></SearchBox>
                <Scroll >
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}></CardList>
                    </ErrorBoundary>
                </Scroll>
        </div>)
             
    }
}

export default connect(mapStateToProprs, mapDispatchToProps)(App)