import menu from '../json/menu.json'

import SliderTabs from './SliderTabs'

import React from 'react'


const SliderSection = () => {

    const menuList = menu
    // console.log("SliderSection -> menuList", menuList)
    
    
        
    

    return (
        <div className="slider-section">
            {menuList && menuList.map((item, index) =>{
                const firstTitle = item.name
                
                const secondLevel = item.children 
                // console.log("SliderSection -> secondLevel", secondLevel)
                
                return (
                    <div className="slider-item" key={`${item.name}-${index}`}>
                        <h1 className="slider-title">{firstTitle}</h1>
                        {/* Second level Tabs */}
                        <SliderTabs />
                    </div>
                )
            })}

        </div>
    )
}

export default SliderSection