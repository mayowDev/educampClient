import React from 'react'
import {useHistory} from "react-router-dom";

import BusinessImg from '../../assets/images/categories/category-business.jpg';
import DesignImg from '../../assets/images/categories/category-design.jpg';
import SoftwareImg from '../../assets/images/categories/category-it-and-software.jpg';
import MarketingImg from '../../assets/images/categories/category-marketing.jpg';
import MusicImg from '../../assets/images/categories/category-music.jpg';
import PhotographyImg from '../../assets/images/categories/category-photography.jpg';
import Development from '../../assets/images/categories/category-development.jpg';
import PersonalDevelopment from '../../assets/images/categories/category-personal-development.jpg';

const Categories = () => {
    const history = useHistory()
    const handleCategoryClick = (title) => {
        history.push(`/categories/${title}`)
    };
    const categoriesArray = [
        {img: DesignImg, title:'Design'},
        {img: Development, title:'Development'},
        {img: SoftwareImg, title:'Software and IT'},
        {img: MarketingImg, title:'Marketing'},
        {img: BusinessImg, title:'Business'},
        {img: PersonalDevelopment, title:'Personal Development'},
        {img: MusicImg, title:'Music'},
        {img: PhotographyImg, title:'Photography'}
    ]
    const renderCategories = ()=> categoriesArray&&categoriesArray.map((item) => (
        <div key={item.title} onClick={()=>handleCategoryClick(item.title)} className="categories__items--item">
            <img className="thumbnail" src={item.img} alt="category-img" />
            <h3>{item.title}</h3>
        </div>
    ));
    return (
        <div className="categories" >
            <h2 className='categories__title'>Top categories </h2>
            <div className="categories__items" data-aos="fade-up" data-aos-duration="500">
                {renderCategories()}
            </div>
        </div>
    )
}

export default Categories
