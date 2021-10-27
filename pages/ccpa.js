import fragment from "react";
import Code from "../Code";
import { useState, useEffect } from "react";

const Ccpa = (props) => {
  const [uuids, setUuids] = useState([]);
  const [emails, setEmails] = useState([]);
  const [zdesk, setZdesk] = useState([]);
  const [results, setResults] = useState([]);
  const [generateState, setGenerateState] = useState(false);

  const generate = async () => {
    const uuidInput = document.getElementById("uuid").value;
    const uuidAaray = uuidInput.split(" ");
    setUuids(uuidAaray);

    const emailInput = document.getElementById("email").value;
    const emailAaray = emailInput.split(" ");
    setEmails(emailAaray);

    const zdeskInput = document.getElementById("zdesk").value;
    const zdeskAaray = zdeskInput.split(
      "https://upside.zendesk.com/agent/tickets/"
    );
    let arrFiltered = zdeskAaray.filter(Boolean);
    setZdesk(arrFiltered);

    if (
      arrFiltered.length === emailAaray.length &&
      uuidAaray.length === emailAaray.length
    ) {
      var codeObj = [];
      var i;
      for (i = 0; i < uuidAaray.length; i++) {
        codeObj.push({
          email: emails[i],
          uuid: uuids[i],
          ticket: zdesk[i],
        });
      }
      setResults(codeObj);
      setGenerateState(true);
    } else console.error("sizes dont match");
  };

  return (
    <>
      <div className="mx-10 my-10">
        <div className="flex "> </div>
        <form className="w-full">
          <div className="">
            <label>
              uuids
              <input
                id="uuid"
                className=" h-32 shadow appearance-none border rounded w-full  text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </label>
          </div>

          <div className="">
            <label>
              Emails
              <input
                id="email"
                className=" h-32 shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </label>
          </div>
          <div className="">
            <label>
              Zendesk Tickets
              <input
                id="zdesk"
                className="h-32 shadow appearance-none border rounded w-full  text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
              ></input>
            </label>
          </div>
        </form>
      </div>

      <button
        onClick={generate}
        className="font-mono mx-auto bg-gray-500 hover:bg-blue-300 text-white font-bold py-2 px-4 my-6 rounded w-full mono-type"
      >
        generate
      </button>
      <Code list={results} show={generateState}></Code>
    </>
  );
};

export default Ccpa;
