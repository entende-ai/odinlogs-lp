// Serves the static landing page. Plain HTTP and www.odinlogs.com are
// redirected to https://odinlogs.com.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === "http:" || url.hostname === "www.odinlogs.com") {
      url.protocol = "https:";
      url.hostname = "odinlogs.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
