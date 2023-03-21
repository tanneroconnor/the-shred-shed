import {Select} from '@mantine/core';

export default function MenuHarmonySelect(props) {

    function createSelectFieldElements() {
        let selectFields = [];
        if (props.harmonyData) {
            for(const harmony in props.harmonyData) {
                const currentHarmonyName = props.harmonyData[harmony].harmonyName;
                const currentHarmonyType = props.harmonyData[harmony].harmonyType;
                const currentSelectField = {
                    value: `${harmony}`,
                    label: `${currentHarmonyName}`,
                    group: `${currentHarmonyType}s`
                }
                selectFields.push(currentSelectField);
            }
        }
        return selectFields;
    }

    const selectFieldDataArray = createSelectFieldElements();

    return (
        <div>
            <h3 style={{marginTop: "30px"}}>Harmony</h3>
            <Select
                className="harmony-select"
                clearable={false}
                defaultValue={props.harmony}
                onChange={(e) => props.handleHarmonyChange(e)}
                placeholder="--Pick a Harmony--"
                data={[...selectFieldDataArray]}
            />
        </div>
    )
}