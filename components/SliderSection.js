import React from 'react'
import { useState } from 'react'
import menu from '../json/menu.json'
import SliderTabs from './SliderTabs'



const SliderSection = () => {


    const [activeTab, setActiveTab] = useState(0)
    const menuList = menu
    
    return (
        <div className="slider-section">
            {menuList && menuList.map((item, index) =>{
                const firstTitle = item.name
                const secondLevel = item.children 
                
                return (
                    <div className="slider-item" key={`${item.name}-${index}`}>
                        <h1 className="slider-title">{firstTitle}</h1>
                        {/* Second level Tabs */}
                        <SliderTabs 
                            secondLevel={secondLevel}
                            />
                    </div>
                )
            })}

        </div>
    )
}

export default SliderSection