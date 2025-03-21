//init all the blocks
const def[0] = JSON.parse(```
{
  "type": "sprite",
  "tooltip": "",
  "helpUrl": "",
  "message0": "sprite with ID %1",
  "args0": [
    {
      "type": "field_input",
      "name": "uid",
      "text": "id"
    }
  ],
  "output": "sprite",
  "colour": 315
}                   
```);
function arrayToBlockly(arr){
  for (let i = 0; i < arr.length; i++) {
    // unfinished
  };
};
const def[1] = ```
{
  "type": "sprite_setValue",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set %1 's %2 to %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "sprite1",
          "1"
        ],
        [
          "sprite2",
          "2"
        ],
        [
          "sprite3",
          "3"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "variable",
      "options": [
        [
          "x",
          "x"
        ],
        [
          "y",
          "y"
        ],
        [
          "width",
          "w"
        ],
        [
          "height",
          "h"
        ],
        [
          "color",
          "color"
        ],
        [
          "animation",
          "anim"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315
}
                    
```

const definitions = Blockly.createBlockDefinitionsFromJsonArray([
]);

// Register the definition.
Blockly.defineBlocks(definitions);
