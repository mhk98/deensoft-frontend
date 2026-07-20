import { normalizeCloneHtml } from "@/lib/clone-html";
import { insertSeoContentBeforeFooter } from "@/components/seo-content-blocks";

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
                                           <p style="color:#000;">Give us a calls</p>
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

        
<!-- Start hero section -->

<div class="tw-hero-slider">
    <div class="slider-2">
        <div class="slider-wrapper d-table">
            <div class="slider-inner d-table-cell">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-7 mt-3">
                            <div class="slider-content">
                                <h1><span>All-in-One CRM</span> for Study Abroad Agencies</h1>
                                <p>Easily manage your leads, student applications, and follow-ups in one place. Our system helps you handle the full admission process smoothly and save time.
</p>
                                <a href="/consultancy" class="btn btn-dark" style="margin-top: 10px;">See Features</a>
                                <a href="#" class="btn btn-outline" data-toggle="modal" data-target="#enquiryModal" style="margin-top: 10px;">Request Demo</a>
                            </div>
                        </div>
                        <!-- Col end -->
                        <div class="col-md-5 mt-3">
                            <img src="/images/hero-diagram.png" alt="DeenSoft CRM Features" class="img-fluid slider-img w-100" fetchpriority="high" width="600" height="450">
                        </div>

                        <!-- <div class="col-12 mt-4 text-center">
                            <a href="#" style="font-size: 18px; border-radius: 20px;" class="bg-danger text-white py-3 px-5">
                                📢 Diwali OFFER!! Get 10% Off 🎁💥🎉
                            </a>
                        </div> -->
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
<section class="whatsnew-section">
    <img src="/images/whatsnew.png" alt="What's New in DeenSoft CRM" style="display:block;width:100%;height:auto;" loading="lazy">
</section>
<section id="tw-service" class="tw-service ">
    <div class="container">
        <div class="row text-center">
            <div class="col section-heading">
                <h2 class="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay=".1s">
                    <span>Smart CRM for Study Abroad</span>
                    <small>This CRM is built for education consultants to manage their daily tasks more easily.
From handling leads to tracking applications and supporting students, everything is in one system. Work faster, stay organized, and grow your business.</small>
                </h2>
                <span class="animate-border ml-auto mr-auto tw-mt-20"></span>
            </div>
            <!-- Title Col End -->
        </div>
        <!-- Title Row End -->
        <div class="row">
            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Student%20Management.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Student Management</h3>
                        <p>Keep all student information in one place. Track profiles, course interests, documents, and application progress.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 44px 60px;">
                    <div class="service-icon service-icon-bg-6 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Student%20Documents.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon end-->
                    <div class="service-content">
                        <h3>Documents</h3>
                        <p>Allow students to upload documents easily. Staff can view and download files anytime with just one click.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end-->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-3 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/University%20Applications.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon End -->
                    <div class="service-content">
                        <h3>University Applications</h3>
                        <p>Create and manage applications based on student choices. Track status, communicate, and control the full workflow.
</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Lead%20Management.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Lead Management</h3>
                        <p>Track new leads, assign tasks, and follow up on time. Send updates and manage communication easily.
</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Agents.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Agents Management</h3>
                        <p>Manage your agents and their activities. Track student entries, documents, and commission details.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Course%20Finder.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Course Finder</h3>
                        <p>Organize university courses and categories. Search, add, and manage course data quickly.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Invoices.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Invoice System</h3>
                        <p>Students can update their profile, upload documents, and check their application status anytime.
