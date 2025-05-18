import { useEffect, useState } from "react";
import urlClient from "../client/urlClient.js";

let lastId = 0;

export default function Url() {
  const [url, setUrl] = useState([]);
  const [link, setLink] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const urlLocal = JSON.parse(localStorage.getItem("url"));
    if (urlLocal === null) {
      return;
    }
    urlLocal.length > 0 && setUrl(urlLocal);
  }, []);

  useEffect(() => {
    const stringUrl = JSON.stringify(url);
    localStorage.setItem("url", stringUrl);
  }, [url]);

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
    } else if (isUrlEmpty(link)) {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 3000);
    } else {
      alert("URL is not valid");
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
  const [isCopied, setIsCopied] = useState(false);
  const { originalUrl, shortenedUrl } = link;
  return (
    <div>
      <div>
        <p>{originalUrl}</p>
      </div>
      <div>
        <p>{shortenedUrl}</p>
      </div>
      <div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(shortenedUrl);
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 3000);
          }}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
