const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '../components/cloned-pages');
const src = fs.readFileSync(path.join(PAGES_DIR, 'home-content.js'), 'utf8');

// Extract raw HTML string
const rawStart = src.indexOf('String.raw`') + 'String.raw`'.length;
const rawEnd = src.lastIndexOf('`');
const rawHtml = src.slice(rawStart, rawEnd);

// Extract header (everything up to and including </header>)
const headerEnd = rawHtml.indexOf('</header>') + '</header>'.length;
const headerHtml = rawHtml.slice(0, headerEnd);

// Extract footer (<footer id="tw-footer"> to end)
const footerStart = rawHtml.indexOf('<footer id="tw-footer"');
const footerHtml = rawHtml.slice(footerStart);

console.log('Header:', headerHtml.length, 'chars');
console.log('Footer:', footerHtml.length, 'chars');

// ── HolyDeen Store main content ──────────────────────────────────────────────
const HOLYDEEN_MAIN = `
<div class="tw-hero-slider">
  <div class="slider-2" style="padding: 80px 0 60px;">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7">
          <div class="slider-content">
            <h1>HolyDeen <span>Store</span></h1>
            <p>Bangladesh's premier Islamic lifestyle e-commerce platform — fashion, cosmetics, gadgets, grocery and more in one place. Built and powered by DeenSoft.</p>
            <div style="margin-top:28px;display:flex;gap:14px;flex-wrap:wrap;">
              <a href="https://holydeen.vercel.app" target="_blank" rel="noopener" class="btn btn-dark" style="padding:12px 28px;">Visit HolyDeen Store</a>
              <a href="/ecommerce" class="btn btn-outline-light" style="padding:12px 28px;">Get Your Own Store</a>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="row">
            <div class="col-6"><div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px;margin-bottom:14px;text-align:center;"><h3 style="color:#22b04c;font-size:2rem;margin:0;">8+</h3><p style="color:#fff;margin:4px 0 0;">Categories</p></div></div>
            <div class="col-6"><div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px;margin-bottom:14px;text-align:center;"><h3 style="color:#22b04c;font-size:2rem;margin:0;">500+</h3><p style="color:#fff;margin:4px 0 0;">Products</p></div></div>
            <div class="col-6"><div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px;text-align:center;"><h3 style="color:#22b04c;font-size:2rem;margin:0;">10+</h3><p style="color:#fff;margin:4px 0 0;">Brands</p></div></div>
            <div class="col-6"><div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px;text-align:center;"><h3 style="color:#22b04c;font-size:2rem;margin:0;">Free</h3><p style="color:#fff;margin:4px 0 0;">Shipping</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<section id="tw-service" class="tw-service" style="padding:60px 0;">
  <div class="container">
    <div class="row text-center">
      <div class="col section-heading">
        <h2 class="wow fadeInUp"><span>Product</span> Categories
          <small>Shop from 8 categories covering every Islamic lifestyle need.</small>
        </h2>
        <span class="animate-border ml-auto mr-auto tw-mt-20"></span>
      </div>
    </div>
    <div class="row" style="margin-top:40px;">
      <div class="col-md-3 col-6 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:28px 20px 40px;">
          <div class="service-icon service-icon-bg-1 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128084;</div></div>
          <div class="service-content"><h3>Men's Fashion</h3><p>Shirts, pants, footwear, watches, belts and accessories.</p></div>
        </div>
      </div>
      <div class="col-md-3 col-6 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:28px 20px 40px;">
          <div class="service-icon service-icon-bg-2 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128155;</div></div>
          <div class="service-content"><h3>Women's Fashion</h3><p>Sarees, kurtis, salwar kameez, jewelry and handbags.</p></div>
        </div>
      </div>
      <div class="col-md-3 col-6 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:28px 20px 40px;">
          <div class="service-icon service-icon-bg-3 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128132;</div></div>
          <div class="service-content"><h3>Cosmetics</h3><p>Skincare, fragrances, makeup and hair care essentials.</p></div>
        </div>
      </div>
      <div class="col-md-3 col-6 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:28px 20px 40px;">
          <div class="service-icon service-icon-bg-4 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128241;</div></div>
          <div class="service-content"><h3>Gadgets</h3><p>Laptops, phones, audio equipment and tech accessories.</p></div>
        </div>
      </div>
      <div class="col-md-3 col-6 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:28px 20px 40px;">
          <div class="service-icon service-icon-bg-5 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128722;</div></div>
          <div class="service-content"><h3>Grocery</h3><p>Oils, ghee, spices, tea, eggs and specialty foods.</p></div>
        </div>
      </div>
      <div class="col-md-3 col-6 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:28px 20px 40px;">
          <div class="service-icon service-icon-bg-6 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#127968;</div></div>
          <div class="service-content"><h3>Home &amp; Lifestyle</h3><p>Bedding, cookware, cleaning and household essentials.</p></div>
        </div>
      </div>
      <div class="col-md-3 col-6 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:28px 20px 40px;">
          <div class="service-icon service-icon-bg-1 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#9728;&#65039;</div></div>
          <div class="service-content"><h3>Eid Collection</h3><p>Panjabis, three-piece suits and premium festive attire.</p></div>
        </div>
      </div>
      <div class="col-md-3 col-6 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:28px 20px 40px;">
          <div class="service-icon service-icon-bg-2 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#9998;&#65039;</div></div>
          <div class="service-content"><h3>Stationary &amp; Craft</h3><p>Markers, notebooks, art supplies and craft materials.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="home-clients-section" style="padding:40px 0;background:#f8f9fa;">
  <div class="container">
    <div class="home-clients-shell">
      <h4 class="home-clients-title">Featured Brands</h4>
      <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:20px;">
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Nike</span>
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Adidas</span>
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Bata</span>
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Samsung</span>
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Unilever</span>
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Basundhara</span>
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Lotto</span>
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Choetech</span>
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Easy</span>
        <span style="background:#e8f5ec;color:#0b2559;padding:10px 20px;border-radius:999px;font-size:1rem;font-weight:600;">Ielgy</span>
      </div>
    </div>
  </div>
</section>

<section id="tw-analysis" class="tw-analysis-area" style="padding:80px 0;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h2 class="column-title">Want Your Own E-Commerce Store?
          <p style="margin-top:16px;color:#fff;font-size:1rem;font-weight:400;">DeenSoft builds professional, scalable e-commerce platforms like HolyDeen. Get in touch to launch yours.</p>
        </h2>
        <div style="margin-top:28px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <a href="/ecommerce" class="btn btn-dark" style="padding:12px 28px;">See E-Commerce Solutions</a>
          <a href="/contact" class="btn btn-outline-light" style="padding:12px 28px;">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;

// ── E-Commerce Solution main content ─────────────────────────────────────────
const ECOM_MAIN = `
<div class="tw-hero-slider">
  <div class="slider-2" style="padding: 80px 0 60px;">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="slider-content">
            <h1>Launch Your <span>Online Store</span></h1>
            <p>DeenSoft builds professional, scalable e-commerce platforms tailored for your business. From product management to payment processing — we handle everything.</p>
            <div style="margin-top:18px;display:flex;flex-wrap:wrap;gap:10px;">
              <span style="background:rgba(255,255,255,0.15);color:#fff;padding:8px 16px;border-radius:999px;font-size:0.9rem;">Custom design</span>
              <span style="background:rgba(255,255,255,0.15);color:#fff;padding:8px 16px;border-radius:999px;font-size:0.9rem;">Payment integration</span>
              <span style="background:rgba(255,255,255,0.15);color:#fff;padding:8px 16px;border-radius:999px;font-size:0.9rem;">Mobile optimized</span>
              <span style="background:rgba(255,255,255,0.15);color:#fff;padding:8px 16px;border-radius:999px;font-size:0.9rem;">SEO ready</span>
            </div>
            <div style="margin-top:28px;display:flex;gap:14px;flex-wrap:wrap;">
              <a href="/contact" class="btn btn-dark" style="padding:12px 28px;">Request a Demo</a>
              <a href="/holydeen-store" class="btn btn-outline-light" style="padding:12px 28px;">See Live Example</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div style="background:rgba(255,255,255,0.08);border-radius:16px;padding:28px;">
            <p style="color:#22b04c;font-weight:700;font-size:0.85rem;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px;">Live Showcase</p>
            <h3 style="color:#fff;font-size:1.6rem;margin-bottom:10px;">HolyDeen Store</h3>
            <p style="color:rgba(255,255,255,0.8);font-size:0.95rem;line-height:1.7;margin-bottom:16px;">Bangladesh's premier Islamic lifestyle e-commerce platform — built by DeenSoft. 8 product categories, 500+ products, 10+ brands.</p>
            <a href="https://holydeen.vercel.app" target="_blank" rel="noopener" class="btn btn-dark" style="padding:10px 24px;">Visit HolyDeen Store &#8594;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<section id="tw-service" class="tw-service" style="padding:60px 0;">
  <div class="container">
    <div class="row text-center">
      <div class="col section-heading">
        <h2 class="wow fadeInUp"><span>Platform</span> Features
          <small>Everything your store needs — product management, orders, payments and more.</small>
        </h2>
        <span class="animate-border ml-auto mr-auto tw-mt-20"></span>
      </div>
    </div>
    <div class="row" style="margin-top:40px;">
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-content"><h3>Product Management</h3><p>Add, edit and organize unlimited products with categories, variants and stock tracking.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-content"><h3>Order Management</h3><p>Track every order from placement to delivery. Manage statuses, cancellations and returns.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-content"><h3>Payment Integration</h3><p>Accept bKash, Nagad, bank transfer, cash on delivery and international gateways.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-content"><h3>Customer Accounts</h3><p>Customers can register, track orders, manage wishlist and re-order from their dashboard.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-content"><h3>Mobile Responsive</h3><p>Fully optimized for mobile, tablet and desktop. Your customers shop on any device.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-content"><h3>SEO Optimized</h3><p>Built-in SEO tools with meta tags, sitemap generation and fast page loads.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-content"><h3>Analytics Dashboard</h3><p>Track sales, revenue, top products and customer behavior in real-time.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-content"><h3>Shipping Management</h3><p>Set shipping zones, rates and free shipping thresholds. Integrate with delivery services.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-content"><h3>Promo &amp; Discounts</h3><p>Create coupon codes, flash sales and bundle deals to boost conversions.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="main-container" class="main-container" style="padding:60px 0;">
  <div class="container">
    <div class="row text-center">
      <div class="col section-heading">
        <h2><span>How It Works</span>
          <small>From idea to live store — we follow a proven process to deliver on time, on budget.</small>
        </h2>
        <span class="animate-border ml-auto mr-auto tw-mt-20"></span>
      </div>
    </div>
    <div class="row" style="margin-top:40px;">
      <div class="col-md-3 text-center" style="margin-bottom:30px;">
        <div style="width:56px;height:56px;border-radius:50%;background:#22b04c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;margin:0 auto 16px;">01</div>
        <h4 style="font-weight:700;margin-bottom:10px;">Requirement Gathering</h4>
        <p style="color:#536079;">We understand your business, products and customers to plan the perfect store.</p>
      </div>
      <div class="col-md-3 text-center" style="margin-bottom:30px;">
        <div style="width:56px;height:56px;border-radius:50%;background:#22b04c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;margin:0 auto 16px;">02</div>
        <h4 style="font-weight:700;margin-bottom:10px;">Design &amp; Development</h4>
        <p style="color:#536079;">A fully custom, branded online store with your logo, colors and product catalog.</p>
      </div>
      <div class="col-md-3 text-center" style="margin-bottom:30px;">
        <div style="width:56px;height:56px;border-radius:50%;background:#22b04c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;margin:0 auto 16px;">03</div>
        <h4 style="font-weight:700;margin-bottom:10px;">Testing &amp; Launch</h4>
        <p style="color:#536079;">Thorough testing across devices and payment gateways before going live.</p>
      </div>
      <div class="col-md-3 text-center" style="margin-bottom:30px;">
        <div style="width:56px;height:56px;border-radius:50%;background:#22b04c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;margin:0 auto 16px;">04</div>
        <h4 style="font-weight:700;margin-bottom:10px;">Support &amp; Growth</h4>
        <p style="color:#536079;">Ongoing maintenance, feature additions and performance optimization after launch.</p>
      </div>
    </div>
  </div>
