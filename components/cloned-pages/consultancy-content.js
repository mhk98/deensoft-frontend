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
                           <a href="/" class="logo">
                               <img src="/images/logo.png" alt="DeenSoft" style="width: 60%;">
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
                                   <li><a target="_blank" href="#"><i
                                               class="fa fa-facebook"></i></a></li>
                                   <li><a target="_blank" href="#" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a></li>
                                   <li><a target="_blank" href="#"><i
                                               class="fa fa-linkedin"></i></a></li>
                     <li><a href="#"><i class="fa fa-instagram"></i></a></li>

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
                           <a href="#" class="text-primary font-weight-bold" target="_blank"
                               style="font-size: 1rem;">#</a>
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
                           <input type="hidden" name="_token" value="uPmJuMnUIsh79MJ531yrlDQ62snk8R6VU7UCcMUA">                           <div class="error-container"></div>
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
                  <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                  <a target="_blank" href="#" aria-label="X (Twitter)"><span class="x-logo-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></span></a>
                  <a target="_blank" href="#"><i class="fa fa-linkedin"></i></a>

                  <!-- <a href="#"><i class="fa fa-google-plus"></i></a> -->
                  <a href="#"><i class="fa fa-instagram"></i></a> 
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
                <a class="navbar-brand tw-nav-brand header-size" href="/">
                    <img src="/images/logo.png" alt="DeenSoft" class="header-logo-size">
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
                        <li class="nav-item"><a class="nav-link p-2" href="/">Home</a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link p-2" href="#" data-toggle="dropdown">
                                Products
                                <span class="tw-indicator"><i class="fa fa-angle-down"></i></span>
                            </a>
                            <ul id="tw-megamenu" class="dropdown-menu tw-mega-menu p-4" style="min-width: 500px;">
                                <div class="row justify-content-start p-2">
                                    <div class="col-6 mb-3 hover-scale p-3">
                                        <a href="/consultancy">
                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">EduConnect CRM</p>
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
                            <a class="nav-link p-2" href="/pricing">Pricing</a>
                        </li>

                        <li class="nav-item"><a class="nav-link p-2" href="/blog">Blog</a></li>

                        <li class="nav-item"><a class="nav-link p-2" href="/about">About Us</a></li>
                        <li class="nav-item"><a class="nav-link p-2" href="/contact">Contact</a></li>

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

        
<!-- Start hero section -->
<div class="tw-hero-slider">
    <div class="consultancy-slider-2">
        <div class="slider-wrapper d-table">
            <div class="slider-inner d-table-cell">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="slider-content">
                                <h1 class="text-white"><span style="font-size:1.2em;">EduConnect CRM</span><br />Management Software for Study Abroad Consultants</h1>
                                <p class="text-white">
                                    EduConnect CRM is a revolutionary CRM software that helps you manage your
                                    business more efficiently. With DeenSoft, Lead conversions are likely to increase,
                                    and student application processing time is considerably reduced.
                                </p>
                                <a href="#" class="btn btn-outline request-demo" data-toggle="modal" data-target="#enquiryModal">Request Demo</a>
                            </div>
                        </div>
                        <!-- Col end -->
                        <div class="col-md-4">
                            <img src="/images/hero-diagram.png" alt="" class="img-fluid slider-img" fetchpriority="high" width="480" height="400">
                        </div>
                        <!-- col end -->
                    </div>
                    <!-- Row End -->
                </div>
                <!-- Container End -->
            </div>
            <!-- Slider Inner End -->
        </div>
        <!-- Slider Wrapper End -->
    </div>
    <!-- Slider 2 end -->
</div>
<!-- End hero section -->

