import { useState } from "react";
import urlClient from "../client/urlClient.js";

export default function Url() {
  const [url, setUrl] = useState([]);
  const [link, setLink] = useState("");

  const handleUrl = () => {
    setUrl([
      ...url,
      {
        originalUrl: link,
        shortenedUrl: urlClient(link),
      },
    ]);
  };
  return (
    <div>
      <div>
        <div className="urlContainer">
          <div className="urlInputContainer">
            <input
              type="text"
              placeholder="Shorten a link here"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <span className="errorMessage"></span>
          </div>
          <div className="urlBtnContainer">
            <button onClick={handleUrl}>Shorten It</button>
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
