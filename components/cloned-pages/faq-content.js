import { normalizeCloneHtml } from "@/lib/clone-html";

const rawHtml = String.raw`
<div id="main-wrapper">
  <div class="tw-top-bar tw-top-bar-angle bg-offwhite mbv-none">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-left">
          <div class="top-contact-info">
            <span><i class="icon icon-phone3"></i>+8801518301098</span>
            <span><i class="icon icon-envelope"></i>info@deensoft.org</span>
          </div>
        </div>
        <div class="col-md-4 ml-auto text-right">
          <div class="top-social-links">
            <span>Follow us:</span>
            <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
            <a target="_blank" href="#" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a>
            <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <header>
    <div class="tw-header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-new-blue p-2">
          <a class="navbar-brand tw-nav-brand header-size" href="/">
            <img src="/images/logo.png" alt="DeenSoft" class="header-logo-size">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link p-2" href="/">Home</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link p-2" href="#" data-toggle="dropdown">Products <span class="tw-indicator"><i class="fa fa-angle-down"></i></span></a>
                <ul id="tw-megamenu" class="dropdown-menu tw-mega-menu p-4" style="min-width:500px;">
                  <div class="row justify-content-start p-2">
                    <div class="col-6 mb-3 hover-scale p-3"><a href="/consultancy"><p class="font-weight-bold m-0 p-0" style="font-size:15px;">EduConnect CRM</p><p class="text-muted p-0 m-0 mt-2">CRM software for study abroad consultancy</p></a></div>
                    <div class="col-6 mb-3 hover-scale p-3"><a href="/holydeen-store"><p class="font-weight-bold m-0 p-0" style="font-size:15px;">HolyDeen Store</p><p class="text-muted p-0 m-0 mt-2">Islamic lifestyle e-commerce</p></a></div>
                    <div class="col-6 hover-scale p-3"><a href="/ecommerce"><p class="font-weight-bold m-0 p-0" style="font-size:15px;">E-Commerce Solution</p><p class="text-muted p-0 m-0 mt-2">Launch your own online store</p></a></div>
                  </div>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link p-2" href="/pricing">Pricing</a></li>
              <li class="nav-item"><a class="nav-link p-2" href="/blog">Blog</a></li>
              <li class="nav-item"><a class="nav-link p-2" href="/about">About Us</a></li>
              <li class="nav-item"><a class="nav-link p-2" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div class="tw-offcanvas-menu d-none d-md-block">
            <button class="btn btn-dark mobile-display-none" data-toggle="modal" data-target="#enquiryModal" style="padding:10px 20px;margin-right:25px;">Free Demo</button>
            <div class="tw-menu-bar inline-menu"><span></span><span></span><span></span></div>
          </div>
        </nav>
      </div>
    </div>
  </header>

  <section class="faq-hero">
    <div class="container text-center">
      <h1>FAQ</h1>
      <p>Frequently Asked Questions</p>
    </div>
  </section>

  <section class="faq-page-section">
    <div class="container">
      <div class="faq-list">
        <details class="faq-item" open>
          <summary>What are the pre-requisites to use DeenSoft Software?</summary>
          <div class="faq-answer">
            <ul>
              <li>If you own a domain name, DeenSoft Software can be setup on the sub-domain (ex: student.yourwebsite.com) or on the main domain (ex: yourwebsite.com).</li>
              <li>The DNS (A) record for your domain or subdomain must be added to the IP address provided by us.</li>
              <li>You must provide an email account with SMTP details for sending email notifications from the software.</li>
              <li>If you do not own a domain name, DeenSoft Software can be setup on our hosted subdomain.</li>
            </ul>
          </div>
        </details>

        <details class="faq-item" open>
          <summary>Do you charge a setup-fee? How much time is required to setup DeenSoft?</summary>
          <div class="faq-answer">
            <p>No, there is no setup fee. Your software will be setup within 1 day after required access and information are provided.</p>
          </div>
        </details>

        <details class="faq-item">
          <summary>Is there any limit on no. of student registrations?</summary>
          <div class="faq-answer">
            <p>No. Student registration is unlimited in every plan. Only user and branch limits change based on the selected plan.</p>
          </div>
        </details>

        <details class="faq-item">
          <summary>How secure is my data on your server?</summary>
          <div class="faq-answer">
            <p>Your data is protected with secure hosting, authenticated access, regular backups, and role-based permissions inside the CRM.</p>
          </div>
        </details>

        <details class="faq-item">
          <summary>How do you provide customer support?</summary>
          <div class="faq-answer">
            <p>We provide support through WhatsApp, phone, email, and remote assistance. Priority support is available for higher plans.</p>
          </div>
        </details>

        <details class="faq-item">
          <summary>Can I host the software on my server?</summary>
          <div class="faq-answer">
            <p>Yes. Self-hosted deployment is available for clients who want to run the software on their own server.</p>
          </div>
        </details>

        <details class="faq-item">
          <summary>Can DeenSoft software be customized?</summary>
          <div class="faq-answer">
            <p>Yes. Custom modules, workflow changes, reports, and integrations can be developed based on your business requirements.</p>
          </div>
        </details>
      </div>
    </div>
  </section>

  <a href="#" className="fixed-bottomRight whatsappIcon">
    <img src="/images/whatsapp.svg" alt="icon" class="fixed-bottomRight whatsappIcon" loading="lazy">
  </a>

  <footer id="tw-footer" class="tw-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-4">
          <div class="tw-footer-info-box">
            <a href="/" class="footer-logo">
              <img src="/images/logo.png" alt="DeenSoft" style="width:220px;">
            </a>
            <p class="footer-info-text" style="font-size: 14px;line-height: 24px;">
              Running an Education Consultancy/ Coaching business involves various activities. You need a good & powerful software system to manage your business more efficiently & provide good services to your students.<br /><br />DeenSoft Software is the perfect, affordable solution for your business.
            </p>
            <div class="footer-social-link">
              <h3>Follow us</h3>
              <ul>
                <li><a target="_blank" href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a target="_blank" href="#" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a></li>
                <li><a target="_blank" href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-8">
          <div class="row mt-30">
            <div class="col-md-6">
              <div class="contact-us">
                <div class="contact-icon"><i class="icon icon-envelope3"></i></div>
                <div class="contact-info">
                  <h3>info@deensoft.org</h3>
                  <p>Mail Us</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="contact-us contact-us-last">
                <div class="contact-icon"><i class="icon icon-phone3"></i></div>
                <div class="contact-info">
                  <h3 style="display:flex;">+8801518301098</h3>
                  <p style="display: flex;">Call or Whatsapp</p>
                  <p style="display:flex;justify-content: center;">
                    <a class="footer-icon" href="#"><i class="fa fa-whatsapp" aria-hidden="true" style="font-size: 30px;"></i></a> &nbsp;&nbsp;&nbsp;
                    <a class="footer-icon" href="tel:+8801518301098"><i class="fa fa-phone-square" aria-hidden="true" style="font-size: 30px;"></i></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="footer-widget footer-left-widget">
                <div class="section-heading">
                  <h3>Useful Links</h3>
                  <span class="animate-border border-black"></span>
                </div>
                <ul>
                  <li><a href="/consultancy">Consultancy CRM</a></li>
                  <li><a href="/coaching">Coaching CRM</a></li>
                  <li><a href="/pricing">Pricing</a></li>
                  <li><a href="/faq">FAQ</a></li>
                </ul>
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="footer-widget">
                <div class="section-heading">
                  <h3>Subscribe</h3>
                  <span class="animate-border border-black"></span>
                </div>
                <p>Don't miss to subscribe to our news feeds, kindly fill the form below.</p>
                <form action="#" onsubmit="return false;">
                  <div class="form-row">
                    <div class="col tw-footer-form">
                      <input id="newsletter_email" type="email" class="form-control" placeholder="Email Address">
                      <button id="newsletter-form-btn" type="submit"><i class="fa fa-send"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-7"><span>&copy; 2026, All Right Reserved. DeenSoft</span></div>
          <div class="col-md-5">
            <div class="copyright-menu">
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <style>
    .faq-hero {
      background: linear-gradient(135deg, #061b3a 0%, #0b2559 62%, #0f6d3a 100%);
      padding: 94px 0 90px;
      position: relative;
      overflow: hidden;
    }
    .faq-hero:after {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 86% 42%, rgba(34,176,76,0.22), transparent 36%);
      pointer-events: none;
    }
    .faq-hero h1 {
      color: #ffffff;
      font-size: 44px;
      font-weight: 900;
      margin-bottom: 10px;
    }
    .faq-hero p {
      color: rgba(255,255,255,0.82);
      font-size: 17px;
      margin: 0;
    }
    .faq-page-section {
      background: #f4fbf6;
      padding: 70px 0 92px;
      min-height: 58vh;
    }
    .faq-list {
      max-width: 980px;
      margin: 0 auto;
    }
    .faq-item {
      border: 1px solid rgba(11,37,89,0.1);
      border-radius: 8px;
      margin-bottom: 14px;
      background: #fff;
      box-shadow: 0 14px 34px rgba(11,37,89,0.06);
      overflow: hidden;
    }
    .faq-item summary {
      list-style: none;
      cursor: pointer;
      padding: 20px 64px 20px 26px;
      color: #0b2559;
      font-weight: 900;
      font-size: 16px;
      position: relative;
    }
    .faq-item summary::-webkit-details-marker {
      display: none;
    }
    .faq-item summary:after {
      content: "+";
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      color: #22b04c;
      font-size: 22px;
      font-weight: 800;
    }
    .faq-item[open] summary:after {
      content: "-";
    }
    .faq-answer {
      padding: 0 26px 22px;
      color: #243b67;
      font-size: 16px;
      line-height: 1.75;
    }
    .faq-answer ul {
      margin: 6px 0 0;
      padding-left: 18px;
    }
    .faq-answer p {
      margin: 0;
    }
    @media (max-width: 767px) {
      .faq-hero {
        padding: 58px 0;
      }
      .faq-page-section {
        padding: 30px 0 70px;
      }
      .faq-item summary {
        padding: 15px 42px 15px 16px;
      }
      .faq-answer {
        padding: 0 16px 16px;
      }
      .faq-item summary:after {
        right: 16px;
      }
    }
  </style>
</div>
`;

const html = normalizeCloneHtml(rawHtml);

export function FaqCloneContent() {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
