import React, {useState} from 'react'

const Teach = () => {
    const [activeTab, setActiveTab] = useState('default')
    return (
        <div className="teach flex-row">
            <aside className="teach__sidebar flex-col">
                <ul>
                    <h3>Plan your course</h3>
                    <li onClick={()=>setActiveTab('default')}>Intended Learners</li>
                    <li onClick={()=>setActiveTab('structure')}>Course Structure </li>
                    <li onClick={()=>setActiveTab('setup')}>Setup & test video </li>
                </ul> 
                <ul>
                    <h3>Create your conttent</h3>
                    <li onClick={()=>setActiveTab('film')}>Film & Edit </li>
                    <li onClick={()=>setActiveTab('curriculum')}>Curriculum  </li>
                    <li onClick={()=>setActiveTab('caption')}>Captions (optional) </li>
                </ul> 
                <ul>
                    <h3 >Publish your course</h3>
                    <li onClick={()=>setActiveTab('landing')}>Course landing page</li>
                    <li onClick={()=>setActiveTab('promotion')}>Promotions</li>
                    <li onClick={()=>setActiveTab('pricing')}>Pricing</li>
                    <li onClick={()=>setActiveTab('message')}>Course Messages</li>
                </ul> 
                <button>Submit for review</button>
            </aside>
            <div className="teach__content">
                {activeTab === 'default' &&
                    <section className="intened-learners flex-col">
                        <div className="title"><h2>Intended Learners</h2></div>
                        <div className="container flex-col">
                            <p> The following descriptions will be publicly visible on your <a>Course Landing Page</a> 
                                and will have a direct impact on your course performance. </p>
                            <span>  These descriptions will help learners decide if your course is right for them.</span>
                                {/* ------- Course Objective & Goal  */}
                            <h4>What will students learn in your course?</h4>
                            <p>You must enter at least 4 <a>learning objectives or outcomes</a>  that learners can expect to achieve after completing your course.</p>
                            <input type="text" placeholder="Example low-light photography" />
                            <a href="#"><i className="fa fa-plus"/>  add more to your response</a>
                            <span>P.S these inputs should be dynamic, so user can add new input if the previous one is filled when he clicks the "add more" button,</span> 
                            <span>also when user hover overs on the inputs, show DND & Delete icon so they can be re-ordered or deleted if they're not empty </span>
                            <br />
                            {/* ------- requirements or prerequisites  */}
                            <h4>What are the requirements or prerequisites for taking your course?</h4>
                            <p> List the required skills, experience, tools or equipment learners should have prior to taking your course. </p>
                            <p>   If there are no requirements, use this space as an opportunity to lower the barrier for beginners.</p>
                            <input type="text" placeholder="Example: No previous programming experience needed" />
                            <a href="#"><i className="fa fa-plus"/>  add more to your response</a>
                            <br />
                            {/* ------- target students */}
                            <h4>Who is this course for?</h4>
                            <p> Write a clear description of the intended learners for your course who will find your course content valuable. </p>
                            <span>  This will help you attract the right learners to your course.</span>
                            <input type="text" placeholder="Example: Beginner Pyhton developers curiose about data  science" />
                            <a href="#"><i className="fa fa-plus"/>  add more to your response</a>
                        </div>
                        
                    </section>
                }
                {activeTab === 'structure' && 
                    <section className="structure">
                        <div className="title"><h2>Course Structure</h2></div>
                        <div className="structure-plan flex-row">
                            <article>
                                <h4>Google Chrome</h4>
                                <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
                            </article>
                            <figure>
                                <img src="" alt="newcomer-challenge-icon"/>
                                <figcaption>
                                    <h4>Our library of resources</h4>
                                    Tips and guides to structuring a course students love
                                    {/* <Link to="#">Teaching Center</Link> */}
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                }
                {activeTab === 'setup' && 
                    <section className="setup">
                    <div className="title"><h2>Course setup</h2></div>
                    <p>The following descriptions will be publicly visible on your <a>Course Landing Page</a> 
                        and will have a direct impact on your course performance. 
                        These descriptions will help learners decide if your course is right for them.
                    </p>
                    <h4>What will students learn in your course?</h4>
                    <span>You must enter at least 4 <a>learning objectives or outcomes</a>  that learners can expect to achieve after completing your course.</span>
                    </section>
                }
                {activeTab === 'film' && 
                    <section className="film">
                    <div className="title"><h2>Course film & edit</h2></div>
                    <p>The following descriptions will be publicly visible on your <a>Course Landing Page</a> 
                        and will have a direct impact on your course performance. 
                        These descriptions will help learners decide if your course is right for them.
                    </p>
                    <h4>What will students learn in your course?</h4>
                    <span>You must enter at least 4 <a>learning objectives or outcomes</a>  that learners can expect to achieve after completing your course.</span>
                    </section>
                }
                {activeTab === 'curriculum' && 
                    <section className="curriculum">
                    <div className="title"><h2>Course curriculumt</h2></div>
                    <p>The following descriptions will be publicly visible on your <a>Course Landing Page</a> 
                        and will have a direct impact on your course performance. 
                        These descriptions will help learners decide if your course is right for them.
                    </p>
                    <h4>What will students learn in your course?</h4>
                    <span>You must enter at least 4 <a>learning objectives or outcomes</a>  that learners can expect to achieve after completing your course.</span>
                    </section>
                }
                {activeTab === 'caption' && 
                    <section className="caption">
                    <div className="title"><h2>Course captions</h2></div>
                    <p>The following descriptions will be publicly visible on your <a>Course Landing Page</a> 
                        and will have a direct impact on your course performance. 
                        These descriptions will help learners decide if your course is right for them.
                    </p>
                    <h4>What will students learn in your course?</h4>
                    <span>You must enter at least 4 <a>learning objectives or outcomes</a>  that learners can expect to achieve after completing your course.</span>
                    </section>
                }
                {activeTab === 'landing' && 
                    <section className="landing">
                    <div className="title"><h2>Course landing page</h2></div>
                    <p>The following descriptions will be publicly visible on your <a>Course Landing Page</a> 
                        and will have a direct impact on your course performance. 
                        These descriptions will help learners decide if your course is right for them.
                    </p>
                    <h4>What will students learn in your course?</h4>
                    <span>You must enter at least 4 <a>learning objectives or outcomes</a>  that learners can expect to achieve after completing your course.</span>
                    </section>
                }
                {activeTab === 'promotion' && 
                    <section className="promotion">
                    <div className="title"><h2>Course promotion </h2></div>
                    <p>The following descriptions will be publicly visible on your <a>Course Landing Page</a> 
                        and will have a direct impact on your course performance. 
                        These descriptions will help learners decide if your course is right for them.
                    </p>
                    <h4>What will students learn in your course?</h4>
                    <span>You must enter at least 4 <a>learning objectives or outcomes</a>  that learners can expect to achieve after completing your course.</span>
                    </section>
                }
                {activeTab === 'pricing' && 
                    <section className="pricing">
                    <div className="title"><h2>Course price </h2></div>
                    <p>The following descriptions will be publicly visible on your <a>Course Landing Page</a> 
                        and will have a direct impact on your course performance. 
                        These descriptions will help learners decide if your course is right for them.
                    </p>
                    <h4>What will students learn in your course?</h4>
                    <span>You must enter at least 4 <a>learning objectives or outcomes</a>  that learners can expect to achieve after completing your course.</span>
                    </section>
                }
                {activeTab === 'message' && 
                    <section className="message">
                    <div className="title"><h2>Course message </h2></div>
                    <p>The following descriptions will be publicly visible on your <a>Course Landing Page</a> 
                        and will have a direct impact on your course performance. 
                        These descriptions will help learners decide if your course is right for them.
                    </p>
                    <h4>What will students learn in your course?</h4>
                    <span>You must enter at least 4 <a>learning objectives or outcomes</a>  that learners can expect to achieve after completing your course.</span>
                    </section>
                }
            </div>
            
        </div>
    )
}

export default Teach