</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service Content end -->
                </div>
                <!-- Service box end -->
            </div>
            <!-- Col End -->


            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-4 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Self%20Service%20Portal.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Student Portal</h3>
                        <p>Students can update their profile, upload documents, and check their application status anytime.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service Box end -->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-5 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Form%20Builder.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Form Builder</h3>
                        <p>Create custom forms and collect leads from your website. Share links or embed forms easily.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box end -->
            </div>

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.4s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-2 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Notifications.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service icon end -->
                    <div class="service-content">
                        <h3>Notifications</h3>
                        <p>Send automatic updates via email, SMS, or WhatsApp to keep students and staff informed.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col End -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.6s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-3 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Chat.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon End -->
                    <div class="service-content">
                        <h3>Chat System</h3>
                        <p>Chat with team members and students in real-time. Improve communication and teamwork.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col end -->

            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2.6s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 30px 62px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-3 d-table">
                        <div class="service-icon-inner d-table-cell">
                            <img src="/images/Import%20Data.png" alt="" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <!-- Service Icon End -->
                    <div class="service-content">
                        <h3>Data Import</h3>
                        <p>Import your old data easily into the system. Export data anytime when needed.</p>
                        <!--   <a href="#" class="tw-readmore">Read More
                                 <i class="fa fa-angle-right"></i>
                              </a> -->
                    </div>
                    <!-- Service content end -->
                </div>
                <!-- Service box End -->
            </div>
            <!-- Col end -->


        </div>
        <!-- Row end -->
        <div class="row">
            <div class="col-md-12 text-center"><a href="/consultancy" class="btn btn-dark btn-lg tw-mt-80">View All Features</a></div>
        </div>
    </div>
    <!-- container -->
</section>
<!-- Tw Service End -->


<!-- HolyDeen Store Section -->

<section id="tw-holydeen" class="tw-service">
    <div class="container">
        <div class="row text-center">
            <div class="col section-heading">
                <h2 class="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay=".1s">
                    <span>HolyDeen</span> Store
                    <small>Bangladesh's premier Islamic lifestyle e-commerce platform — fashion, cosmetics, gadgets, grocery and more. Built and powered by DeenSoft.</small>
                </h2>
                <span class="animate-border ml-auto mr-auto tw-mt-20"></span>
            </div>
        </div>
        <div class="row" style="margin-top:20px;">
            <div class="col-md-3 col-6 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 28px 20px 42px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128084;</div></div>
                    <div class="service-content"><h3>Men's Fashion</h3><p>Shirts, pants, footwear, watches and accessories for men.</p></div>
                </div>
            </div>
            <div class="col-md-3 col-6 text-center wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 28px 20px 42px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-2 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128155;</div></div>
                    <div class="service-content"><h3>Women's Fashion</h3><p>Sarees, kurtis, salwar kameez, jewelry and handbags.</p></div>
                </div>
            </div>
            <div class="col-md-3 col-6 text-center wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 28px 20px 42px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-3 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128132;</div></div>
                    <div class="service-content"><h3>Cosmetics</h3><p>Skincare, fragrances, makeup and hair care essentials.</p></div>
                </div>
            </div>
            <div class="col-md-3 col-6 text-center wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 28px 20px 42px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-4 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128241;</div></div>
                    <div class="service-content"><h3>Gadgets</h3><p>Laptops, phones, audio equipment and tech accessories.</p></div>
                </div>
            </div>
            <div class="col-md-3 col-6 text-center wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 28px 20px 42px;">
                    <div class="service-icon service-icon-bg-5 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#128722;</div></div>
                    <div class="service-content"><h3>Grocery</h3><p>Oils, ghee, spices, tea, eggs and specialty food items.</p></div>
                </div>
            </div>
            <div class="col-md-3 col-6 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 28px 20px 42px;">
                    <div class="service-icon service-icon-bg-6 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#127968;</div></div>
                    <div class="service-content"><h3>Home &amp; Lifestyle</h3><p>Bedding, cookware, cleaning and household essentials.</p></div>
                </div>
            </div>
            <div class="col-md-3 col-6 text-center wow fadeInUp" data-wow-duration="2.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 28px 20px 42px;">
                    <div class="service-icon service-icon-bg-1 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#9728;&#65039;</div></div>
                    <div class="service-content"><h3>Eid Collection</h3><p>Embroidered panjabis, suits and premium festive attire.</p></div>
                </div>
            </div>
            <div class="col-md-3 col-6 text-center wow fadeInUp" data-wow-duration="2.4s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 28px 20px 42px;">
                    <div class="service-icon service-icon-bg-2 d-table"><div class="service-icon-inner d-table-cell" style="font-size:2rem;">&#9998;&#65039;</div></div>
                    <div class="service-content"><h3>Stationary &amp; Craft</h3><p>Markers, notebooks, art supplies and craft materials.</p></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center"><a href="/holydeen-store" class="btn btn-dark btn-lg tw-mt-80">Explore HolyDeen Store</a></div>
        </div>
    </div>
