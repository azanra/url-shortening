import { useState } from "react";

export default function Url() {
  const [urlLink, setUrlLink] = useState("");
  return (
    <div>
      <div>
        <div className="urlContainer">
          <div className="urlInputContainer">
            <input
              type="text"
              placeholder="Shorten a link here"
              value={urlLink}
              onChange={(e) => setUrlLink(e.target.value)}
            />
            <span className="errorMessage"></span>
          </div>
          <div className="urlBtnContainer">
            <button>Shorten It</button>
          </div>
        </div>
        <div className="urlItemContainer">
          <UrlItem
            link={{ originalUrl: "originalUrl", shortenedUrl: "shortenedUrl" }}
          />
        </div>
      </div>
    </div>
  );
}

function UrlItem({ link }) {
  return (
    <div>
      <div>
        <p>{link.originalUrl}</p>
      </div>
      <div>
        <p>{link.shortenedUrl}</p>
      </div>
      <div>
        <button>Copy</button>
      </div>
    </div>
  );
}
