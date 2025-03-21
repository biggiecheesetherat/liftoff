//init all the blocks
// Passes the ID.
const toolbox = ```
{
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "Logic",
      "colour": "%{BKY_LOGIC_HUE}",
      "contents": [
        { "kind": "block", "type": "controls_if" },
        { "kind": "block", "type": "logic_compare" },
        { "kind": "block", "type": "logic_operation" },
        { "kind": "block", "type": "logic_negate" },
        { "kind": "block", "type": "logic_boolean" },
        { "kind": "block", "type": "logic_null" },
        { "kind": "block", "type": "logic_ternary" }
      ]
    },
    {
      "kind": "category",
      "name": "Loops",
      "colour": "%{BKY_LOOPS_HUE}",
      "contents": [
        {
          "kind": "block",
          "type": "controls_repeat_ext",
          "inputs": {
            "TIMES": {
              "block": {
                "type": "math_number",
                "fields": { "NUM": 10 }
              }
            }
          }
        },
        { "kind": "block", "type": "controls_whileUntil" },
        { "kind": "block", "type": "controls_for" },
        { "kind": "block", "type": "controls_forEach" },
        { "kind": "block", "type": "controls_flow_statements" }
      ]
    },
    {
      "kind": "category",
      "name": "Math",
      "colour": "%{BKY_MATH_HUE}",
      "contents": [
        { "kind": "block", "type": "math_number" },
        {
          "kind": "block",
          "type": "math_arithmetic",
          "inputs": {
            "A": {
              "block": {
                "type": "math_number",
                "fields": { "NUM": 1 }
              }
            },
            "B": {
              "block": {
                "type": "math_number",
                "fields": { "NUM": 1 }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_single",
          "inputs": {
            "NUM": {
              "block": {
                "type": "math_number",
                "fields": { "NUM": 9 }
              }
            }
          }
        }
      ]
    },
    {
      "kind": "category",
      "name": "Sprites",
      "colour": "#FFA500",
      "contents": [
        {
          "kind": "block",
          "type": "sprite_setValue"
        },
        {
          "kind": "block",
          "type": "sprite_getValue"
        }
      ]
    }
  ]
}
```
const workspace = Blockly.inject('blocklyDiv');
const def[0] = JSON.parse(```
{
  "type": "sprite",
  "tooltip": "",
  "helpUrl": "",
  "message0": "sprite # %1",
  "args0": [
    {
      "type": "field_input",
      "name": "uid",
      "value": 0,
      "min": 0
    }
  ],
  "output": "sprite",
  "colour": 315
}                   
```);
let sprites = [{
  name: "Testificate",
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  a: 255,
  color: "#00000000",
  anim: ""
}]

function spriteToBlockly(sprites){
  let newarr = []
  let arr = []
  for (let i = 0; i < sprites.length; i++) {
    arr.push(sprites[i].name);
  };
  for (let i = 0; i < arr.length; i++) {
    newarr.push("${[arr[i]}", "${i}"]);
  };
  return newarr
};
const def[1] = ```
{
  "type": "sprite_setValue",
  "tooltip": "",
  "helpUrl": "",
  "message0": "set sprite # %1 's %2 to %3",
  "args0": [
    {
      "type": "field_input",
      "name": "sprite",
      "value": 0,
      "min": 0
    }
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
          "opacity",
          "alpha"
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
const def[2] = ```
{
  "type": "sprite_getValue",
  "tooltip": "",
  "helpUrl": "",
  "message0": "get sprite # %1 's %2",
  "args0": [
    {
      "type": "field_input",
      "name": "sprite",
      "value": 0,
      "min": 0
    }
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
          "opacity",
          "alpha"
        ],
        [
          "animation",
          "anim"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 315
}
                    
```
const definitions = Blockly.createBlockDefinitionsFromJsonArray(def);
javascript.javascriptGenerator.forBlock['sprite'] = function() {
  const index = block.getFieldValue('uid');

  // TODO: Assemble javascript into the code variable.
  const code = "return " + sprites[index];
  return [code, javascript.Order.NONE];
}
javascript.javascriptGenerator.forBlock['sprite_getValue'] = function() {
  const index = block.getFieldValue('sprite');
  const v = block.getFieldValue('variable');
  

  // TODO: Assemble javascript into the code variable.
  const code = "return sprites[index].${v}";
  return [code, javascript.Order.NONE];
}
javascript.javascriptGenerator.forBlock['sprite_setValue'] = function() {
  const s = block.getFieldValue('sprite');
  const v = block.getFieldValue('variable');
  const r = block.getFieldValue('value');

  // TODO: Assemble javascript into the code variable.
  const code = 'sprites[${s}].${v} = ${r}';
  return code;
}
// Register the definition.
Blockly.defineBlocks(definitions);
