import React from 'react';
import {H1, H2, H3, P1, SubTitle} from '../../components/Typography';
import Button from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';
import {IHomeProps} from './types';
import Header from '../../components/Header'
import PrimarySearchAppBar from '../../components/Header/HeaderMaterial'
const HomePage:React.FC<IHomeProps> = ({isLoggedIn}) => {
    //     const {exhibition: {exhibitions, currentPage, canLoadMore, exhibitionsLoading, exhibitionsFirstLoad}, globalProps, setFirstLoadGlobal} = props;
    const history = useHistory();
    return (
        <>
        {/* <PrimarySearchAppBar isLoggedIn={isLoggedIn}/> */}
        <Header/>
        <section className='home'>
            <div className='home__container'>
                <H1 className='home__heading dark' value='Course on demand: a new way to learn any skill without leaving your home.' />
                <Button
                    value='Start learning'
                    size="large"
                    className='button__dark'
                    onClick={() => isLoggedIn ? history.push('/courses') : history.push('/signup')}
                />
            </div>
            <div className='home__container exbition-wrap'>
                <div className="blocks">
                    
                    <div className="block">
                        <div className="circle" />
                        <H3 className="dark" value="Learn on your base" />
                        <P1 className="dark" value="Not everyone learns the same. Feel like taking break?  Come back and complete your learning later." />
                    </div>
                    <div className="block">
                        <div className="circle" />
                        <H3 className="dark" value="Exclusive Courses" />
                        <P1 className="dark" value="We offer the best insructors from around the globe, so you can have the best quality courses possible." />
                    </div>
                </div>
                <Link to='/signup' className="create-account">
                    <SubTitle value="Create New Account" />
                </Link>
                <H2 value="Which one describes you best?" className="dark" />
                <div className="buttons">
                    <Button
                        value="Teacher"
                        size="large"
                        className='button__dark'
                        onClick={() => console.log('Clicked!')}
                    />
                    <Button
                        value="Student"
                        size="large"
                        className='button__dark'
                        onClick={() => isLoggedIn ? history.push('/courses') : history.push('/signup')}
                    />
                </div>
            </div>
        </section>
        </>
    )
};

export default HomePage;
