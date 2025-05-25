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
    <div className="center mt-32">
      <div className="w-[70%]">
        <div className="urlContainer urlInput p-16 rounded-xl h-[225px]">
          <div className="flex justify-between items-center pt-4">
            <div className="urlInputContainer  w-[80%]">
              <input
                type="text"
                placeholder="Shorten a link here"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
                className="bg-white h-[50px] w-full rounded-xl p-8 border-1 border-(--Gray)"
              />
            </div>
            <div className="urlBtnContainer">
              <button onClick={handleUrl} className="button h-[66px] w-[215px]">
                Shorten It!
              </button>
            </div>
          </div>
          <i className="errorMessage absolute mt-3 ml-1">
            {isEmpty && <span style={{ color: "red" }}>Please add a link</span>}
          </i>
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
    <div className="flex gap-8 p-6 mt-6 bg-white rounded-xl">
      <div className="w-[65%] flex items-center">
        <p>{originalUrl}</p>
      </div>
      <div className="w-[20%] flex items-center">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={shortenedUrl}
          className="text-(--Cyan)"
        >
          {shortenedUrl}
        </a>
      </div>
      <div>
        <button
          className="copy"
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
