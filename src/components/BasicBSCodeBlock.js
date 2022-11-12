import React from "react";
import { CopyBlock, github } from "react-code-blocks";

const BasicBSCodeBlock = (props) => {
  return (
    <div>
      <CopyBlock
        text={props.code}
        language="python"
        showLineNumbers={false}
        theme={github}
        wrapLines
      />
    </div>
  );
};

export default BasicBSCodeBlock;
