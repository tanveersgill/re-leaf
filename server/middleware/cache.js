import Cache from "node-cache";

const cache = new Cache({ stdTTL: 3600 });

export const cacheMiddleware = (req, res, next) => {
  const requestedUrl = req.originalUrl;

  if (cache.has(requestedUrl)) {
    res.send(cache.get(requestedUrl)).status(200);
    return;
  }

  res.sendResponse = res.send;
  res.send = (body) => {
    cache.set(requestedUrl, body);
    res.sendResponse(body);
  };

  next();
};
