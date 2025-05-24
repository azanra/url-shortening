import { useEffect, useState } from "react";
import urlClient from "../client/urlClient.js";

export default function UrlWrapper() {
  const initialUrl = JSON.parse(localStorage.getItem("url"));
  return <Url initalUrl={initialUrl === null ? [] : initialUrl} />;
}

function Url({ initalUrl }) {
  const [url, setUrl] = useState(initalUrl);
  const [link, setLink] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (url.length > 0) {
      const stringUrl = JSON.stringify(url);
      localStorage.setItem("url", stringUrl);
    }
  }, [url]);

  const handleUrl = async () => {
    if (isValidUrl(link)) {
      setUrl([
        ...url,
        {
          id: url.length,
          originalUrl: link,
          shortenedUrl: await urlClient(link),
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
    <div className="center">
      <div className="w-[70%]">
        <div className="urlContainer urlInput flex justify-between p-16">
          <div className="urlInputContainer  w-[80%]">
            <input
              type="text"
              placeholder="Shorten a link here"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="bg-white h-[50px] w-full"
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
