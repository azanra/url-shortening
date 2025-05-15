export default async function urlClient(originalUrl) {
  const API_KEY =
    "bdj4SGxmk5BMqSNxUF8Wxz8rhMB9iEIDKP304YVeTvMVomEixJSYjfNUGES1";
  const API_URL = "https://api.tinyurl.com/create";
  const data = {
    url: originalUrl,
  };
  const requestOption = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(API_URL, requestOption)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed, response is not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data.data.tiny_url;
    })
    .catch((error) => {
      console.log("Error", error);
    });
  return response;
}