<!--  new section -->
<section class="promo-section" style="padding-top:80px;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
                <div class="mb-3 text-center">
                    <h2>A CRM to centralize Information & Streamline processes for increased business efficiency</h2>
                </div>
            </div>
            <div class="col-md-12">
                <div class="mb-5 text-center">
                    <p>
                        DeenSoft CRM software is specially designed software for overseas education consultants to reduce
                        the time and effort required for managing student overseas applications while increasing
                        productivity. Unlike most generic CRMs that have only the basic features, DeenSoft has extensive
                        features to manage the various aspects of the overseas education business.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="card promo-single position-relative text-center bg-white custom-shadow rounded-custom mb-4">
                    <h3 class="h5">Never miss a Lead</h3>
                    <div class="promo-icon mb-2">
                        <img src="/images/Lead%20Management.png" alt="" class="lead-img">
                    </div>
                    <div class="promo-info">
                        <p class="mb-0 crmInformation" style="font-size: 14px">Track leads by setting up next followup date and time, and receive reminders
                            on the scheduled followup time. Quickly assign the status of every lead, assign the lead
                            owner to each lead, and track leads efficiently.</p>
                    </div>
                    <!--pattern start-->

                    <!--pattern end-->
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card promo-single position-relative text-center bg-white custom-shadow rounded-custom mb-4">
                    <h3 class="h5">Organize Student Counselling</h3>
                    <div class="promo-icon mb-2">
                        <img src="/images/student-panel.png" style="padding-bottom:13px;" alt="" class="student-img">
                    </div>
                    <div class="promo-info">
                        <p class="mb-0" style="font-size: 14px">
                            Assign the counselor and scheduling time for every qualified lead. Receive notifications for
                            counseling meetings, maintain a calendar to arrange and monitor the counselor's activities,
                            and simplify counseling process.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class=" card promo-single position-relative text-center bg-white custom-shadow rounded-custom mb-4">
                    <h3 class="h5">Student Document Upload</h3>
                    <div class="promo-icon mb-2">
                        <img src="/images/Student%20Documents.png" alt="" class="upload-img">
                    </div>
                    <div class="promo-info">
                        <p class="mb-0" style="font-size: 14px">
                            Students can add course preferences, upload all required documents and thereby reduce no. of phone, email correspondence. Staff can download all uploaded documents as a single zip file.
                        </p>
                    </div>
                    <!--pattern start-->

                    <!--pattern end-->
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="card promo-single position-relative text-center bg-white custom-shadow rounded-custom mb-4">
                    <h3 class="h5">Application Status Updates</h3>
                    <div class="promo-icon mb-2">
                        <img src="/images/application-management.png" alt="" class="update-img">
                    </div>
                    <div class="promo-info">
                        <p class="mb-0" style="font-size: 14px">
                            Update the status of University application with ease & students get notified. Use 'In
                            application' communication feature to send message, get/share documents with the student.
                        </p>
                    </div>
                    <!--pattern start-->

                    <!--pattern end-->
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="card promo-single position-relative text-center bg-white custom-shadow rounded-custom mb-4">
                    <h3 class="h5">Course Suggestions</h3>
                    <div class="promo-icon mb-2">
                        <img src="/images/Course%20Finder.png" alt="" class="course-img">
                    </div>
                    <div class="promo-info">
                        <p class="mb-0" style="font-size: 14px">
                            Import University course data & students/staff can use course finder to search available
                            courses by various criteria. Staff can suggest courses to students from the portal &
                            students get notified of it.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class=" card promo-single position-relative text-center bg-white custom-shadow rounded-custom mb-4">
                    <h3 class="h5">Agent Management</h3>
                    <div class="promo-icon mb-2">
                        <img src="/images/agent-panel.png" alt="" class="agent-img">
                        <!-- <i class="fas fa-bezier-curve text-danger fa-3x"></i> -->
                    </div>
                    <div class="promo-info">
                        <p class="mb-0" style="font-size: 14px">
                            Agents can register to your portal, add students from their agent panel. You can manage
                            agent referrals, commissions, agent commission payouts. Agents can view their commission
                            data.
                        </p>
                    </div>
                    <!--pattern start-->

                    <!--pattern end-->
                </div>
            </div>
        </div>
    </div>

</section>
<!--feature promo end-->

