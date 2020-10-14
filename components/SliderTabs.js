import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useState} from 'react'
const SliderTabs = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      function a11yProps(index) {
        return {
            id: `scrollable-auto-tab-${index}`,
            'aria-controls': `scrollable-auto-tabpanel-${index}`,
            };
        }
    return (
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
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                                <Tab label="Item Four" {...a11yProps(3)} />
                                <Tab label="Item Five" {...a11yProps(4)} />
                                <Tab label="Item Six" {...a11yProps(5)} />
                                <Tab label="Item Seven" {...a11yProps(6)} />
                            </Tabs>
                            </AppBar>
    )
}
export default SliderTabs