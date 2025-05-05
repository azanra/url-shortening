import { useState } from "react";

export default function Url() {
  const [linkList, setLinkList] = useState([]);
  const [urlLink, setUrlLink] = useState("");

  const handleLinkList = () => {
    const originalList = JSON.parse(JSON.stringify(linkList));
    originalList.push(urlLink);
    setLinkList(originalList);
  };
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
            <button onClick={handleLinkList}>Shorten It</button>
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
