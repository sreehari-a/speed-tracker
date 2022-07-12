import React from 'react';
import { Tabs } from "antd";
import stylize from '../../utils/stylize';
import styles from './styles';

const { TabPane } = Tabs;


function TabView(props) {
    return (
        <div className={props.classes.tabContainer}>
            
        <Tabs defaultActiveKey="1" onChange={() => {}}>
            {props.config.map(tab=>{
                const TabView = tab.component;
                return(
                <TabPane tab={tab.title} key={tab.key}>
                {(TabView && <TabView {...tab.props} />) || tab.text}
              </TabPane>
            )})}
          </Tabs>
        </div>
    )
}
export default stylize(TabView, styles)