</section>

<!-- E-Commerce Solution Section -->

<section id="tw-ecommerce" class="tw-service" style="background:#f4fbf6;padding: 60px 0;">
    <div class="container">
        <div class="row text-center">
            <div class="col section-heading">
                <h2 class="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay=".1s">
                    <span>E-Commerce</span> Solution
                    <small>DeenSoft builds professional, scalable online stores tailored for your business — product management, payments and more.</small>
                </h2>
                <span class="animate-border ml-auto mr-auto tw-mt-20"></span>
            </div>
        </div>
        <div class="row" style="margin-top:20px;">
            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 24px 48px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-1 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-cubes"></i></div></div>
                    <div class="service-content"><h3>Product Management</h3><p>Add, organize and manage unlimited products with categories, variants and stock tracking.</p></div>
                </div>
            </div>
            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 24px 48px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-2 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-shopping-cart"></i></div></div>
                    <div class="service-content"><h3>Order Management</h3><p>Track every order from placement to delivery. Manage statuses, cancellations and returns.</p></div>
                </div>
            </div>
            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 24px 48px;margin-bottom:22px;">
                    <div class="service-icon service-icon-bg-3 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-credit-card"></i></div></div>
                    <div class="service-content"><h3>Payment Integration</h3><p>Accept bKash, Nagad, bank transfer, cash on delivery and international gateways.</p></div>
                </div>
            </div>
            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 24px 48px;">
                    <div class="service-icon service-icon-bg-5 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-mobile"></i></div></div>
                    <div class="service-content"><h3>Mobile Responsive</h3><p>Fully optimized for mobile, tablet and desktop — customers shop on any device.</p></div>
                </div>
            </div>
            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 24px 48px;">
                    <div class="service-icon service-icon-bg-6 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-search"></i></div></div>
                    <div class="service-content"><h3>SEO Optimized</h3><p>Built-in SEO tools with meta tags, sitemap generation and fast page loads to rank higher.</p></div>
                </div>
            </div>
            <div class="col-md-4 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                <div class="tw-service-box features-box" style="padding: 32px 24px 48px;">
                    <div class="service-icon service-icon-bg-1 d-table"><div class="service-icon-inner d-table-cell"><i class="fa fa-line-chart"></i></div></div>
                    <div class="service-content"><h3>Analytics Dashboard</h3><p>Track sales, revenue, top products and customer behavior with real-time reporting.</p></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center"><a href="/ecommerce" class="btn btn-dark btn-lg tw-mt-80">See E-Commerce Solution</a></div>
        </div>
    </div>
</section>

<!-- end new sections -->




<section id="tw-blog" class="tw-blog">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="section-heading">
                    <h2>
                        CRM Solutions for Education <span>Businesses</span>
                    </h2>
                    <p>Discover how our smart CRM system can help you manage and grow your education business more effectively.
