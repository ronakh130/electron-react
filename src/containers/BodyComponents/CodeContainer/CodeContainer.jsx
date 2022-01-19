import './CodeContainer.css';
import Editor, { useMonaco } from "@monaco-editor/react";



const CodeContainer = () => {

  // const monaco = useMonaco();

  // const setTheme = () => {
  //   fetch('../../../../public/Themes/Amy.json')
  //   .then(data => data.json())
  //   .then(data => {
  //     monaco.editor.defineTheme('amy', data);
  //     monaco.editor.setTheme('amy');
  //   })
  // }

 
  return (
    <div className="codeContainer">

    <Editor
     height="80vh"
     defaultLanguage="javascript"
     defaultValue="see your component code here..."
     theme="vs-dark"
    //  options={{
    //           minimap: {
    //             enabled: false,
    //           },
    //           fontSize: 14,
    //           cursorStyle: "block",
    //           wordWrap: "on",
    //         }}
    //  theme="amy"
    />
    </div>
  )
}


export default CodeContainer;
