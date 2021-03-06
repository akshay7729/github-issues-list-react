import React, { useState } from "react";
import Issues from "../Issues";

const Main = () => {
  const [key, setKey] = useState("issues");

  const handleTab = (activeKey) => {
    setKey(activeKey);
  };

  return (
    <React.Fragment>
      <div className="main-tabs d-flex">
        <div
          className={`pr-3 py-3 ${key === "code" ? "active" : ""}`}
          onClick={() => handleTab("code")}
        >
          <svg
            classes="UnderlineNav-octicon"
            display="none inline"
            height="16"
            className="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
            ></path>
          </svg>{" "}
          Code
        </div>
        <div
          className={`p-3 ${key === "issues" ? "active" : ""}`}
          onClick={() => handleTab("issues")}
        >
          <svg
            classes="UnderlineNav-octicon"
            display="none inline"
            height="16"
            className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
            ></path>
          </svg>{" "}
          Issues
        </div>
        <div
          className={`p-3 ${key === "pullrequests" ? "active" : ""}`}
          onClick={() => handleTab("pullrequests")}
        >
          <svg
            classes="UnderlineNav-octicon"
            display="none inline"
            height="16"
            className="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
            ></path>
          </svg>{" "}
          Pull Requests
        </div>
        <div
          className={`p-3 ${key === "actions" ? "active" : ""}`}
          onClick={() => handleTab("actions")}
        >
          <svg
            classes="UnderlineNav-octicon"
            display="none inline"
            height="16"
            className="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
            ></path>
          </svg>{" "}
          Actions
        </div>
        <div
          className={`p-3 ${key === "projects" ? "active" : ""}`}
          onClick={() => handleTab("projects")}
        >
          <svg
            classes="UnderlineNav-octicon"
            display="none inline"
            height="16"
            className="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
            ></path>
          </svg>{" "}
          Projects
        </div>
        <div
          className={`p-3 ${key === "wiki" ? "active" : ""}`}
          onClick={() => handleTab("wiki")}
        >
          <svg
            classes="UnderlineNav-octicon"
            display="none inline"
            height="16"
            className="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
            ></path>
          </svg>{" "}
          Wiki
        </div>
        <div
          className={`p-3 ${key === "security" ? "active" : ""}`}
          onClick={() => handleTab("security")}
        >
          <svg
            classes="UnderlineNav-octicon"
            display="none inline"
            height="16"
            className="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
            ></path>
          </svg>{" "}
          Security
        </div>
        <div
          className={`p-3 ${key === "insights" ? "active" : ""}`}
          onClick={() => handleTab("insights")}
        >
          <svg
            classes="UnderlineNav-octicon"
            display="none inline"
            height="16"
            className="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
            ></path>
          </svg>{" "}
          Insights
        </div>
        <div
          className={`p-3 ${key === "settings" ? "active" : ""}`}
          onClick={() => handleTab("settings")}
        >
          <svg
            classes="UnderlineNav-octicon"
            display="none inline"
            height="16"
            className="octicon octicon-gear UnderlineNav-octicon d-none d-sm-inline"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>{" "}
          Settings
        </div>
      </div>
      <div className="main-tab-content px-5 pt-3">
        <div className={key === "code" ? "d-block" : "d-none"}>code</div>
        <div className={key === "issues" ? "d-block" : "d-none"}>
          <Issues />
        </div>
        <div className={key === "pullrequests" ? "d-block" : "d-none"}>
          pullrequests
        </div>
        <div className={key === "actions" ? "d-block" : "d-none"}>actions</div>
        <div className={key === "projects" ? "d-block" : "d-none"}>
          projects
        </div>
        <div className={key === "wiki" ? "d-block" : "d-none"}>wiki</div>
        <div className={key === "security" ? "d-block" : "d-none"}>issues</div>
        <div className={key === "insights" ? "d-block" : "d-none"}>
          insights
        </div>
        <div className={key === "settings" ? "d-block" : "d-none"}>
          settings
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