</p>
                    <span class="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40"></span>
                </div>
                <!-- Heading End -->
            </div>
            <!-- Col End -->
        </div>
        <!-- End Row 1 -->
        <div class="row wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.2s; animation-name: fadeInUp;">
            <div class="col-lg-6 col-md-12">
                <div class="tw-latest-post">
                    <div class="latest-post-media text-center">
                        <img src="/images/education-consultancy-card.svg" alt="Study Abroad Consultancy CRM" class="img-fluid" loading="lazy">
                    </div>
                    <!-- End Latest Post Media -->
                    <div class="post-body">
                        <div class="post-info" style="margin-left: 0px;text-align: center;">
                            <h3 class="post-title">Study Abroad Consultancy CRM</h3>
                            <div class="entry-content">
                                <p>
                                    A complete solution for overseas education consultants. Manage student applications, documents, and communication in one place. Reduce manual work and improve efficiency.
                                </p>
                                <a href="/blog/study-abroad-consultancy-crm-deensoft" class="tw-readmore">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                            <!-- End Entry Content -->
                        </div>
                        <!-- End Post info -->
                    </div>
                    <!-- End Post Body -->
                </div>
                <!-- End Tw Latest Post -->
            </div>
            <!-- End Col -->
            <div class="col-lg-6 col-md-12">
                <div class="tw-latest-post">
                    <div class="latest-post-media text-center">
                        <img src="/images/education-store-card.svg" alt="HolyDeen Store" class="img-fluid" loading="lazy">
                    </div>
                    <!-- End Latest Post Media -->
                    <div class="post-body">
                        <div class="post-info" style="margin-left: 0px;text-align: center;">
                            <h3 class="post-title">HolyDeen Store</h3>
                            <div class="entry-content">
                                <p>
                                    Designed for coaching centers and training institutes. Manage students, classes, and daily operations with ease. Stay organized and improve your overall performance.
                                </p>
                                <a href="/blog/training-coaching-institute-crm-deensoft" class="tw-readmore">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                            <!-- End Entry Content -->
                        </div>
                        <!-- End Post info -->
                    </div>
                    <!-- End Post Body -->
                </div>
                <!-- End Tw Latest Post -->
            </div>
            <!-- End Col -->

            <!--   <div class="col-md-12 text-center wow zoomIn" data-wow-duration="1s" data-wow-delay="1s" style="visibility: visible; animation-duration: 1s; animation-delay: 1s; animation-name: zoomIn;"><a href="#" class="btn btn-primary btn-lg tw-mt-80">view all</a></div> -->
        </div>
        <!-- End Row -->
    </div>
    <!-- Container End -->
</section>

<section id="main-container" class="main-container">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="section-heading wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                    <h2 style="font-size:40px;">
                        Everything You Need to Run Your Education Consultancy
                    </h2>
                    <span class="animate-border ml-auto mr-auto tw-mt-20 tw-mb-40"></span>
                </div>
                <!-- Heading End -->
            </div>
            <!-- Col End -->
        </div>
        <!-- End Row 1 -->

        <div class="row">
            <div class="col-md-6 wow fadeInLeft" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="tw-about-bin">
                    <h6><span>ADMINISTRATION</span></h6>
                    <h2 class="column-title" style=" font-weight: 600;font-size: 31px;">Student Management System</h2>
                    <span class="animate-border tw-mb-40 tw-mt-20"></span>
                    <h4>Handle End-to-End Student Journeys</h4>
                    <p>Manage the complete student journey from start to finish. Communicate with students easily, store all records in one place, and onboard new students without hassle. Keep everything organized with a full 360° student profile.
</p>
                    <h4>Overseas Education Support</h4>
                    <p>Help students choose the right study destination by offering personalized guidance. Track their preferences and manage applications smoothly through one system.</p>
                </div>
                <!-- About Bin End -->
            </div>
            <!-- Col End -->
            <div class="col-md-6 align-self-md-center wow fadeInRight" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInRight;">
                <img src="/images/student-management.png" alt="Student Management System" class="img-fluid image-styling" loading="lazy">
            </div>
            <!-- Col End -->
        </div>
        <!-- Row end -->

        <div class="row tw-mt-100">
            <div class="col-md-6 align-self-md-center wow fadeInLeft" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <img src="/images/application-management.png" alt="Application Management" class="img-fluid image-styling" loading="lazy">
            </div>
            <!-- Col End -->
            <div class="col-md-6 wow fadeInRight" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInRight;">
                <div class="tw-about-bin">
                    <h2 class="column-title" style=" font-weight: 600;font-size: 31px;">Application Management</h2>
                    <span class="animate-border tw-mb-40 tw-mt-20"></span>
                    <h4>Smart & Easy Application Search</h4>
                    <p>Quickly find any application using filters like student name, country, course, or status.
