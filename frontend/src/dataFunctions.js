
export function getScaleDegrees(harmonyData, currentHarmony) {
    return convertDataScaleDegreesIntoArray(harmonyData[currentHarmony].scaleDegrees);
}

export function getHarmonyName(harmonyData, currentHarmony) {
    return harmonyData[currentHarmony].harmonyName
}

export function getHarmonyType(harmonyData, currentHarmony) {
    return harmonyData[currentHarmony].harmonyType
}

export function getNotes(harmonyData, currentHarmony, currentRoot) {
    console.log(harmonyData[currentHarmony].roots[currentRoot])
    return harmonyData[currentHarmony].roots[currentRoot]
}

function convertDataScaleDegreesIntoArray(originalScaleDegreesData) {
    return originalScaleDegreesData.slice(1, -1).split(',').map(scaleDegree => {
        if (!isNaN(scaleDegree)) {return scaleDegree.toString();}
        return scaleDegree;
    })
}





