import { Fragment } from 'react';
import './index.css'
import '../../Apis/scrollbar.css'

import Card from '../../Apis/card/index'

const listName = 'list-component'

function Home() {
    return (
        <Fragment>
            <center>
                <br/>
                <img className='git-pfp' src='https://github.com/daulric.png' alt='daulric/github'/>
            </center>

            <h1 className='home-h-tag'>Hello There</h1>
            <p className='home-p-tag'>
                My Name is <code className='code-tag'>Ulric</code>
            </p>

            <p className='home-p-tag-2'>
                I am currently a student at TA Marryshow Community College (TAMCC)
                <br/>
                and i'm currently studying Information Technology (easy course btw)
                <br/><br/>
                I like to do lots of stuff like:
            </p>

            <center>
                <ul>
                    <li className={listName}>Programming</li>
                    <li className={listName}>Gaming</li>
                    <li className={listName}>Doing Stupid Shit</li>
                </ul>
            </center>
            <br />
            <div id='profile'>
                <center>
                    <div className='cards'>

                        <h1 className='profile-text'>Contact</h1>
                        <br/>

                        <Card
                            name='Github'
                            info='This is where I host and store all my code for projects.'
                            co={{
                                name: 'Contact',
                                link: 'https://github.com/daulric'
                            }}
                            img={'https://github.com/daulric.png'}
                        />
                    </div>
                </center>
            </div>
            
            
            
            
        </Fragment>
    )
}

export default Home;