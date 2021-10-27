import { ClipboardIcon, ClipboardCheckIcon } from "@heroicons/react/outline";
import Clipboard from "./Clipboard";
import { useState } from "react";
const Code = (props) => {
  const [show, setShow] = useState(true);
  if (props.show) {
    return props.list.map((result) => {
      return (
        <div className=" border-black mx-5 border-2 px-3 font-mono py-10">
          getupside account.delete_user -t prod -u {result.uuid} -c 'zd
          {result.ticket}' -e {result.email} --hard
          <Clipboard
            code={`getupside account.delete_user -t prod -u ${result.uuid} -c 'zd${result.ticket}' -e ${result.email} --hard`}
          ></Clipboard>
        </div>
      );
    });
  } else return null;
};

export default Code;
