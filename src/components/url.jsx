import { useState } from "react";
import urlClient from "../client/urlClient.js";

let lastId = 0;

export default function Url() {
  const [url, setUrl] = useState([]);
  const [link, setLink] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleUrl = () => {
    if (isValidUrl(link)) {
      setUrl([
        ...url,
        {
          id: lastId++,
          originalUrl: link,
          shortenedUrl: "shortened url",
        },
      ]);
      setIsEmpty(false);
    } else if (isUrlEmpty(link)) {
      setIsEmpty(true);
    } else {
      alert("URL is not valid");
      setIsEmpty(false);
    }
  };

  const isValidUrl = (link) => {
    const result = URL.canParse(link);
    return result;
  };

  const isUrlEmpty = (link) => {
    if (link === "") {
      return true;
    } else {
      return false;
    }
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
            <p className="errorMessage">
              {isEmpty && (
                <span style={{ color: "red" }}>Please add a link</span>
              )}
            </p>
          </div>
          <div className="urlBtnContainer">
            <button onClick={handleUrl}>Shorten It</button>
          </div>
        </div>
        <div className="urlItemContainer">
          {url.length > 0 &&
            url.map((item) => {
              return <UrlItem link={item} key={item.id} />;
            })}
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
