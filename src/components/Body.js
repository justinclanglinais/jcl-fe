import React from 'react'
import About from '../components/content/About.js'
import Projects from '../components/content/Projects.js'
import Bjj from '../components/content/Bjj.js'

export default class Body extends React.Component {
    render () {
        return (
            <div className="App-body">
                <div>
                    <About />
                </div>
                <div>
                    <Projects />
                </div>
                <div>
                    <Bjj />
                </div>
            </div>
        )
    }
}