<section class="feature-tab-section bg-light">
    <div class="container">
        <div class="row justify-content-center align-content-center">
            <div class="col-lg-6 col-md-10">
                <div class="mb-3 text-center">
                    <h4 class="h5 text-primary">Features</h4>
                    <h2>Powerful Advanced Features</h2>
                    <p>EduConnect CRM Software includes The <strong>Admin Panel</strong>, <strong>Student Panel</strong> & <strong>Agent Panel</strong>.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">

                <nav class="text-center">
                    <div class="nav justify-content-center feature-tab-list-2 mb-0" id="nav-tab" role="tablist">
                        <a class="nav-link active" id="" data-toggle="tab" href="#tab-1" role="tab" aria-controls="nav-tab-1" aria-selected="true"> Admin Panel</a>
                        <a class="nav-link" id="" data-toggle="tab" href="#tab-2" role="tab" aria-controls="nav-tab-2" aria-selected="false"> Student Panel</a>
                        <a class="nav-link" id="" data-toggle="tab" href="#tab-3" role="tab" aria-controls="nav-tab-3" aria-selected="false"> Agent Panel</a>
                    </div>
                </nav>

                <div class="tab-content" id="nav-tabContent">
                    <div class="pt-60 tab-pane fade show active" id="tab-1" role="tabpanel">
                        <div class="row justify-content-center align-items-center justify-content-around">
                            <div class="col-lg-5">
                                <div class="feature-tab-info">
                                    <h3>Administration Panel</h3>
                                    <p>
                                        DeenSoft comes with a admin panel where your staff, managers, and administrators
                                        can login and handle various aspects of study abroad business. DeenSoft includes
                                        roles and permission features where you can restrict access to features based on
                                        the staff member role.</p>
                                    <p>Admin panel gives the ability to manage leads, students, applications, agents,
                                        send broadcast messages by email, SMS, and WhatsApp.</p>
                                    <p>It also includes various settings to configure your website, lead status, lead
                                        sources, web to lead forms, mandatory document configs, email/sms/whatsapp
                                        templates, manage branch and many more.
                                    </p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img src="/images/admin-panel.png" alt="" class="img-fluid image-styling mt-4 mt-lg-0 mt-xl-0">
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade pt-60" id="tab-2" role="tabpanel">
                        <div class="row justify-content-center align-items-center justify-content-around">
                            <div class="col-lg-6">
                                <img src="/images/student-panel.png" alt="" class="img-fluid image-styling mt-4 mt-lg-0 mt-xl-0">
                       
                            </div>
                            <div class="col-lg-5">
                                <div class="feature-tab-info">
                                    <h3>Student Panel</h3>
                                    <p>
                                        Students can add their profile details, academic details, English tests & other scores like IELTS, TOEFL, PTE, DET, ACT, SAT, GRE, GMAT, foreign language certification details, internships, and experience details.</p>
                                    <p>Students can search for courses, view course suggestions, update course preferences, upload documents.
                                    </p>
                                    <p>Students can track their University application status, get status update notifications, upload additional documents.</p>
                                    <a href="/consultancy/student-features" class="read-more-link text-decoration-none mt-4 btn btn-info">Know More
                                        <i class="fa fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade pt-60" id="tab-3" role="tabpanel">
                        <div class="row justify-content-center align-items-center justify-content-around">
                            <div class="col-lg-5">
                                <div class="feature-tab-info">
                                    <h3>Agent Panel</h3>
                                    <p>
                                        Agent panel or Partner panel allows your partners to login to the portal & refer students.
                                    </p>
                                    <p>
                                        Partners can add student details, update course preferences, upload student documents. They can view status of their student applications.
                                    </p>
                                    <p>
                                        Partners can view their expected commissions, view payments received.
                                    </p>
                                    <a href="/consultancy/agent-features" class="read-more-link text-decoration-none mt-4 btn btn-info">Know More
                                        <i class="fa fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img src="/images/agent-panel.png" alt="" class="img-fluid image-styling mt-4 mt-lg-0 mt-xl-0">
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--feature tab section end-->

