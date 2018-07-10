import React from "react";
import MonacoEditor from "react-monaco-editor";
import styled from "styled-components";

import html from "./html";
import { Button } from "../styled";

const Root = styled.div`
  display: flex;
`;

const EditorContainer = styled.div`
  border: 1px solid gray;
`;

const ButtonsBox = styled.div`
  padding: 0 2rem;
`;

const ButtonRow = styled.div`
  margin-bottom: 1rem;
`;

interface EditorProps {}

interface EditorState {
  code: string;
}

class Editor extends React.Component<EditorProps, EditorState> {
  constructor(props) {
    super(props);
    this.state = {
      code: html
    };
  }

  onChange = newValue => {
    this.setState({ code: newValue });
  };

  editorDidMount = editor => {
    this.editor = editor;
  };

  changeEditorValue = () => {
    if (this.editor) {
      this.editor.setValue("// code changed! \n");
    }
  };

  changeBySetState = () => {
    this.setState({ code: "// code changed by setState! \n" });
  };

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: false,
      fontSize: 11
    };
    return (
      <Root>
        <EditorContainer>
          <MonacoEditor
            height="600"
            width="900"
            language="html"
            theme="vs"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </EditorContainer>
        <ButtonsBox>
          <ButtonRow>
            <Button>Generate Pdf</Button>
          </ButtonRow>
          <ButtonRow>
            <Button>Download Pdf</Button>
          </ButtonRow>
        </ButtonsBox>
      </Root>
    );
  }
}

export default Editor;
