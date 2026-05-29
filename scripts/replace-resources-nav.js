const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../components/cloned-pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('-content.js'));

const OLD = `<li class="nav-item dropdown">\r\n                            <a class="nav-link p-2" href="#" data-toggle="dropdown">\r\n                                Resources\r\n                                <span class="tw-indicator"><i class="fa fa-angle-down"></i></span>\r\n                            </a>\r\n                            <ul id="tw-megamenu" class="dropdown-menu tw-mega-menu p-4" style="min-width: 350px;">\r\n                                <div class="row justify-content-start p-2">\r\n                                    <div class="col-12 mb-3 hover-scale p-3">\r\n                                        <a href="https://www.eductrl.com/knowledgebase">\r\n                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Knowledgebase</p>\r\n                                            <p class="text-muted p-0 m-0 mt-2">\r\n                                                Help articles and guides to use EduCtrl CRM\r\n                                            </p>\r\n                                        </a>\r\n                                    </div>\r\n                                    <div class="col-12 mb-3 hover-scale p-3">\r\n                                        <a href="https://www.eductrl.com/blog">\r\n                                            <p class="font-weight-bold m-0 p-0" style="font-size:15px;">Blog</p>\r\n                                            <p class="text-muted p-0 m-0 mt-2">\r\n                                                Insights and updates on CRM and the education industry\r\n                                            </p>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </ul>\r\n                        </li>`;

const NEW = `<li class="nav-item"><a class="nav-link p-2" href="/blog">Blog</a></li>`;

let updated = 0;
files.forEach(f => {
  const fp = path.join(dir, f);
  const content = fs.readFileSync(fp, 'utf8');
  if (content.includes(OLD)) {
    fs.writeFileSync(fp, content.replace(OLD, NEW));
    console.log('Updated:', f);
    updated++;
  } else {
    console.log('No match:', f);
  }
});
console.log('Total updated:', updated);
