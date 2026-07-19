const LOCAL_ROUTE_MAP = {
  "/": "/",
  "/consultancy": "/consultancy",
  "/coaching": "/coaching",
  "/eductrl-cms": "/eductrl-cms",
  "/pricing": "/pricing",
  "/faq": "/faq",
  "/knowledgebase": "/knowledgebase",
  "/blog": "/blog",
  "/about": "/about",
  "/contact": "/contact",
  "/resources": "/resources"
};

const LOCAL_ASSET_MAP = {
  "/images/eductrl-logo.png": "/images/logo.png",
  "/images/whatsapp.png": "/images/whatsapp.svg",
  "/images/we/admin.jpg": "/images/admin-panel.png",
  "/images/we/student.jpg": "/images/student-panel.png",
  "/images/we/agent.jpg": "/images/agent-panel.png",
  "/images/icon/phone-call.png": "/images/whatsapp.svg",
  "/images/icon/whatsapp.png": "/images/whatsapp.svg"
};

function replaceAssets(html) {
  let nextHtml = html;

  for (const [from, to] of Object.entries(LOCAL_ASSET_MAP)) {
    nextHtml = nextHtml.replaceAll(from, to);
  }

  return nextHtml
    .replace(/<img([^>]*?)src="\/images\/sm\/(?:paypal|razorpay)\.png"[^>]*>/gi, "")
    .replace(/src="https?:\/\/[^"]+"/g, 'src="/images/hero-diagram.png"')
    .replace(/srcset="https?:\/\/[^"]+"/g, "")
    .replace(/url\(https?:\/\/[^)]+\)/g, "url(/images/hero-diagram.png)");
}

export function normalizeCloneHtml(rawHtml) {
  let normalizedHtml = rawHtml
    .replace(
      /<div class="offcanvas-menu">[\s\S]*?(?=<div class="modal fade" id="enquiryModal"|<div class="tw-top-bar|<header>)/i,
      ""
    )
    .replace(
      /<div class="modal fade" id="enquiryModal"[\s\S]*?(?=<div class="tw-top-bar|<header>)/i,
      ""
    )
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/ className=/g, " class=");

  normalizedHtml = replaceAssets(normalizedHtml);

  for (const [from, to] of Object.entries(LOCAL_ROUTE_MAP)) {
    normalizedHtml = normalizedHtml.replaceAll(`href="${from}"`, `href="${to}"`);
    normalizedHtml = normalizedHtml.replaceAll(`href="${from}/"`, `href="${to}"`);
  }

  return normalizedHtml.replace(/href="https?:\/\/[^"]+"/g, 'href="#"');
}
