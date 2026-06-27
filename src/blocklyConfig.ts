import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

export const initCustomBlocks = () => {
  // Raw Value Block
  Blockly.Blocks['raw_value'] = {
    init: function() {
      this.appendValueInput("CODE").setCheck(null).appendField("raw");
      this.setOutput(true, null);
      this.setColour("#494949");
    }
  };

  // Sprite Set Block
  Blockly.Blocks['sprite'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(["String", "Number"])
          .appendField("set sprite #")
          .appendField(new Blockly.FieldNumber(0, 0), "SPRITE")
          .appendField("'s")
          .appendField(new Blockly.FieldDropdown([
            ["x", "pos.x"], ["y", "pos.y"], ["angle", "angle"],
            ["size", "linkSize"], ["opacity", "opacity"]
          ]), "ATT")
          .appendField("to");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(315);
    }
  };

  // Generators
  javascriptGenerator.forBlock['sprite'] = function(block) {
    const n = block.getFieldValue('SPRITE');
    const att = block.getFieldValue('ATT');
    const val = javascriptGenerator.valueToCode(block, 'NAME', (javascriptGenerator as any).ORDER_ATOMIC);
    return `sprites[${n}].${att} = ${val};\n`;
  };
  
  // ... (Add other block definitions/generators here)
};