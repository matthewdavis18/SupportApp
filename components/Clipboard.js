import {
  ClipboardIcon,
  ClipboardCheckIcon,
  HandIcon,
} from "@heroicons/react/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
const Clipboard = (props) => {
  const [copied, setCopied] = useState(true);

  return (
    <CopyToClipboard text={props.code} onCopy={() => setCopied(!copied)}>
      <div className="float-right">
        <ClipboardIcon
          className={copied ? "h-6 w-6 text-gray-500" : "hidden"}
        ></ClipboardIcon>
        <ClipboardCheckIcon
          className={copied ? "hidden" : "h-6 w-6 text-gray-500"}
        ></ClipboardCheckIcon>
      </div>
    </CopyToClipboard>
  );
};

export default Clipboard;
