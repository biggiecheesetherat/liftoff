import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript'; 
import { initCustomBlocks } from './blocklyConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Sprite {
  pos: { x: number; y: number };
  angle: number;
  linkSize: number;
  opacity: number;
}

// Toolbox defined as a string to avoid JSX parsing errors
const toolbox = `
<xml id="toolbox" style="display: none">
  <category name="Game" colour="315">
    <block type="sprite"></block>
  </category>
</xml>`;

const App: React.FC = () => {
  const blocklyRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);
  const [projectName, setProjectName] = useState("Untitled Project");
  // Added usage to state to satisfy TS6133
  const [sprites] = useState<Sprite[]>([]);

  useEffect(() => {
    initCustomBlocks();
    if (blocklyRef.current) {
      workspaceRef.current = Blockly.inject(blocklyRef.current, {
        toolbox: toolbox, 
        grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
        trashcan: true,
      });
    }
    return () => workspaceRef.current?.dispose();
  }, []);

  const handleRun = () => {
    if (!workspaceRef.current) return;
    const code = javascriptGenerator.workspaceToCode(workspaceRef.current);
    const gameHtml = generateGameHtml(code, sprites, projectName);
    const tab = window.open();
    if (tab) {
      tab.document.write(gameHtml);
      tab.document.close();
    }
  };

  const saveProject = () => {
    if (!workspaceRef.current) return;
    const xml = Blockly.Xml.workspaceToDom(workspaceRef.current);
    const data = {
      name: projectName,
      xml: Blockly.Xml.domToText(xml),
      sprites
    };
    localStorage.setItem('liftoff_project', JSON.stringify(data));
  };

  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand">Liftoff</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <button className="nav-link btn btn-link dropdown-toggle" data-bs-toggle="dropdown">File</button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={saveProject}>Save</button></li>
                  <li><button className="dropdown-item" onClick={() => window.location.reload()}>New</button></li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleRun}>Run</button>
              </li>
            </ul>
            <input 
              className="form-control w-25" 
              value={projectName} 
              onChange={(e) => setProjectName(e.target.value)} 
            />
          </div>
        </div>
      </nav>

      <div ref={blocklyRef} className="flex-grow-1 w-100 mt-5" id="blocklyDiv" />
    </div>
  );
};

export default App;

function generateGameHtml(code: string, sprites: Sprite[], projectName: string): string {
  // Logic to inject code into a template
  return `
    <html>
      <head><title>${projectName}</title></head>
      <body>
        <script>
          const sprites = ${JSON.stringify(sprites)};
          ${code}
        </script>
      </body>
    </html>`;
}