</section>

<section id="tw-analysis" class="tw-analysis-area" style="padding:80px 0;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h2 class="column-title">Ready to Launch Your Store?
          <p style="margin-top:16px;color:#fff;font-size:1rem;font-weight:400;">Tell us about your business and we will build the perfect e-commerce solution.</p>
        </h2>
        <div style="margin-top:28px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <a href="/contact" class="btn btn-dark" style="padding:12px 28px;">Contact Us Today</a>
          <a href="https://holydeen.vercel.app" target="_blank" rel="noopener" class="btn btn-outline-light" style="padding:12px 28px;">See Live Demo</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const WA = `
        <a href="https://wa.me/8801518301098?text=Hi, I'm Interested in DeenSoft"
            className="fixed-bottomRight  whatsappIcon" >
            <img src="https://www.eductrl.com/images/whatsapp.png" alt="icon" class="fixed-bottomRight whatsappIcon" loading="lazy">
        </a>`;

// Write files
const holyDeenFile = `import { normalizeCloneHtml } from "@/lib/clone-html";

const rawHtml = String.raw\`
${headerHtml}

${HOLYDEEN_MAIN}
${WA}
                    <${footerHtml}
\`;

const html = normalizeCloneHtml(rawHtml);

export function HolyDeenStoreCloneContent() {
  return (
    <div
      className="eductrl-clone-page"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
`;

const ecomFile = `import { normalizeCloneHtml } from "@/lib/clone-html";

const rawHtml = String.raw\`
${headerHtml}

${ECOM_MAIN}
${WA}
                    <${footerHtml}
\`;

const html = normalizeCloneHtml(rawHtml);

export function EcommerceCloneContent() {
  return (
    <div
      className="eductrl-clone-page"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
`;

fs.writeFileSync(path.join(PAGES_DIR, 'holydeen-content.js'), holyDeenFile);
fs.writeFileSync(path.join(PAGES_DIR, 'ecommerce-content.js'), ecomFile);
console.log('Done. holydeen-content.js and ecommerce-content.js created.');
