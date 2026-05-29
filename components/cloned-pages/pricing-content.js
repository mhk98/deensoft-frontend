import { normalizeCloneHtml } from "@/lib/clone-html";

const rawHtml = String.raw`

    <div id="main-wrapper">



        <div class="offcanvas-menu">
       <div class="offcanvas-menu-overlay"></div>
       <div class="container">
           <div class="row" style="margin-top:-1px;">
               <div class="col-md-12">
                   <div class="offcanvas-wrapper">
                       <div class="offcanvas-inner">
                           <a href="https://www.eductrl.com" class="logo">
                               <img src="https://www.eductrl.com/images/eductrl-logo.png" alt="EduCtrl" style="width: 60%;">
                           </a>
                           <p style="color:#000;margin-bottom: 0px;">DeenSoft is a feature-rich software for Overseas Education Consultancy Business, HolyDeen Store &amp; E-Commerce Solution.</p>
                           <div class="row">
                               <div class="col-md-12">
                                   <div class="contact-us">
                                       <div class="contact-icon">
                                           <i class="icon icon-phone3"></i>
                                       </div>
                                       <!-- End contact Icon -->
                                       <div class="contact-info">
                                           <h3>+8801518301098</h3>
                                           <p style="color:#000;">Give us a call</p>
                                       </div>
                                       <!-- End Contact Info -->
                                   </div>
                                   <!-- End Contact Us -->
                               </div>
                               <!-- End Col -->
                               <div class="col-md-12">
                                   <div class="contact-us">
                                       <div class="contact-icon">
                                           <i class="icon icon-envelope3"></i>
                                       </div>
                                       <!-- End contact Icon -->
                                       <div class="contact-info">
                                           <h3>info@deensoft.org</h3>
                                           <p style="color:#000;">Drop us email</p>
                                       </div>
                                       <!-- End Contact Info -->
                                   </div>
                                   <!-- End Contact Us -->
                               </div>
                               <!-- End Col -->
                           </div>
                           <!-- End Contact Row -->
                           <div class="footer-social-link">
                               <ul>
                                   <li><a target="_blank" href="https://fb.me/eductrlcrm"><i
                                               class="fa fa-facebook"></i></a></li>
                                   <li><a target="_blank" href="https://x.com/eductrlcrm" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a></li>
                                   <li><a target="_blank" href="https://www.linkedin.com/company/eductrl/"><i
                                               class="fa fa-linkedin"></i></a></li>
                     <li><a href="https://www.instagram.com/eductrlcrm"><i class="fa fa-instagram"></i></a></li>

                                   <!-- <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                           <li><a href="#"><i class="fa fa-instagram"></i></a></li> -->
                               </ul>
                           </div>

                       </div>
                       <!-- Offcanvas inner end -->
                       <button class="menu-close-btn"><i class="fa fa-close" style="color:#000;"></i></button>
                   </div>
                   <!-- Offcanvas wrapper end -->
               </div>
               <!-- Col End -->
           </div>
           <!-- Row End -->
       </div>
       <!-- Container End -->
   </div>


   <div class="modal fade" id="enquiryModal" tabindex="-1" role="dialog" aria-labelledby="enquiryModalLabel"
       aria-hidden="true">
       <div class="modal-dialog" role="document">
           <div class="modal-content">
               <div class="modal-header">
                   <h5 class="modal-title" id="enquiryModalLabel" style="font-weight:500;">Request Demo</h5>
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                   </button>
               </div>
               <div class="modal-body">
                   <div id="thankYouDiv" style="border-radius: 8px; display:none;">

                       <div class=" text-center">
                           <h2 class="modal-title w-100 mb-0"
                               style="font-family: 'Poppins', sans-serif; font-weight: 600; color: #333;">Thank You!
                           </h2>
                       </div>

                       <div class="p-4 text-center">
                           <p class="lead mb-4" style="font-size: 1.1rem; color: #555;">
                               Our team will be in touch shortly to arrange your personalized demo. In the meantime,
                               feel free to
                               explore our live software demo:
                           </p>
                           <a href="https://demo.eductrl.com/cn4" class="text-primary font-weight-bold" target="_blank"
                               style="font-size: 1rem;">https://demo.eductrl.com/cn4</a>
                           <div class="mt-4 text-start mx-auto" style="max-width: 400px;">
                               <p class="mb-2" style="font-size: 0.95rem;"><strong>Admin Login:</strong>
                                   admin@demo.com / 123456
                               </p>
                               <p class="mb-2" style="font-size: 0.95rem;"><strong>Student Login:</strong>
                                   student@demo.com /
                                   123456</p>
                               <p style="font-size: 0.95rem;"><strong>Staff Login:</strong> staff@demo.com / 123456</p>
                           </div>
                       </div>
                   </div>
                   <div id="formDiv">
                       <p>Share your details to access Software Demo</p>
                                              <form id="enquiry-form" class="contact-form" method="POST" action="#"
                           onsubmit="return false;">
                           <input type="hidden" name="_token" value="uIEfUaYmUr2jPEXzA39gA4gVEOjTrkZKMBty4zVc">                           <div class="error-container"></div>
                           <div class="row">
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control" name="name" id="name" placeholder="Your Name *"
                                           type="text" required="">
                                   </div>
                               </div>
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control" name="business" id="business"
                                           placeholder="Business Name *" type="text" required="">
                                   </div>
                               </div>
                               <!-- Col end -->
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control form-email" name="email" id="email"
                                           placeholder="Email *" type="email" required="">
                                   </div>
                               </div>
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control form-phone" name="phone" id="phone"
                                           placeholder="Phone *" type="phone" required="">
                                   </div>
                               </div>
                               <!-- Col end -->
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <input class="form-control" name="city" id="city"
                                           placeholder="City *" type="text" required="">
                                   </div>
                               </div>
                               <div class="col-lg-6">
                                   <div class="form-group">
                                       <select class="form-control form-select" name="country" id="country" required="">
                                           <option value="">Country *</option>
                                                                                          <option value="Afghanistan">Afghanistan</option>
                                                                                          <option value="Albania">Albania</option>
                                                                                          <option value="Algeria">Algeria</option>
                                                                                          <option value="American Samoa">American Samoa</option>
                                                                                          <option value="Andorra">Andorra</option>
                                                                                          <option value="Angola">Angola</option>
                                                                                          <option value="Anguilla">Anguilla</option>
                                                                                          <option value="Antigua And Barbuda">Antigua And Barbuda</option>
                                                                                          <option value="Argentina">Argentina</option>
                                                                                          <option value="Armenia">Armenia</option>
                                                                                          <option value="Aruba">Aruba</option>
                                                                                          <option value="Australia">Australia</option>
                                                                                          <option value="Austria">Austria</option>
                                                                                          <option value="Azerbaijan">Azerbaijan</option>
                                                                                          <option value="Bahamas The">Bahamas The</option>
                                                                                          <option value="Bahrain">Bahrain</option>
                                                                                          <option value="Bangladesh">Bangladesh</option>
                                                                                          <option value="Barbados">Barbados</option>
                                                                                          <option value="Belarus">Belarus</option>
                                                                                          <option value="Belgium">Belgium</option>
                                                                                          <option value="Belize">Belize</option>
                                                                                          <option value="Benin">Benin</option>
                                                                                          <option value="Bermuda">Bermuda</option>
                                                                                          <option value="Bhutan">Bhutan</option>
                                                                                          <option value="Bolivia">Bolivia</option>
                                                                                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                                          <option value="Botswana">Botswana</option>
                                                                                          <option value="Brazil">Brazil</option>
                                                                                          <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                                          <option value="Brunei">Brunei</option>
                                                                                          <option value="Bulgaria">Bulgaria</option>
                                                                                          <option value="Burkina Faso">Burkina Faso</option>
                                                                                          <option value="Burundi">Burundi</option>
                                                                                          <option value="Cambodia">Cambodia</option>
                                                                                          <option value="Cameroon">Cameroon</option>
                                                                                          <option value="Canada">Canada</option>
                                                                                          <option value="Cape Verde">Cape Verde</option>
                                                                                          <option value="Cayman Islands">Cayman Islands</option>
                                                                                          <option value="Central African Republic">Central African Republic</option>
                                                                                          <option value="Chad">Chad</option>
                                                                                          <option value="Chile">Chile</option>
                                                                                          <option value="China">China</option>
                                                                                          <option value="Christmas Island">Christmas Island</option>
                                                                                          <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                                                          <option value="Colombia">Colombia</option>
                                                                                          <option value="Comoros">Comoros</option>
                                                                                          <option value="Cook Islands">Cook Islands</option>
                                                                                          <option value="Costa Rica">Costa Rica</option>
                                                                                          <option value="Cote D&#039;Ivoire (Ivory Coast)">Cote D&#039;Ivoire (Ivory Coast)</option>
                                                                                          <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                                                                                          <option value="Cuba">Cuba</option>
                                                                                          <option value="Cyprus">Cyprus</option>
                                                                                          <option value="Czech Republic">Czech Republic</option>
                                                                                          <option value="Democratic Republic Of The Congo">Democratic Republic Of The Congo</option>
                                                                                          <option value="Denmark">Denmark</option>
                                                                                          <option value="Djibouti">Djibouti</option>
                                                                                          <option value="Dominica">Dominica</option>
                                                                                          <option value="Dominican Republic">Dominican Republic</option>
                                                                                          <option value="East Timor">East Timor</option>
                                                                                          <option value="Ecuador">Ecuador</option>
                                                                                          <option value="Egypt">Egypt</option>
                                                                                          <option value="El Salvador">El Salvador</option>
                                                                                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                                          <option value="Eritrea">Eritrea</option>
                                                                                          <option value="Estonia">Estonia</option>
                                                                                          <option value="Ethiopia">Ethiopia</option>
                                                                                          <option value="External Territories of Australia">External Territories of Australia</option>
                                                                                          <option value="Falkland Islands">Falkland Islands</option>
                                                                                          <option value="Faroe Islands">Faroe Islands</option>
                                                                                          <option value="Fiji Islands">Fiji Islands</option>
                                                                                          <option value="Finland">Finland</option>
                                                                                          <option value="France">France</option>
                                                                                          <option value="French Guiana">French Guiana</option>
                                                                                          <option value="French Polynesia">French Polynesia</option>
                                                                                          <option value="Gabon">Gabon</option>
                                                                                          <option value="Gambia The">Gambia The</option>
                                                                                          <option value="Georgia">Georgia</option>
                                                                                          <option value="Germany">Germany</option>
                                                                                          <option value="Ghana">Ghana</option>
                                                                                          <option value="Gibraltar">Gibraltar</option>
                                                                                          <option value="Greece">Greece</option>
                                                                                          <option value="Greenland">Greenland</option>
                                                                                          <option value="Grenada">Grenada</option>
                                                                                          <option value="Guadeloupe">Guadeloupe</option>
                                                                                          <option value="Guam">Guam</option>
                                                                                          <option value="Guatemala">Guatemala</option>
                                                                                          <option value="Guernsey and Alderney">Guernsey and Alderney</option>
                                                                                          <option value="Guinea">Guinea</option>
                                                                                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                                                          <option value="Guyana">Guyana</option>
                                                                                          <option value="Haiti">Haiti</option>
                                                                                          <option value="Honduras">Honduras</option>
                                                                                          <option value="Hong Kong S.A.R.">Hong Kong S.A.R.</option>
                                                                                          <option value="Hungary">Hungary</option>
                                                                                          <option value="Iceland">Iceland</option>
                                                                                          <option value="India">India</option>
                                                                                          <option value="Indonesia">Indonesia</option>
                                                                                          <option value="Iran">Iran</option>
                                                                                          <option value="Iraq">Iraq</option>
                                                                                          <option value="Ireland">Ireland</option>
                                                                                          <option value="Israel">Israel</option>
                                                                                          <option value="Italy">Italy</option>
                                                                                          <option value="Jamaica">Jamaica</option>
                                                                                          <option value="Japan">Japan</option>
                                                                                          <option value="Jersey">Jersey</option>
                                                                                          <option value="Jordan">Jordan</option>
                                                                                          <option value="Kazakhstan">Kazakhstan</option>
                                                                                          <option value="Kenya">Kenya</option>
                                                                                          <option value="Kiribati">Kiribati</option>
                                                                                          <option value="Korea North">Korea North</option>
                                                                                          <option value="Korea South">Korea South</option>
                                                                                          <option value="Kuwait">Kuwait</option>
                                                                                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                                          <option value="Laos">Laos</option>
                                                                                          <option value="Latvia">Latvia</option>
                                                                                          <option value="Lebanon">Lebanon</option>
                                                                                          <option value="Lesotho">Lesotho</option>
                                                                                          <option value="Liberia">Liberia</option>
                                                                                          <option value="Libya">Libya</option>
                                                                                          <option value="Liechtenstein">Liechtenstein</option>
                                                                                          <option value="Lithuania">Lithuania</option>
                                                                                          <option value="Luxembourg">Luxembourg</option>
                                                                                          <option value="Macau S.A.R.">Macau S.A.R.</option>
                                                                                          <option value="Macedonia">Macedonia</option>
                                                                                          <option value="Madagascar">Madagascar</option>
                                                                                          <option value="Malawi">Malawi</option>
                                                                                          <option value="Malaysia">Malaysia</option>
                                                                                          <option value="Maldives">Maldives</option>
                                                                                          <option value="Mali">Mali</option>
                                                                                          <option value="Malta">Malta</option>
                                                                                          <option value="Man (Isle of)">Man (Isle of)</option>
                                                                                          <option value="Marshall Islands">Marshall Islands</option>
                                                                                          <option value="Martinique">Martinique</option>
                                                                                          <option value="Mauritania">Mauritania</option>
                                                                                          <option value="Mauritius">Mauritius</option>
                                                                                          <option value="Mayotte">Mayotte</option>
                                                                                          <option value="Mexico">Mexico</option>
                                                                                          <option value="Micronesia">Micronesia</option>
                                                                                          <option value="Moldova">Moldova</option>
                                                                                          <option value="Monaco">Monaco</option>
                                                                                          <option value="Mongolia">Mongolia</option>
                                                                                          <option value="Montserrat">Montserrat</option>
                                                                                          <option value="Morocco">Morocco</option>
                                                                                          <option value="Mozambique">Mozambique</option>
                                                                                          <option value="Myanmar">Myanmar</option>
                                                                                          <option value="Namibia">Namibia</option>
                                                                                          <option value="Nauru">Nauru</option>
                                                                                          <option value="Nepal">Nepal</option>
                                                                                          <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                                                          <option value="Netherlands The">Netherlands The</option>
                                                                                          <option value="New Caledonia">New Caledonia</option>
                                                                                          <option value="New Zealand">New Zealand</option>
                                                                                          <option value="Nicaragua">Nicaragua</option>
                                                                                          <option value="Niger">Niger</option>
                                                                                          <option value="Nigeria">Nigeria</option>
                                                                                          <option value="Niue">Niue</option>
                                                                                          <option value="Norfolk Island">Norfolk Island</option>
                                                                                          <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                                          <option value="Norway">Norway</option>
                                                                                          <option value="Oman">Oman</option>
                                                                                          <option value="Pakistan">Pakistan</option>
                                                                                          <option value="Palau">Palau</option>
                                                                                          <option value="Palestinian Territory Occupied">Palestinian Territory Occupied</option>
                                                                                          <option value="Panama">Panama</option>
                                                                                          <option value="Papua new Guinea">Papua new Guinea</option>
                                                                                          <option value="Paraguay">Paraguay</option>
                                                                                          <option value="Peru">Peru</option>
                                                                                          <option value="Philippines">Philippines</option>
                                                                                          <option value="Poland">Poland</option>
                                                                                          <option value="Portugal">Portugal</option>
                                                                                          <option value="Puerto Rico">Puerto Rico</option>
                                                                                          <option value="Qatar">Qatar</option>
                                                                                          <option value="Republic Of The Congo">Republic Of The Congo</option>
                                                                                          <option value="Reunion">Reunion</option>
                                                                                          <option value="Romania">Romania</option>
                                                                                          <option value="Russia">Russia</option>
                                                                                          <option value="Rwanda">Rwanda</option>
                                                                                          <option value="Saint Helena">Saint Helena</option>
                                                                                          <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
                                                                                          <option value="Saint Lucia">Saint Lucia</option>
                                                                                          <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                                                          <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
                                                                                          <option value="Samoa">Samoa</option>
                                                                                          <option value="San Marino">San Marino</option>
                                                                                          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                                                          <option value="Saudi Arabia">Saudi Arabia</option>
                                                                                          <option value="Senegal">Senegal</option>
                                                                                          <option value="Serbia">Serbia</option>
                                                                                          <option value="Seychelles">Seychelles</option>
                                                                                          <option value="Sierra Leone">Sierra Leone</option>
                                                                                          <option value="Singapore">Singapore</option>
                                                                                          <option value="Slovakia">Slovakia</option>
                                                                                          <option value="Slovenia">Slovenia</option>
                                                                                          <option value="Smaller Territories of the UK">Smaller Territories of the UK</option>
                                                                                          <option value="Solomon Islands">Solomon Islands</option>
                                                                                          <option value="Somalia">Somalia</option>
                                                                                          <option value="South Africa">South Africa</option>
                                                                                          <option value="South Sudan">South Sudan</option>
                                                                                          <option value="Spain">Spain</option>
                                                                                          <option value="Sri Lanka">Sri Lanka</option>
                                                                                          <option value="Sudan">Sudan</option>
                                                                                          <option value="Suriname">Suriname</option>
                                                                                          <option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option>
                                                                                          <option value="Swaziland">Swaziland</option>
                                                                                          <option value="Sweden">Sweden</option>
                                                                                          <option value="Switzerland">Switzerland</option>
                                                                                          <option value="Syria">Syria</option>
                                                                                          <option value="Taiwan">Taiwan</option>
                                                                                          <option value="Tajikistan">Tajikistan</option>
                                                                                          <option value="Tanzania">Tanzania</option>
                                                                                          <option value="Thailand">Thailand</option>
                                                                                          <option value="Togo">Togo</option>
                                                                                          <option value="Tokelau">Tokelau</option>
                                                                                          <option value="Tonga">Tonga</option>
                                                                                          <option value="Trinidad And Tobago">Trinidad And Tobago</option>
                                                                                          <option value="Tunisia">Tunisia</option>
                                                                                          <option value="Turkey">Turkey</option>
                                                                                          <option value="Turkmenistan">Turkmenistan</option>
                                                                                          <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
                                                                                          <option value="Tuvalu">Tuvalu</option>
                                                                                          <option value="Uganda">Uganda</option>
                                                                                          <option value="Ukraine">Ukraine</option>
                                                                                          <option value="United Arab Emirates">United Arab Emirates</option>
                                                                                          <option value="United Kingdom">United Kingdom</option>
                                                                                          <option value="United States">United States</option>
                                                                                          <option value="Uruguay">Uruguay</option>
                                                                                          <option value="Uzbekistan">Uzbekistan</option>
                                                                                          <option value="Vanuatu">Vanuatu</option>
                                                                                          <option value="Venezuela">Venezuela</option>
                                                                                          <option value="Vietnam">Vietnam</option>
                                                                                          <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                                                                          <option value="Virgin Islands (US)">Virgin Islands (US)</option>
                                                                                          <option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option>
                                                                                          <option value="Western Sahara">Western Sahara</option>
                                                                                          <option value="Yemen">Yemen</option>
                                                                                          <option value="Yugoslavia">Yugoslavia</option>
                                                                                          <option value="Zambia">Zambia</option>
                                                                                          <option value="Zimbabwe">Zimbabwe</option>
                                                                                  </select>
                                   </div>
                               </div>
                               <!-- Col end -->
                               <div class="col-lg-12">
                                   <div class="form-group">
                                       <select class="form-control form-select" name="interested_in"
                                           id="interested_in" required="">
                                           <option value="">Interested In *</option>
                                           <option value="Consultancy">Consultancy CRM</option>
                                           <option value="Coaching">Coaching CRM</option>
                                           
                                       </select>
                                   </div>
                               </div>

                               <div class="col-lg-12">
                                   <div class="form-group">
                                       <textarea class="form-control" name="message" id="message" placeholder="Enquiry or message" rows="3"></textarea>
                                   </div>
                               </div>
                               <!-- Col 12 end -->

                           </div>
                           <!-- Form row end -->
                           <div class="text-center">
                               <button id="enquiry-form-submit" class="btn btn-dark tw-mt-10">Submit</button>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>

   </div>
        <div class="tw-top-bar tw-top-bar-angle bg-offwhite mbv-none">
      <div class="container">
         <div class="row">
            <div class="col-md-8 text-left">
               <div class="top-contact-info">                 
                  <span><i class="icon icon-phone3"></i>+8801518301098</span>
                <span><i class="icon icon-envelope"></i>info@deensoft.org</span>
               </div>
            </div>
            <!-- Col End -->
            <div class="col-md-4 ml-auto text-right">
               <div class="top-social-links">
                  <span>Follow us:</span>
                  <a target="_blank" href="https://fb.me/eductrlcrm"><i class="fa fa-facebook"></i></a>
                  <a target="_blank" href="https://x.com/eductrlcrm" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a>
                  <a target="_blank" href="https://www.linkedin.com/company/eductrl/"><i class="fa fa-linkedin"></i></a>

                  <!-- <a href="#"><i class="fa fa-google-plus"></i></a> -->
                  <a href="https://www.instagram.com/eductrlcrm"><i class="fa fa-instagram"></i></a> 
               </div>
            </div>
            <!-- Col End -->
         </div>
         <!-- Row End -->
      </div>
      <!-- Container End -->
   </div>

        <header>
    

    <div class="tw-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-new-blue p-2">
                <a class="navbar-brand tw-nav-brand header-size" href="https://www.eductrl.com">
                    <img src="https://www.eductrl.com/images/eductrl-logo.png" alt="EduCtrl" class="header-logo-size">
                </a>
                <!-- End of Navbar Brand -->
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- End of Navbar toggler -->
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link p-2" href="https://www.eductrl.com">Home</a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link p-2" href="#" data-toggle="dropdown">
                                Products
                                <span class="tw-indicator"><i class="fa fa-angle-down"></i></span>
                            </a>
                            <ul id="tw-megamenu" class="dropdown-menu tw-mega-menu p-4" style="min-width: 500px;">
                                <div class="row justify-content-start p-2">
                                    <div class="col-6 mb-3 hover-scale p-3">
                                        <a href="https://www.eductrl.com/consultancy">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Consultancy CRM</p>
                                            <p class="text-muted p-0 m-0 mt-2">CRM software for study abroad consultancy</p>
                                        </a>
                                    </div>
                                    <div class="col-6 mb-3 hover-scale p-3">
                                        <a href="/holydeen-store">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">HolyDeen Store</p>
                                            <p class="text-muted p-0 m-0 mt-2">Islamic lifestyle e-commerce — fashion, cosmetics &amp; more</p>
                                        </a>
                                    </div>
                                    <div class="col-6 hover-scale p-3">
                                        <a href="/ecommerce">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">E-Commerce Solution</p>
                                            <p class="text-muted p-0 m-0 mt-2">Launch your own online store with DeenSoft</p>
                                        </a>
                                    </div>
                                </div>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link p-2" href="https://www.eductrl.com/pricing">Pricing</a>
                        </li>

                        <li class="nav-item"><a class="nav-link p-2" href="/blog">Blog</a></li>

                        <li class="nav-item"><a class="nav-link p-2" href="https://www.eductrl.com/about">About Us</a></li>
                        <li class="nav-item"><a class="nav-link p-2" href="https://www.eductrl.com/contact">Contact</a></li>

                        <li class="text-center mt-2 d-md-none d-sm-block">
                            <button class="btn btn-dark" data-toggle="modal" data-target="#enquiryModal"
                                style="padding: 10px 20px;margin-right: 25px;">Request Free Demo</button><br>
                            <hr>
                            <div class="d-flex flex-column align-items-center">
                                <div class="contact-buttons justify-content-center mb-2 nav-link">
                                    <a href="tel:+8801518301098" class="mx-1 p-1 text-dark" title="Call">
                                        <b class="fa fa-phone"></b> +8801518301098
                                    </a>
                                    <a href="mailto:info@deensoft.org" class="text-dark p-1 mx-1" title="Email">
                                        <b class="fa fa-envelope"></b> info@deensoft.org
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="tw-offcanvas-menu d-none d-md-block">
                    <button class="btn btn-dark mobile-display-none" data-toggle="modal" data-target="#enquiryModal"
                        style="padding: 10px 20px;margin-right: 25px;">Free Demo</button>
                    <div class="tw-menu-bar inline-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <style>
        .offer-bar {
            background: linear-gradient(90deg, #7B2FF7, #7807f1ff);
            font-weight: 600;
            font-size: 0.95rem;
            position: relative;
            z-index: 1050;
        }

        .offer-btn {
            background-color: #ffca2c;
            border-radius: 25px;
            padding: 4px 12px;
            color: #000 !important;
            text-decoration: none;
            font-weight: 700;
            margin-left: 8px;
            transition: all 0.3s ease;
        }

        .offer-btn:hover {
            background-color: #ffd84a;
            transform: scale(1.05);
        }

        .hover-scale {
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-scale:hover {
            box-shadow: 0 2px 5px rgba(59, 58, 58, 0.2);
            background-color: #f8f9fa;
            border-left: 3px solid #525252;
            border-radius: 5px;
        }

        #tw-megamenu {
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background: #fff;
        }
    </style>
</header>

        
    <section id="tw-pricing-one" class="tw-pricing" style="margin-bottom:20px;padding:60px 0;border-top:1px solid #E4E4E4;">
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
</section>

    <section class="work-process bg-light">
        <div class="container text-center pb-5">
            <div class="row">
                <div class="col-md-4 my-3 my-md-0">

                </div>
                <div class="col-md-4 my-3 my-md-0">
                    <img style="height:40px;padding-right:90px;" src="https://www.eductrl.com/images/sm/paypal.png" alt="paypal"
                        class="img-fluid">
                    
                </div>
                <div class="col-md-4 my-3 my-md-0">
                    <img style="height:40px;" src="https://www.eductrl.com/images/sm/razorpay.png" alt="razorpay"
                        class="img-fluid">
                </div>
            </div>
        </div>
    </section>


        <a href="https://wa.me/8801518301098?text=Hi, I'm Interested in EduCtrl"
            className="fixed-bottomRight  whatsappIcon" >
            <img src="https://www.eductrl.com/images/whatsapp.png" alt="icon" class="fixed-bottomRight whatsappIcon" loading="lazy">
        </a>
                    <footer id="tw-footer" class="tw-footer">
   <div class="container">
      <div class="row">
         <div class="col-md-12 col-lg-4">
            <div class="tw-footer-info-box">
               <a href="https://www.eductrl.com" class="footer-logo">
                  <img src="https://www.eductrl.com/images/eductrl-logo.png" alt="EduCtrl" style="width:220px;">
               </a>
               <p class="footer-info-text" style="font-size: 14px;line-height: 24px;">
                  Running an Education Consultancy/ Coaching business involves various activities. You need a good & powerful software system to manage your business more efficiently & provide good services to your students.<br /><br />EduCtrl Software is the perfect, affordable solution for your business.
               </p>
               <div class="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                     <li><a target="_blank" href="https://fb.me/eductrlcrm"><i class="fa fa-facebook"></i></a></li>
                     <li><a target="_blank" href="https://x.com/eductrlcrm" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a></li>
                     <!-- <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
                     <li><a target="_blank" href="https://www.linkedin.com/company/eductrl/"><i class="fa fa-linkedin"></i></a></li>
                     <li><a href="https://www.instagram.com/eductrlcrm"><i class="fa fa-instagram"></i></a></li>
                  </ul>
               </div>
               <!-- End Social link -->
            </div>
            <!-- End Footer info -->

         </div>
         <!-- End Col -->
         <div class="col-md-12 col-lg-8">
            <div class="row mt-30">
               <div class="col-md-6">
                  <div class="contact-us">
                     <div class="contact-icon">
                        <i class="icon icon-envelope3"></i>
                     </div>
                     <!-- End contact Icon -->
                     <div class="contact-info">
                        <h3>info@deensoft.org</h3>
                        <p>Mail Us</p>
                     </div>
                     <!-- End Contact Info -->
                  </div>
                  <!-- End Contact Us -->
               </div>
               <!-- End Col -->
               <div class="col-md-6">
                  <div class="contact-us contact-us-last">
                     <div class="contact-icon">
                        <i class="icon icon-phone3"></i>
                     </div>
                     <!-- End contact Icon -->
                     <div class="contact-info">
                        <h3 style="display:flex;">+8801518301098</h3>
                        <p style="display: flex;">Call or Whatsapp<br>
                         </p>
                       <p style="display:flex;justify-content: center;">
                          <a class="footer-icon"  href="https://wa.me/+8801518301098"><i class="fa fa-whatsapp" aria-hidden="true" style="    font-size: 30px;"></i></a> &nbsp;&nbsp;&nbsp;
                           <a class="footer-icon" href="tel:+8801518301098"><i class="fa fa-phone-square" aria-hidden="true" style="    font-size: 30px;"></i></a>
                       </p>
                     </div>
                     <!-- End Contact Info -->
                  </div>
                  <!-- End Contact Us -->
               </div>
              
               <!-- End Col -->
                </div>

               
            <!-- End Contact Row -->
            <div class="row">
               <div class="col-md-12 col-lg-6">
                  <div class="footer-widget footer-left-widget">
                     <div class="section-heading">
                        <h3>Useful Links</h3>
                        <span class="animate-border border-black"></span>
                     </div>
                     <ul>
                        <li><a href="https://www.eductrl.com/consultancy">Consultancy CRM</a></li>
                        <li><a href="https://www.eductrl.com/coaching">Coaching CRM</a></li>
                        <li><a href="https://www.eductrl.com/eductrl-cms">Website Builder</a></li>
                        <li><a href="https://www.eductrl.com/pricing">Pricing</a></li>
                        <li><a href="https://www.eductrl.com/faq">FAQ</a></li>
                     </ul>
                     <ul>
                        <li><a href="https://www.eductrl.com/about">About Us</a></li>
                        <li><a href="https://www.eductrl.com/blog">Blog</a></li>
                        <li><a href="https://www.eductrl.com/contact">Contact us</a></li>
                        <li><a href="https://www.eductrl.com/affiliates">Affiliates</a></li>
                        <li><a href="https://www.eductrl.com/offers">Offers</a></li>
                     </ul>
                  </div>
                  <!-- End Footer Widget -->
               </div>
               <!-- End col -->
               <div class="col-md-12 col-lg-6">
                  <div class="footer-widget">
                     <div class="section-heading">
                        <h3>Subscribe</h3>
                        <span class="animate-border border-black"></span>
                     </div>
                     <p style="">Don't miss to subscribe to our news feeds, kindly fill the form below.</p>
                     <form action="#" onsubmit="return false;">
                        <div class="form-row">
                           <div class="col tw-footer-form">
                              <input id="newsletter_email" type="email" class="form-control" placeholder="Email Address">
                              <button id="newsletter-form-btn" type="submit"><i class="fa fa-send"></i></button>
                           </div>
                        </div>
                     </form>
                     <!-- End form -->
                  </div>
                  <!-- End footer widget -->
               </div>
               <!-- End Col -->
               <div class="col-md-12 col-lg-6 mt-4">
                  <div class="footer-widget footer-left-widget">
                     <a href="https://www.eductrl.com/study-abroad">Study Abroad</a> | 
                     <a href="https://www.eductrl.com/education-tech">Education Tech</a>
                  </div>
                  <!-- End Footer Widget -->
               </div>
            </div>
            <!-- End Row -->
         </div>
         <!-- End Col -->
      </div>
      <!-- End Widget Row -->
   </div>
   <!-- End Contact Container -->

   <div class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <span>&copy; 2026, All Right Reserved. DeenSoft</span>
            </div>
            <!-- End Col -->
            <div class="col-md-5">
                <div class="copyright-menu">
                    <ul>
                        <li><a href="https://www.eductrl.com/privacy-policy">Privacy Policy</a></li>
                        <li><a href="https://www.eductrl.com/refund-policy">Refund Policy</a></li>
                        <li><a href="https://www.eductrl.com/terms-of-service">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <!-- End col -->
        </div>
        <!-- End Row -->
    </div>
    <!-- End Copyright Container -->
</div>
<!-- End Copyright -->

<!-- Back to top -->
<div id="back-to-top" class="back-to-top">
    <button class="btn btn-dark" title="Back to Top">
        <i class="fa fa-angle-up" style="color:#fff;"></i>
    </button>
</div>
<!-- End Back to top -->
</footer>

            </div><!-- #app -->


    <!-- Scripts -->
    
    <script src="https://www.eductrl.com/assets/plugins/jquery/jquery.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/bootstrap/js/popper.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/bootstrap/js/bootstrap.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/sticky-kit-master/dist/sticky-kit.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/sparkline/jquery.sparkline.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/select2/dist/js/select2.full.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/raphael/raphael-min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/morrisjs/morris.min.js" defer></script>
    <script src="https://www.eductrl.com/assets/plugins/styleswitcher/jQuery.style.switcher.js" defer></script>
    <script src="https://www.eductrl.com/js/owl-carousel.2.3.0.min.js" defer></script>
    <script src="https://www.eductrl.com/js/waypoints.min.js" defer></script>
    <script src="https://www.eductrl.com/js/jquery.counterup.min.js" defer></script>
    <script src="https://www.eductrl.com/js/jquery.magnific.popup.js" defer></script>
    <script src="https://www.eductrl.com/js/wow.min.js" defer></script>
    <script src="https://www.eductrl.com/js/smoothscroll.js" defer></script>
    <script src="https://www.eductrl.com/js/main.js" defer></script>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous">
    </script>
    <script>
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        function changeCurrency() {
            $('.usDollarAmount').toggle();
            $('.inrAmount').toggle();
        }

        function usersClick(n) {
            switch (n) {
                case "tenusers":
                    document.getElementById("userDollarAmountone").innerHTML = "479";
                    document.getElementById("userinrAmountone").innerHTML = "39,999";
                    document.getElementById("userDollarAmounttwo").innerHTML = "599";
                    document.getElementById("userinrAmounttwo").innerHTML = "49,999";
                    document.getElementById("userDollarAmountthree").innerHTML = "719";
                    document.getElementById("userinrAmountthree").innerHTML = "59,999";
                    break;
                case "twentyusers":
                    document.getElementById("userDollarAmountone").innerHTML = "659";
                    document.getElementById("userinrAmountone").innerHTML = "54,999";
                    document.getElementById("userDollarAmounttwo").innerHTML = "779";
                    document.getElementById("userinrAmounttwo").innerHTML = "64,999";
                    document.getElementById("userDollarAmountthree").innerHTML = "899";
                    document.getElementById("userinrAmountthree").innerHTML = "74,999";
                    break;
                default:
                    document.getElementById("userDollarAmountone").innerHTML = "779";
                    document.getElementById("userinrAmountone").innerHTML = "64,999";
                    document.getElementById("userDollarAmounttwo").innerHTML = "899";
                    document.getElementById("userinrAmounttwo").innerHTML = "74,999";
                    document.getElementById("userDollarAmountthree").innerHTML = "1,019";
                    document.getElementById("userinrAmountthree").innerHTML = "84,999";
                    break
            }
        }

        function updateTooltip(elementId, amount, duration) {
            let tooltipText = \`Total: $\${(amount * duration).toFixed(2)} USD per user for \${duration} months\`;

            $('[data-bs-custom-class="' + elementId + '"]').tooltip("dispose");
            $('[data-bs-custom-class="' + elementId + '"]').tooltip({
                title: tooltipText,
                html: true,
            });
        }

        function updateInrTooltip(elementId, amount, duration) {
            let tooltipText = \`Total: &#x20B9; \${(amount * duration).toFixed(2)} INR per user for \${duration} months\`;

            $('[data-bs-custom-class="' + elementId + '"]').tooltip("dispose");
            $('[data-bs-custom-class="' + elementId + '"]').tooltip({
                title: tooltipText,
                html: true,
            });
        }

        function durationClick(m) {
            let duration, growthAmount, proAmount, enterpriseAmount, inrgrowAmount, inrproAmount, inrenterpriseAmount;

            switch (m) {
                case "threemonths":
                    duration = 3;
                    growthAmount = 12;
                    proAmount = 17;
                    enterpriseAmount = 21.60;
                    inrgrowAmount = 999;
                    inrproAmount = 1399;
                    inrenterpriseAmount = 1799;
                    break;
                case "sixmonths":
                    duration = 6;
                    growthAmount = 9;
                    proAmount = 12.75;
                    enterpriseAmount = 16.20;
                    inrgrowAmount = 749;
                    inrproAmount = 1049;
                    inrenterpriseAmount = 1349;
                    break;
                case "oneyear":
                    duration = 12;
                    growthAmount = 6;
                    proAmount = 8.50;
                    enterpriseAmount = 10.80;
                    inrgrowAmount = 499;
                    inrproAmount = 699;
                    inrenterpriseAmount = 899;
                    break;    
                default:
                    duration = 24;
                    growthAmount = 5;
                    proAmount = 7.80;
                    enterpriseAmount = 9.90;
                    inrgrowAmount = 449;
                    inrproAmount = 649;
                    inrenterpriseAmount = 829;
                    break;
            }

            // Update values
            document.getElementById("usDollarAmountone").innerHTML = growthAmount;
            document.getElementById("inrAmountone").innerHTML = inrgrowAmount;
            document.getElementById("usDollarAmounttwo").innerHTML = proAmount;
            document.getElementById("inrAmounttwo").innerHTML = inrproAmount;
            document.getElementById("usDollarAmountthree").innerHTML = enterpriseAmount;
            document.getElementById("inrAmountthree").innerHTML = inrenterpriseAmount;

            // Update Tooltips for USD and INR
            updateTooltip("usdgrowth-tooltip", growthAmount, duration);
            updateTooltip("usdpro-tooltip", proAmount, duration);
            updateTooltip("usdenterprise-tooltip", enterpriseAmount, duration);

            updateInrTooltip("inrgrowth-tooltip", inrgrowAmount, duration);
            updateInrTooltip("inrpro-tooltip", inrproAmount, duration);
            updateInrTooltip("inrenterprise-tooltip", inrenterpriseAmount, duration);
        }

        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
    </script>

<script src="https://www.google.com/recaptcha/api.js?render=6LdkqroeAAAAABvXU2EphNeoH6QPSheI_ZTPqMmH"></script>

<script>
    (function initRecaptchaForms() {
        function run() {
            if (typeof jQuery === 'undefined') {
                setTimeout(run, 50);
                return;
            }
            jQuery(document).ready(function() {
        var sitekey = '6LdkqroeAAAAABvXU2EphNeoH6QPSheI_ZTPqMmH';

        function validateEmail(email) {
            if (email.length < 6)
                return false;
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            return emailReg.test(email);
        }

        $('#contact-form-btn').click(function() {

            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'contact_submit'
                }).then(function(token) {

                    var name = $("#c_name").val();
                    var email = $("#c_email").val();
                    var phone = $("#c_phone").val();
                    var subject = $("#c_subject").val();
                    var message = $("#c_message").val();

                    $("#returnmessage").empty(); // To empty previous error/success message.
                    // Checking for blank fields.
                    if (name == '' || email == '' || phone == '' || message == '') {
                        alert("Please fill all mandatory fields");
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $("#contact-form-btn").attr("disabled", true);
                        $("#contact-form-btn").val('Sending...');
                        $.post("https://www.eductrl.com/contact/send", {
                            c_name: name,
                            c_email: email,
                            c_phone: phone,
                            c_subject: subject,
                            c_message: message,
                            source: 'contact form',
                            captcha_token: token,
                            _token: "uIEfUaYmUr2jPEXzA39gA4gVEOjTrkZKMBty4zVc"
                        }, function(data) {
                            $("#contact-form-btn").attr("disabled", false);
                            $("#contact-form-btn").val('SEND');
                            if (data == '1') {
                                $("#contact-form").trigger("reset");
                                $("#returnmessage").html("<span style='color:#047c12;'>Your message is sent!</span>");
                            } else {
                                $("#returnmessage").html("<span style='color:red;'>Error occured. Please use alternative contact method.</span>");
                            }
                        });
                    }

                });
            });
        });

        $('#eductrl-cms-form-btn').click(function() {
            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'eductrl_cms_submit'
                }).then(function(token) { 

                    var name = $("#form_name").val();
                    var email = $("#form_email").val();
                    var phone = $("#form_phone").val();
                    var message = $("#form_message").val();

                    $("#l").empty(); // To empty previous error/success message.
                    // Checking for blank fields.
                    if (name == '' || email == '' || phone == '' || message == '') {
                        alert("Please fill all mandatory fields");
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $("#eductrl-cms-form-btn").attr("disabled", true);
                        $("#eductrl-cms-form-btn").val('Sending...');
                        $.post("https://www.eductrl.com/eductrl-cms/send-message", {
                            form_name: name,
                            form_email: email,
                            form_phone: phone,
                            form_message: message,
                            source: 'eductrl_cms_form',
                            captcha_token: token,
                            _token: "uIEfUaYmUr2jPEXzA39gA4gVEOjTrkZKMBty4zVc"
                        }, function(data) {
                            $("#eductrl-cms-form-btn").attr("disabled", false);
                            $("#eductrl-cms-form-btn").val('Send Message');
                            if (data == '1') {
                                $("#eductrl-form").trigger("reset");
                                $("#returnmessage1").html("<span style='color:#fff;'>Your message is sent!</span>");
                            } else {
                                $("#returnmessage1").html("<span style='color:red;'>Error occured. Please use alternative contact method.</span>");
                            }
                        });
                    }

                });
            });
        });



        $('#enquiry-form-submit').click(function() {
            const thankYouDiv = document.getElementById('thankYouDiv');
            const formDiv = document.getElementById('formDiv');
            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'enquiry_submit'
                }).then(function(token) {

                    var name = $("#name").val();
                    var email = $("#email").val();
                    var phone = $("#phone").val();
                    var business = $("#business").val();
                    var city = $("#city").val();
                    var country = $("#country").val();
                    var interested_in = $("#interested_in").val();
                    var message = $("#message").val();

                    // Checking for blank fields.
                    if (name == '' || email == '' || phone == '' || business == '' || city == '' || country == '' || interested_in == '') {
                        //console.log("Form values:" + name + "|" + email + "|" + phone + "|" + business + "|" + city);
                        alert('Please fill all required fields');
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $("#enquiry-form-submit").attr("disabled", true);
                        $("enquiry-form-submit").val('Sending...');
                        $.post("https://www.eductrl.com/send-enquiry", {
                            c_name: name,
                            c_email: email,
                            c_phone: phone,
                            c_business: business,
                            c_city: city,
                            c_country: country,
                            c_interested_in: interested_in,
                            c_message: message,
                            source: 'enquiry form',
                            captcha_token: token,
                            _token: "uIEfUaYmUr2jPEXzA39gA4gVEOjTrkZKMBty4zVc",
                        }, function(data) {
                            if (data == '1') {
                                $("#enquiry-form").trigger("reset"); // To reset form fields on success.
                                // formDiv.style.display = 'none';
                                // thankYouDiv.style.display = 'block';

                                // ✅ Redirect to a success page after short delay (optional)
                                window.location.href = "https://www.eductrl.com/thank-you-req-demo";
                            } else {
                                $("#enquiry-form").trigger("reset"); // To reset form fields on success.
                                $('#enquiryModal').modal('toggle');
                                alert("Error occured. Please use alternative contact method.");
                            }
                        });
                    }

                });
            });
        });



        $('#newsletter-form-btn').click(function() {

            grecaptcha.ready(function() {
                grecaptcha.execute(sitekey, {
                    action: 'newsletter_submit'
                }).then(function(token) {

                    var email = $("#newsletter_email").val();

                    // Checking for blank fields.
                    if (email == '') {
                        alert("Please enter email id");
                    } else if (!validateEmail(email)) {
                        alert("Please enter valid email id");
                    } else {
                        // Returns successful data submission message when the entered information is stored in database.
                        $.post("https://www.eductrl.com/newsletter-subscribe", {
                            c_email: email,
                            source: 'newsletter form',
                            captcha_token: token,
                            _token: "uIEfUaYmUr2jPEXzA39gA4gVEOjTrkZKMBty4zVc"
                        }, function(data) {
                            if (data == '1') {
                                $("#newsletter-form").trigger("reset");
                                alert("Thanks! You have subscribed!");
                            } else {
                                alert("Oops! Something went wrong.");
                            }
                        });
                    }

                });
            });
        });



            });
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', run);
        } else {
            run();
        }
    })();
</script>

            <!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M85SFMLP"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->


    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '607839048127874');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=607839048127874&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->

	<script type="text/javascript">
	_linkedin_partner_id = "7318036";
	window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
	window._linkedin_data_partner_ids.push(_linkedin_partner_id);
	</script><script type="text/javascript">
	(function(l) {
	if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
	window.lintrk.q=[]}
	var s = document.getElementsByTagName("script")[0];
	var b = document.createElement("script");
	b.type = "text/javascript";b.async = true;
	b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
	s.parentNode.insertBefore(b, s);})(window.lintrk);
	</script>
	<noscript>
	<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7318036&fmt=gif" />
	</noscript>

	<script type="text/javascript">
	var sc_project=12775076; 
	var sc_invisible=1; 
	var sc_security="9e105de8"; 
	</script>
	<script type="text/javascript"
	src="https://www.statcounter.com/counter/counter.js"
	async></script>
	<noscript><div class="statcounter"><a title="web counter"
	href="https://statcounter.com/" target="_blank"><img
	class="statcounter"
	src="https://c.statcounter.com/12775076/0/9e105de8/1/"
	alt="web counter"
	referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>


	
`;

export function PricingCloneContent() {
  return (
    <div
      className="eductrl-clone-page"
      dangerouslySetInnerHTML={{ __html: normalizeCloneHtml(rawHtml) }}
    />
  );
}
