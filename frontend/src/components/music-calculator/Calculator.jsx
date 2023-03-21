import React from 'react'
import '../../App.css'
import MenuRootSelect from "./MenuRootSelect";
import {Text} from '@mantine/core'
import MenuHarmonySelect from "./MenuHarmonySelect";

export default function Calculator(props) {

    const ampColorStyles = {
        backgroundColor: props.isDarkMode ? "white" : "#333333",
        border: props.isDarkMode ? "1px solid #9f9375" : "1px solid #222222",
    }

    const trimColorStyle = {
        border: props.isDarkMode ? "2px solid #9f9375" : "2px solid white",
    }

    return (
        <div className="amp-wrapper">
            <div className="amp">
                <div className="amp-head" style={ampColorStyles}>
                    <div className="amp-trim-top" style={trimColorStyle}>
                        <h2>Extra large text</h2>
                    </div>

                    <div className="amp-plate">

                    </div>
                </div>
                <div className="amp-cab" style={ampColorStyles}>
                    <div className="amp-trim-bottom" style={trimColorStyle}>
                        <MenuRootSelect isDarkMode={props.isDarkMode}/>
                        <MenuHarmonySelect />
                    </div>
                </div>
                {/*<MenuRootSelect />*/}

            </div>
        </div>
        // <div className="calculator-wrapper">
        //     <div className="calculator" style={styles}>
        //         <div className="calculator-screen">
        //             <Text>sdfsdf</Text>
        //         </div>
        //         <MenuRootSelect />
        //
        //     </div>
        // </div>
    )
}