Save time and manage data more efficiently.
</p>
                    <h4>Live Updates & Communication</h4>
                    <p>Keep students informed at every step of the process. Update application status in real-time and ensure a clear, hassle-free experience.</p>
                </div>
                <!-- About Bin End -->
            </div>
            <!-- Col End -->
        </div>
        <!-- Row end -->


        <div class="row tw-mt-100">
            <div class="col-md-6 wow fadeInLeft" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="tw-about-bin">
                    <h2 class="column-title" style=" font-weight: 600;font-size: 31px;">Easy-to-Use Student Self-Service Portal</h2>
                    <span class="animate-border tw-mb-40 tw-mt-20"></span>
                    <p>Our CRM comes with a simple and user-friendly portal for both students and staff. Students can access important information and manage their activities from one place.</p>
                    <p>Students can easily create accounts, update their personal and academic details, and upload required documents without any hassle.
</p>
<p>They can also check test scores, add study preferences, and explore suitable courses. The system allows them to track their university application status anytime.</p>

                </div>
                <!-- About Bin End -->
            </div>
            <!-- Col End -->
            <div class="col-md-6 align-self-md-center wow fadeInRight" data-wow-duration="1.1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.3s; animation-name: fadeInRight;">
                <img src="/images/student-portal.png" alt="Student Profile" class="img-fluid image-styling" loading="lazy">
            </div>
            <!-- Col End -->
        </div>
        <!-- Row end -->

    </div>
    <!-- Container end -->
</section>

<section class="home-clients-section">
    <div class="container">
        <div class="home-clients-shell">
            <h4 class="home-clients-title">Our Clients</h4>
            <div class="home-clients-logos">
                <div class="home-client-logo">
                    <img src="/images/client-nova.svg" alt="Nova Study Care" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="/images/client-pathway.svg" alt="Pathway Global" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="/images/client-eduwise.svg" alt="EduWise Center" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="/images/client-bridge.svg" alt="Bridge Academy" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="/images/client-campus.svg" alt="Campus Link" class="img-fluid" loading="lazy">
                </div>
                <div class="home-client-logo">
                    <img src="/images/client-atlas.svg" alt="Atlas Overseas" class="img-fluid" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="tw-analysis" class="tw-analysis-area" style="    padding-bottom: 90px;">
    <div class="analysis-bg-pattern d-none d-md-inline-block">
        <img class="wow fadeInUp" src="/images/hero-diagram.png" alt="" style="visibility: visible; animation-name: fadeInUp;">
        <img class="wow fadeInUp" src="/images/hero-diagram.png" alt="" style="visibility: visible; animation-name: fadeInUp;">
        <!-- <img class="wow fadeInUp" src="/images/hero-diagram.png" alt="" style="visibility: visible; animation-name: fadeInUp;">
        <img class="wow fadeInUp" src="/images/hero-diagram.png" alt="" style="visibility: visible; animation-name: fadeInUp;"> -->
    </div>
    <!-- End Analysis Pattern img -->
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-10 text-center wow fadeInDown" style="visibility: visible; animation-name: fadeInDown;">
                <h2 class="column-title">
Ready to Try Our Software?
                    <p style="margin-top:20px;color:#fff;">Get in touch with us today and request a free demo. Our team will guide you and understand your needs.</p>
                </h2>
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-12 no-padding">
                        <div class="form-group">
                            <button class="btn btn-dark mobile-display-none" data-toggle="modal" data-target="#enquiryModal" style="padding: 10px 20px;margin-right: 25px;">Book a
                                Demo</button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                      <p>Our platform is designed to solve common challenges in the education industry. It works as both a CRM and management system to help you run your business smoothly. The system is cloud-based, easy to use, and gives you clear insights with all your data in one place. Whether you run a study abroad consultancy, coaching center, or training institute, this solution helps you manage everything efficiently.
</p>
                    </div>
                </div>

            </div>
            <!-- Col End -->
        </div>
        <!-- End Row -->
    </div>
    <!-- End container -->
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

export function HomeCloneContent() {
  return (
    <div
      className="deensoft-clone-page"
      dangerouslySetInnerHTML={{
        __html: insertSeoContentBeforeFooter(normalizeCloneHtml(rawHtml), "home")
      }}
    />
  );
}
