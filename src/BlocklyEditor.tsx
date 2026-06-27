import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import 'blockly/javascript';
import 'blockly/msg/en';
import { toolbox } from './toolbox';

const BlocklyEditor = () => {
  const blocklyDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This theme uses the Classic block colors but keeps your custom dark background
    const darkThemeWithClassicBlocks = Blockly.Theme.defineTheme('darkClassic', {
      base: Blockly.Themes.Classic, // <--- This brings back your bright default colors
      componentStyles: {
        workspaceBackgroundColour: '#1C1B1F', // Your M3 Dark Surface
        toolboxBackgroundColour: '#1C1B1F',
        flyoutBackgroundColour: '#2B2930',
        scrollbarColour: '#49454F',
      },
    });

    const workspace = Blockly.inject(blocklyDiv.current!, {
      toolbox: toolbox,
      theme: darkThemeWithClassicBlocks,
      renderer: 'zelos',
    });

    return () => {
      workspace.dispose();
    };
  }, []);

  return <div ref={blocklyDiv} style={{ height: '100%', width: '100%' }} />;
};

export default BlocklyEditor;