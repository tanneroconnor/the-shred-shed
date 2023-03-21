import {rootButtonHeight, rootButtonWidth} from "../../appConfig.js";

export default function RootButton(props) {

    const isSelected = props.noteName === props.selectedRootNote;

    const rootButtonStyles = {
        backgroundColor: isSelected ? props.selectedColor : (props.isDarkMode ? "#25262b" : "#EEEEEE"),
        borderColor: isSelected ? props.selectedColor : (props.isDarkMode ? "#25262b" : "white"),
        width: `${rootButtonWidth}`,
        height: `${rootButtonHeight}`,
        color:isSelected ? "white" : props.isDarkMode ? "white" : "black"
    }
    function createRootButtonOrEmptyDiv(noteName) {
        if(noteName === '') {
            return (
                <div
                    className="root-note-button-spacer"
                    onClick={() => props.handleClick(props.noteName)}
                    style={rootButtonStyles}>

                    {props.noteName}
                </div>
            )
        }
        else {
            return (
                <div
                    className={props.variant === "circle" ? "root-note-button-circle" : "root-note-button-square"}
                    onClick={() => props.handleClick(props.noteName)}
                    style={{...rootButtonStyles}}>

                    {props.noteName}
                </div>
                )
        }
    }

    return (createRootButtonOrEmptyDiv(props.noteName))
}