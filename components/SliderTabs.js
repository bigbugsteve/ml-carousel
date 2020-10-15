import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';
import { useState, useEffect, Fragment } from 'react'

const SliderTabs = (props) => {

    // States
    const [value, setValue] = useState(0)
    const [index, setIndex ] = useState(0)
    // console.log("SliderTabs -> index", index)
    // console.log("SliderTabs -> thirdLevel", thirdLevel)

    // Variables
    const secondLevel = props.secondLevel
    console.log("SliderTabs -> secondLevel", secondLevel[0])
    
    // Settings for Swiper
    const params = {
        freeMode: true,
        spaceBetween: 5,
        freeModeMomentum: true,
        freeModeMomentumRatio: .4,
        freeModeMomentumVelocityRatio: .8,
        preventClicks: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.5,
                spaceBetween: 5
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2.5,
                spaceBetween: 5
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3.5,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 4.5,
                spaceBetween: 10
            }
        }
    }

    // Functions
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `scrollable-auto-tab-${index}`,
            'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
    }

    const handleTab = (index) => {
        setIndex(index)
    }

    return (
        <Fragment>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {secondLevel && secondLevel.map((secondItem, secondIndex) => {
                            const secondTitle = secondItem.name
                            return (
                                <Tab 
                                    label={secondTitle} 
                                    {...a11yProps(0)} 
                                    key={`tab-${secondIndex}`} 
                                    data={secondIndex}
                                    onClick={()=>handleTab(secondIndex)}/>
                            )
                        })}
                    </Tabs>
                </AppBar>
                <Swiper {...params}>
                    {secondLevel && secondLevel.length > 0 && secondLevel[index].children.map((thirdItem, thirdIndex) => {
                        let cardItem = thirdItem
                        return (
                            <div className="slider-item" key={`card-${thirdIndex}`} >
                                {cardItem.name}
                            </div>
                        )

                    })}
                    {/* {thirdCategories.length > 0 && thirdCategories.map((category, index) => { */}
                    {/* return ( */}
                    {/* )
                })} */}
            </Swiper>
        </Fragment>
    )
}
export default SliderTabs