<section>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-3 wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <h2 class="column-title text-center" style="font-weight: 600;font-size: 31px;">Features</h2>
                <div class="text-center">
                    
                    <span class="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40"></span>
                </div>
                
            </div>
        </div>
        <div class="row gx-md-8 gy-10 text-center">
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-green rounded-xl mb-2"> <img src="/images/Lead%20Management.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Lead Management</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-green rounded-xl mb-2"> <img src="/images/Student%20Management.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Counselling Management</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-purple rounded-xl mb-2"> <img src="/images/Student%20Management.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Student Management</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-yellow rounded-xl mb-2"> <img src="/images/Online%20Courses.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Course Preferences</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-pink rounded-xl mb-2"> <img src="/images/Student%20Documents.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Student Documents</p>
            </div>
            <div class="col-sm-12 col-md-3">
                <div class="svg-bg svg-bg-lg bg-pale-violet rounded-xl mb-2"> <img src="/images/application-management.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Application Management</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-orange rounded-xl mb-2"> <img src="/images/Course%20Finder.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Course Suggestions</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-blue rounded-xl mb-2"> <img src="/images/Course%20Finder.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Course Finder</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Agents.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Agent/Partner</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Notifications.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Broadcasts</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Invoices.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Invoices</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Chat.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Support Tickets</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Online%20Courses.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Webinar/Events</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Chat.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Analytics/Reports</p>
            </div>
            
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Lead%20Management.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Web to Lead, Email to
                    Lead, CSV, FB</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Import%20Data.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Import leads,
                    students, course data</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Form%20Builder.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Templates (Email, sms,
                    Whatsapp)</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Coaching%20Batch%20Management.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Staff Management,
                    Staff Roles, Permissions</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/University%20Applications.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Branch office
                    Management</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Form%20Builder.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Content Management
                    (CMS)</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/whatsapp.svg" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Whatsapp</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Chat.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Outbound Call</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Chat.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Zapier</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Lead%20Management.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">FB/Insta/Whatsapp to Lead</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Import%20Data.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Google Sheet to Lead</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Chat.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Chat</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Coaching%20Batch%20Management.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">Automation</p>
            </div>
            <div class="col-sm-12 col-md-3 mb-3">
                <div class="svg-bg svg-bg-lg bg-pale-leaf rounded-xl mb-2"> <img src="/images/Invoices.png" class="svg-inject icon-svg solid text-navy" style="width: 45px" alt="" /> </div>
                <p class="fs-20">University Invoice</p>
            </div>
        </div>
    </div>
</section>


<section class="work-process bg-light" style="padding:20px 0px;">
    <div class="container marquee-images">
        <marquee width="100%" direction="left">
            <div class="d-flex">
                <img src="/images/Chat.png" alt="email" class="img-fluid">
                <img src="/images/Notifications.png" alt="sms" class="img-fluid">
                <img src="/images/whatsapp.svg" alt="whatsapp" class="img-fluid">
                <img src="/images/Import%20Data.png" alt="csv" class="img-fluid">
                <img src="/images/Chat.png" alt="Zapier" class="img-fluid">
                <img src="/images/Chat.png" alt="Pabbly" class="img-fluid">
                <img src="/images/Lead%20Management.png" alt="facebook" class="img-fluid">
                <img src="/images/Chat.png" alt="twilio" class="img-fluid">
                <img src="/images/Invoices.png" alt="paypal" class="img-fluid">
                <img src="/images/Invoices.png" alt="stripe" class="img-fluid">
                <img src="/images/Invoices.png" alt="razorpay" class="img-fluid">
            </div>
        </marquee>
    </div>
</section>

<!-- call to action -->
<section class="cta-subscribe bg-dark text-white position-relative overflow-hidden" style="padding-top:80px;padding-bottom:120px">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7 col-md-8">
                <div class="subscribe-info-wrap text-center position-relative z-2">
                    <div class="position-relative z-5">
                        <h4 class="text-white" style="font-size:1.5em;">Start using EduConnect CRM Today!</h4>
                        <h5 class="text-white">Starts at ৳2,999/month only</h5>
                        <a href="#" class="btn btn-dark mt-4" data-toggle="modal" data-target="#enquiryModal">Get Started Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- call to action end -->



        <a href="#"
            className="fixed-bottomRight  whatsappIcon" >
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
                     <!-- <li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
                     <li><a target="_blank" href="#"><i class="fa fa-linkedin"></i></a></li>
                     <li><a href="#"><i class="fa fa-instagram"></i></a></li>
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
                          <a class="footer-icon"  href="#"><i class="fa fa-whatsapp" aria-hidden="true" style="    font-size: 30px;"></i></a> &nbsp;&nbsp;&nbsp;
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
                        <li><a href="/consultancy">EduConnect CRM</a></li>
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
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
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

            <!-- Google Tag Manager (noscript) -->
	<!-- End Google Tag Manager (noscript) -->


    <!-- Meta Pixel Code -->
    <!-- End Meta Pixel Code -->


	
`;

export function ConsultancyCloneContent() {
  return (
    <div
      className="deensoft-clone-page"
      dangerouslySetInnerHTML={{ __html: normalizeCloneHtml(rawHtml) }}
    />
  );
}
