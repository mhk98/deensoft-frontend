const fs = require('fs');
const fp = 'h:/deensoft/deensoft-frontend/components/cloned-pages/pricing-content.js';
let content = fs.readFileSync(fp, 'utf8');

const sectionStart = content.indexOf('<section id="tw-pricing-one"');
let depth = 0, i = sectionStart, sectionEnd = -1;
while (i < content.length) {
  if (content.slice(i, i+8) === '<section') depth++;
  if (content.slice(i, i+10) === '</section>') { depth--; if(depth===0){sectionEnd=i+10;break;} }
  i++;
}

const NEW_PRICING = `<section id="tw-pricing-one" class="tw-pricing" style="margin-bottom:20px;padding:60px 0;border-top:1px solid #E4E4E4;">
  <div class="container">

    <!-- Section Heading -->
    <div class="row text-center mb-4">
      <div class="col section-heading">
        <h2><span>Bangladesh</span> Market Pricing
          <small>সকল মূল্য বাংলাদেশি টাকায় (BDT)। বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।</small>
        </h2>
        <span class="animate-border ml-auto mr-auto tw-mt-20"></span>
      </div>
    </div>

    <!-- Product Tabs -->
    <div class="pricing-tab">
      <ul class="nav" id="pricingTabs">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#tab-consultancy">Consultancy CRM</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#tab-holydeen">HolyDeen Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#tab-ecommerce">E-Commerce Solution</a>
        </li>
      </ul>

      <div class="tab-content tw-tab-content" style="margin-top:40px;">

        <!-- ── Tab 1: Consultancy CRM ── -->
        <div class="tab-pane fade show active" id="tab-consultancy">
          <div class="row text-center mb-3">
            <div class="col">
              <p style="color:#536079;font-size:1rem;">Study Abroad Consultancy CRM — মাসিক সাবস্ক্রিপশন</p>
            </div>
          </div>
          <div class="row justify-content-center">

            <!-- Starter -->
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box h-100" style="box-shadow:0 0 30px rgba(0,0,0,0.14);">
                <div class="pricing-feaures" style="margin-top:0 !important;">
                  <h3 class="pb-3 mx-auto" style="text-align:center;border-bottom:1px solid #cfcfcf;width:90%;">Starter</h3>
                  <div class="pricing-price">
                    <p class="p-2">ছোট কনসালটেন্সি অফিসের জন্য</p>
                    <sup style="font-size:1.2rem;font-weight:700;">৳</sup>
                    <strong style="font-size:2.5rem;">1,500</strong><br>
                    <span>/মাস · সর্বোচ্চ ৩ জন</span>
                  </div>
                  <ul class="list-unstyled mt-3 px-3" style="text-align:left;font-size:0.92rem;">
                    <li>✔ Lead Management</li>
                    <li>✔ Student Management</li>
                    <li>✔ Basic Reports</li>
                    <li>✔ Email Support</li>
                    <li style="color:#bbb;">✗ University Applications</li>
                    <li style="color:#bbb;">✗ Agent Management</li>
                    <li style="color:#bbb;">✗ API Access</li>
                  </ul>
                </div>
                <div style="text-align:center;padding:16px 15px;">
                  <a href="/contact" class="btn btn-outline" style="margin-bottom:8px;">যোগাযোগ করুন</a>
                </div>
              </div>
            </div>

            <!-- Growth (Featured) -->
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box h-100" style="box-shadow:0 0 30px rgba(34,176,76,0.3);border:2px solid #22b04c;">
                <div class="pricing-feaures" style="margin-top:0 !important;">
                  <div style="background:#22b04c;color:#fff;text-align:center;padding:6px;border-radius:4px 4px 0 0;font-weight:700;font-size:0.85rem;">সবচেয়ে জনপ্রিয়</div>
                  <h3 class="pb-3 mx-auto mt-2" style="text-align:center;border-bottom:1px solid #cfcfcf;width:90%;color:#22b04c;">Growth</h3>
                  <div class="pricing-price">
                    <p class="p-2">বেড়ে ওঠা ব্যবসার জন্য</p>
                    <sup style="font-size:1.2rem;font-weight:700;">৳</sup>
                    <strong style="font-size:2.5rem;">3,500</strong><br>
                    <span>/মাস · সর্বোচ্চ ১৫ জন</span>
                  </div>
                  <ul class="list-unstyled mt-3 px-3" style="text-align:left;font-size:0.92rem;">
                    <li>✔ সব Starter সুবিধা</li>
                    <li>✔ University Applications</li>
                    <li>✔ Agent Management</li>
                    <li>✔ WhatsApp Notifications</li>
                    <li>✔ Course Finder</li>
                    <li>✔ Form Builder</li>
                    <li style="color:#bbb;">✗ API Access</li>
                  </ul>
                </div>
                <div style="text-align:center;padding:16px 15px;">
                  <a href="/contact" class="btn btn-dark" style="margin-bottom:8px;background:#22b04c;border-color:#22b04c;">যোগাযোগ করুন</a>
                </div>
              </div>
            </div>

            <!-- Enterprise -->
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box h-100" style="box-shadow:0 0 30px rgba(0,0,0,0.14);">
                <div class="pricing-feaures" style="margin-top:0 !important;">
                  <h3 class="pb-3 mx-auto" style="text-align:center;border-bottom:1px solid #cfcfcf;width:90%;">Enterprise</h3>
                  <div class="pricing-price">
                    <p class="p-2">বড় প্রতিষ্ঠানের জন্য</p>
                    <sup style="font-size:1.2rem;font-weight:700;">৳</sup>
                    <strong style="font-size:2.5rem;">7,000</strong><br>
                    <span>/মাস · Unlimited users</span>
                  </div>
                  <ul class="list-unstyled mt-3 px-3" style="text-align:left;font-size:0.92rem;">
                    <li>✔ সব Growth সুবিধা</li>
                    <li>✔ API Access</li>
                    <li>✔ Automation</li>
                    <li>✔ Custom Integrations</li>
                    <li>✔ Priority Support</li>
                    <li>✔ Multi-branch</li>
                    <li>✔ Dedicated Account Manager</li>
                  </ul>
                </div>
                <div style="text-align:center;padding:16px 15px;">
                  <a href="/contact" class="btn btn-outline" style="margin-bottom:8px;">যোগাযোগ করুন</a>
                </div>
              </div>
            </div>

          </div>

          <!-- Self-hosted -->
          <div class="row text-center mt-5 pt-4" style="border-top:1px solid #eee;">
            <div class="col section-heading mb-3">
              <h3 style="font-size:1.5rem;">Self-Hosted (নিজের সার্ভারে) — একবারের মূল্য</h3>
              <p style="color:#536079;">নিজের সার্ভারে সম্পূর্ণ নিয়ন্ত্রণ রাখুন</p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box" style="box-shadow:0 0 30px rgba(0,0,0,0.14);text-align:center;padding:24px;">
                <h4>Growth Self-Hosted</h4>
                <div style="font-size:2rem;font-weight:800;margin:12px 0;">৳40,000</div>
                <p style="color:#536079;font-size:0.9rem;">একবারের লাইসেন্স · ৬ মাস সাপোর্ট</p>
                <a href="/contact" class="btn btn-outline mt-2">যোগাযোগ করুন</a>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box" style="box-shadow:0 0 30px rgba(34,176,76,0.25);border:2px solid #22b04c;text-align:center;padding:24px;">
                <h4 style="color:#22b04c;">Pro Self-Hosted</h4>
                <div style="font-size:2rem;font-weight:800;margin:12px 0;">৳55,000</div>
                <p style="color:#536079;font-size:0.9rem;">একবারের লাইসেন্স · ১ বছর সাপোর্ট</p>
                <a href="/contact" class="btn btn-dark mt-2" style="background:#22b04c;border-color:#22b04c;">যোগাযোগ করুন</a>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box" style="box-shadow:0 0 30px rgba(0,0,0,0.14);text-align:center;padding:24px;">
                <h4>Enterprise Self-Hosted</h4>
                <div style="font-size:2rem;font-weight:800;margin:12px 0;">৳75,000</div>
                <p style="color:#536079;font-size:0.9rem;">একবারের লাইসেন্স · ১ বছর সাপোর্ট + কাস্টমাইজেশন</p>
                <a href="/contact" class="btn btn-outline mt-2">যোগাযোগ করুন</a>
              </div>
            </div>
          </div>
        </div>

        <!-- ── Tab 2: HolyDeen Store ── -->
        <div class="tab-pane fade" id="tab-holydeen">
          <div class="row text-center mb-3">
            <div class="col">
              <p style="color:#536079;font-size:1rem;">HolyDeen Store-এ পণ্য বিক্রি করুন — Seller Subscription Plans</p>
            </div>
          </div>
          <div class="row justify-content-center">

            <!-- Basic Seller -->
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box h-100" style="box-shadow:0 0 30px rgba(0,0,0,0.14);">
                <div class="pricing-feaures" style="margin-top:0 !important;">
                  <h3 class="pb-3 mx-auto" style="text-align:center;border-bottom:1px solid #cfcfcf;width:90%;">Basic Seller</h3>
                  <div class="pricing-price">
                    <p class="p-2">নতুন বিক্রেতাদের জন্য</p>
                    <sup style="font-size:1.2rem;font-weight:700;">৳</sup>
                    <strong style="font-size:2.5rem;">500</strong><br>
                    <span>/মাস</span>
                  </div>
                  <ul class="list-unstyled mt-3 px-3" style="text-align:left;font-size:0.92rem;">
                    <li>✔ সর্বোচ্চ ৫০টি পণ্য</li>
                    <li>✔ Standard Listing</li>
                    <li>✔ Basic Analytics</li>
                    <li>✔ Email Support</li>
                    <li style="color:#bbb;">✗ Featured Placement</li>
                    <li style="color:#bbb;">✗ Promotional Tools</li>
                  </ul>
                </div>
                <div style="text-align:center;padding:16px 15px;">
                  <a href="/contact" class="btn btn-outline" style="margin-bottom:8px;">শুরু করুন</a>
                </div>
              </div>
            </div>

            <!-- Standard Seller (Featured) -->
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box h-100" style="box-shadow:0 0 30px rgba(34,176,76,0.3);border:2px solid #22b04c;">
                <div class="pricing-feaures" style="margin-top:0 !important;">
                  <div style="background:#22b04c;color:#fff;text-align:center;padding:6px;border-radius:4px 4px 0 0;font-weight:700;font-size:0.85rem;">সবচেয়ে জনপ্রিয়</div>
                  <h3 class="pb-3 mx-auto mt-2" style="text-align:center;border-bottom:1px solid #cfcfcf;width:90%;color:#22b04c;">Standard Seller</h3>
                  <div class="pricing-price">
                    <p class="p-2">বেড়ে ওঠা ব্যবসার জন্য</p>
                    <sup style="font-size:1.2rem;font-weight:700;">৳</sup>
                    <strong style="font-size:2.5rem;">1,200</strong><br>
                    <span>/মাস</span>
                  </div>
                  <ul class="list-unstyled mt-3 px-3" style="text-align:left;font-size:0.92rem;">
                    <li>✔ সর্বোচ্চ ২০০টি পণ্য</li>
                    <li>✔ Featured Placement</li>
                    <li>✔ Advanced Analytics</li>
                    <li>✔ Promotional Tools</li>
                    <li>✔ Priority Support</li>
                    <li style="color:#bbb;">✗ Unlimited Products</li>
                  </ul>
                </div>
                <div style="text-align:center;padding:16px 15px;">
                  <a href="/contact" class="btn btn-dark" style="margin-bottom:8px;background:#22b04c;border-color:#22b04c;">শুরু করুন</a>
                </div>
              </div>
            </div>

            <!-- Pro Seller -->
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box h-100" style="box-shadow:0 0 30px rgba(0,0,0,0.14);">
                <div class="pricing-feaures" style="margin-top:0 !important;">
                  <h3 class="pb-3 mx-auto" style="text-align:center;border-bottom:1px solid #cfcfcf;width:90%;">Pro Seller</h3>
                  <div class="pricing-price">
                    <p class="p-2">বড় বিক্রেতাদের জন্য</p>
                    <sup style="font-size:1.2rem;font-weight:700;">৳</sup>
                    <strong style="font-size:2.5rem;">2,500</strong><br>
                    <span>/মাস</span>
                  </div>
                  <ul class="list-unstyled mt-3 px-3" style="text-align:left;font-size:0.92rem;">
                    <li>✔ Unlimited Products</li>
                    <li>✔ Top Featured Placement</li>
                    <li>✔ Dedicated Account Manager</li>
                    <li>✔ Custom Promotional Campaigns</li>
                    <li>✔ Full Analytics Dashboard</li>
                    <li>✔ 24/7 Support</li>
                  </ul>
                </div>
                <div style="text-align:center;padding:16px 15px;">
                  <a href="/contact" class="btn btn-outline" style="margin-bottom:8px;">শুরু করুন</a>
                </div>
              </div>
            </div>

          </div>

          <div class="row text-center mt-4">
            <div class="col">
              <p style="color:#536079;">HolyDeen Store-এ পণ্য দেখুন: <a href="https://holydeen.vercel.app" target="_blank" style="color:#22b04c;font-weight:700;">holydeen.vercel.app</a></p>
            </div>
          </div>
        </div>

        <!-- ── Tab 3: E-Commerce Solution ── -->
        <div class="tab-pane fade" id="tab-ecommerce">
          <div class="row text-center mb-3">
            <div class="col">
              <p style="color:#536079;font-size:1rem;">আপনার নিজের অনলাইন স্টোর তৈরি করুন — একবারের মূল্য (One-time)</p>
            </div>
          </div>
          <div class="row justify-content-center">

            <!-- Basic Store -->
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box h-100" style="box-shadow:0 0 30px rgba(0,0,0,0.14);">
                <div class="pricing-feaures" style="margin-top:0 !important;">
                  <h3 class="pb-3 mx-auto" style="text-align:center;border-bottom:1px solid #cfcfcf;width:90%;">Basic Store</h3>
                  <div class="pricing-price">
                    <p class="p-2">ছোট ব্যবসার জন্য সহজ স্টোর</p>
                    <sup style="font-size:1.2rem;font-weight:700;">৳</sup>
                    <strong style="font-size:2.5rem;">15,000</strong><br>
                    <span>একবারের মূল্য</span>
                  </div>
                  <ul class="list-unstyled mt-3 px-3" style="text-align:left;font-size:0.92rem;">
                    <li>✔ সর্বোচ্চ ১০০টি পণ্য</li>
                    <li>✔ Payment Gateway</li>
                    <li>✔ Mobile Responsive</li>
                    <li>✔ Admin Dashboard</li>
                    <li>✔ ৩ মাস সাপোর্ট</li>
                    <li style="color:#bbb;">✗ SEO Optimization</li>
                    <li style="color:#bbb;">✗ Advanced Analytics</li>
                  </ul>
                </div>
                <div style="text-align:center;padding:16px 15px;">
                  <a href="/contact" class="btn btn-outline" style="margin-bottom:8px;">যোগাযোগ করুন</a>
                </div>
              </div>
            </div>

            <!-- Standard Store (Featured) -->
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box h-100" style="box-shadow:0 0 30px rgba(34,176,76,0.3);border:2px solid #22b04c;">
                <div class="pricing-feaures" style="margin-top:0 !important;">
                  <div style="background:#22b04c;color:#fff;text-align:center;padding:6px;border-radius:4px 4px 0 0;font-weight:700;font-size:0.85rem;">সবচেয়ে জনপ্রিয়</div>
                  <h3 class="pb-3 mx-auto mt-2" style="text-align:center;border-bottom:1px solid #cfcfcf;width:90%;color:#22b04c;">Standard Store</h3>
                  <div class="pricing-price">
                    <p class="p-2">মাঝারি ব্যবসার জন্য পূর্ণ স্টোর</p>
                    <sup style="font-size:1.2rem;font-weight:700;">৳</sup>
                    <strong style="font-size:2.5rem;">35,000</strong><br>
                    <span>একবারের মূল্য</span>
                  </div>
                  <ul class="list-unstyled mt-3 px-3" style="text-align:left;font-size:0.92rem;">
                    <li>✔ সর্বোচ্চ ৫০০টি পণ্য</li>
                    <li>✔ Multiple Payment Options</li>
                    <li>✔ SEO Optimization</li>
                    <li>✔ Order Management</li>
                    <li>✔ Customer Accounts</li>
                    <li>✔ Promo &amp; Discount Tools</li>
                    <li>✔ ৬ মাস সাপোর্ট</li>
                  </ul>
                </div>
                <div style="text-align:center;padding:16px 15px;">
                  <a href="/contact" class="btn btn-dark" style="margin-bottom:8px;background:#22b04c;border-color:#22b04c;">যোগাযোগ করুন</a>
                </div>
              </div>
            </div>

            <!-- Premium Store -->
            <div class="col-sm-12 col-md-4 mt-2">
              <div class="tw-price-box h-100" style="box-shadow:0 0 30px rgba(0,0,0,0.14);">
                <div class="pricing-feaures" style="margin-top:0 !important;">
                  <h3 class="pb-3 mx-auto" style="text-align:center;border-bottom:1px solid #cfcfcf;width:90%;">Premium Store</h3>
                  <div class="pricing-price">
                    <p class="p-2">বড় ব্যবসার জন্য সম্পূর্ণ সমাধান</p>
                    <sup style="font-size:1.2rem;font-weight:700;">৳</sup>
                    <strong style="font-size:2.5rem;">75,000</strong><br>
                    <span>একবারের মূল্য থেকে</span>
                  </div>
                  <ul class="list-unstyled mt-3 px-3" style="text-align:left;font-size:0.92rem;">
                    <li>✔ Unlimited Products</li>
                    <li>✔ Full Integrations (bKash, Nagad)</li>
                    <li>✔ Custom Design &amp; Branding</li>
                    <li>✔ Analytics Dashboard</li>
                    <li>✔ Shipping Management</li>
                    <li>✔ ১ বছর সাপোর্ট + Maintenance</li>
                    <li>✔ কাস্টম Features</li>
                  </ul>
                </div>
                <div style="text-align:center;padding:16px 15px;">
                  <a href="/contact" class="btn btn-outline" style="margin-bottom:8px;">যোগাযোগ করুন</a>
                </div>
              </div>
            </div>

          </div>

          <div class="row text-center mt-4">
            <div class="col">
              <p style="color:#536079;">Live উদাহরণ দেখুন: <a href="https://holydeen.vercel.app" target="_blank" style="color:#22b04c;font-weight:700;">HolyDeen Store</a></p>
            </div>
          </div>
        </div>

      </div><!-- /tab-content -->
    </div><!-- /pricing-tab -->

    <!-- Note -->
    <div class="row text-center mt-5">
      <div class="col">
        <p style="color:#536079;font-size:0.9rem;">* সকল মূল্য আলোচনাযোগ্য। বিশেষ ছাড় ও কাস্টম প্যাকেজের জন্য <a href="/contact" style="color:#22b04c;font-weight:600;">যোগাযোগ করুন</a>।</p>
      </div>
    </div>

  </div>
</section>`;

const newContent = content.slice(0, sectionStart) + NEW_PRICING + content.slice(sectionEnd);
fs.writeFileSync(fp, newContent);
console.log('Done. Pricing section replaced.');
console.log('Old length:', content.length, '-> New:', newContent.length);
