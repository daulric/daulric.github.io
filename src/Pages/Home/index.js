import React from 'react';
import './index.css'
import '../../Apis/scrollbar.css'

import Card from '../../Apis/card/index'

class MyHomePage extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return [
            React.createElement("h1", {
                className: "home-h-tag",
                key: "home-h-tag",

            }, "Hello There"),

            React.createElement("p", {
                className: "home-p-tag"
            }, "My Name is ", [
                React.createElement("code", {
                    className: "code-tag"
                }, "Ulric")
            ]),

            React.createElement("p", {
                className: "home-p-tag-2",
            }, [
                "I am currently a student at TA Marryshow Community College (TAMCC)",
                React.createElement("br"), 
                "and I currently studying Information Technology",

            ]),
            
            (<br />),
            React.createElement("div", {
                id: "profile",  
            }, [
                React.createElement("center",{}, [
                    React.createElement("h1", {
                        className: "profile-text",
                    }, "Contact"),
                    
                    (<br/>),

                    React.createElement("div", {
                        className: "cards",
                    }, [

                        React.createElement(Card, {
                            name: "Github",
                            info: "This is where I host and store all my code for projects",
                            img: "https://github.com/daulric.png",
                            co: {
                                name: "Check Me Out",
                                link: "https://github.com/daulric"
                            }
                        }),


                    ])
                ])
            ])

        ]
    }
}

export default MyHomePage;