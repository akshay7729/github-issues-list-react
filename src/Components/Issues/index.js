import React, { useState, useRef, useEffect } from "react";
import DropdownComp from "./Dropdown";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { useSelector, useDispatch } from "react-redux";
import { ISSUES } from "../../Redux/Constants";

const Issues = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const issuesApiData = useSelector((state) => state.issues);
  const issuesApiDispatch = useDispatch();

  useEffect(() => {
    console.log("use effect loaded");
    !issuesApiData.issues.length && issuesApiDispatch({ type: ISSUES.LOAD });
  }, []);

  return (
    <div className="issues">
      {/* <div className="issues-count">
        <span>495 Open</span>
        <span> 5465 Closed</span>
      </div> */}
      <div className="issues-filters p-3 d-flex">
        <DropdownComp name="Author" />
        <DropdownComp name="Label" />
        <DropdownComp name="Projects" />
        <DropdownComp name="Milestones" />
        <DropdownComp name="Assignee" />
        <DropdownComp name="Sort" />
      </div>
      <div className="issues-list">
        <div className="issue px-4 d-flex pt-3 pb-3">
          <div class="issue-icon">
            <Button ref={target} onClick={() => setShow(!show)}>
              <svg
                class="octicon octicon-issue-opened open"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
                ></path>
              </svg>
            </Button>
            <Overlay target={target.current} show={show} placement="right">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  My Tooltip
                </Tooltip>
              )}
            </Overlay>
          </div>
          <div className="issue-desc w-100">
            <div>
              <a href="/" class="issue-title">
                Cannot call class as function" error in prod mode
              </a>
              <span className="bug-issue-pill issue-pill px-2 py-1 ml-2">
                issue: bug report
              </span>
              <span className="triage-issue-pill issue-pill px-2 py-1 ml-2">
                issue: bug report
              </span>
            </div>
            <div>#9514 opened 2 hours ago by oagbeja</div>
          </div>
          <div className="issue-comments">
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"
              ></path>
            </svg>{" "}
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issues;
