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
                           <input type="hidden" name="_token" value="CxEwUn85CPRuRKB5NEfi3qldzPUo0rxvx5qooIFY">                           <div class="error-container"></div>
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
            <a href="#" target="_blank" rel="noopener" class="btn btn-dark" style="padding:10px 24px;">Visit HolyDeen Store &#8594;</a>
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
          <div class="service-icon service-icon-bg-1 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-cubes"></i></div></div>
          <div class="service-content"><h3>Product Management</h3><p>Add, edit and organize unlimited products with categories, variants and stock tracking.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-icon service-icon-bg-2 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-shopping-cart"></i></div></div>
          <div class="service-content"><h3>Order Management</h3><p>Track every order from placement to delivery. Manage statuses, cancellations and returns.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-icon service-icon-bg-3 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-credit-card"></i></div></div>
          <div class="service-content"><h3>Payment Integration</h3><p>Accept bKash, Nagad, bank transfer, cash on delivery and international gateways.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-icon service-icon-bg-4 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-users"></i></div></div>
          <div class="service-content"><h3>Customer Accounts</h3><p>Customers can register, track orders, manage wishlist and re-order from their dashboard.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-icon service-icon-bg-5 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-mobile"></i></div></div>
          <div class="service-content"><h3>Mobile Responsive</h3><p>Fully optimized for mobile, tablet and desktop. Your customers shop on any device.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-icon service-icon-bg-6 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-search"></i></div></div>
          <div class="service-content"><h3>SEO Optimized</h3><p>Built-in SEO tools with meta tags, sitemap generation and fast page loads.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-icon service-icon-bg-1 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-line-chart"></i></div></div>
          <div class="service-content"><h3>Analytics Dashboard</h3><p>Track sales, revenue, top products and customer behavior in real-time.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-icon service-icon-bg-2 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-truck"></i></div></div>
          <div class="service-content"><h3>Shipping Management</h3><p>Set shipping zones, rates and free shipping thresholds. Integrate with delivery services.</p></div>
        </div>
      </div>
      <div class="col-md-4 text-center wow fadeInUp" style="margin-bottom:30px;">
        <div class="tw-service-box features-box" style="padding:32px 24px 48px;">
          <div class="service-icon service-icon-bg-3 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-tags"></i></div></div>
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
          <a href="#" target="_blank" rel="noopener" class="btn btn-outline-light" style="padding:12px 28px;">See Live Demo</a>
        </div>
      </div>
    </div>
  </div>
</section>


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
                  <img src="/images/logo.png" alt="DeenSoft" style="width:220px;height:auto;">
               </a>
               <p class="footer-info-text" style="font-size: 14px;line-height: 24px;">
                  Running an Education Consultancy/ Coaching business involves various activities. You need a good &amp; powerful software system to manage your business more efficiently &amp; provide good services to your students.<br /><br />DeenSoft Software is the perfect, affordable solution for your business.
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

const html = normalizeCloneHtml(rawHtml);

export function EcommerceCloneContent() {
  return (
    <div
      className="deensoft-clone-page"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
