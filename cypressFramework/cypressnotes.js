/*CYPRESS
=======

Cypress, modern web dünyası için tasarlanmış, JavaScript tabanlı,
yeni jenerasyon bir test aracıdır. Hali hazırda var olan Mocha ve
Chai gibi test araçlarının içinde barındırdığı birçok method ve
özelliği bünyesinde barındırır. O yüzden daha önce bu test araçlarını
kullandıysanız Cypress'e alışmak sizin için çok daha kolay olacaktır.

Cypress başka hiçbir test aracının sahip olmadığı özelliklere sahiptir.
Bunlar:

Zamanda yolculuk: Cypress, testiniz çalışırken ekran görüntüsü alabilir.
Bu sayede test süreci içindeki herhangi bir ana gidip kolayca nasıl
göründüğünü görebilirsiniz.

Debug edebilmek: Chrome Developer tools aracılığı ile kolayca
testinizin nerede hata verdiğini görebilirsiniz.

Otomatik bekleme: Testinize uygulamayı bekletme methodları yazmak
zorunda değilsiniz. Cypress otomatik olarak emirlerin ve sorguların
çalışmasını bekler ve yanıt aldıktan sonra ilerler.

Taklit edebilme: Fonksiyonların davranışlarını kontrol edebilirsiniz.
Server cevapları, saat bilgileri gibi dataları tıpkı gerçek bir
kaynaktan gelmiş gibi taklit edebilirsiniz.

Ağ trafiği kontrolü: Herhangi bir servera ihtiyaç duymadan istediğiniz
miktarda ağ trafiğini taklit edebilirsiniz.

Cypress çoğunlukla Selenium ile karşılaştırılır ancak hem temel ilke
bakımından hem de mimari bakımından oldukça farklıdır.
Selenium ve diğer araçların sahip olduğu birçok eksik noktaların
üstesinden gelir. Cypress'in geliştiricisi Brian Mann, bu aracı
geliştirirken anketler yoluyla test sürecinde karşılaşılan zorlukları
ve talepleri tespit ederek ilerlemiştir.

Cypress her seviyede otomasyon sürecini kontrol eder. Bunun anlamı,
tarayıcının içinde ve dışında gelişen her olayı anlayabilme yeteneğine
sahip olmasıdır. Bu sayede herhangi bir test aracından çok
daha tutarlı sonuçlar verebilir.

Cypress bilgisayarımıza lokal olarak kurulduğundan dolayı
otomasyon süreci için işletim sistemine erişebilir. Bu sayede ekran
görüntüleri alabilir, videolar kaydedebilir, bazı dosya işlemleri
ve ağ operasyonları yapabiliriz. Uygulamanın içinde çalıştığından
dolayı her nesneye native şekilde ulaşabiliriz. Bu özellikten dolayı
test kodumuzun içinde window nesnesine, document nesnesine,
DOM elementlerine, veya bir timer nesnesine ulaşabiliriz.

=====================================================================

DOSYA YAPISI
============

Fixture: Sabit test datalari olusturmak icin kullanilir.
-url, email, username, password, ......
-This is like creating static variables in Java
---------------------------------------------------------------------------

Integration: This folder used to create the test cases
-similar to Java folder in Selenium
-By default this folder has some test cases.
-We can delete those test case and write our own
-In this folder we can create own folder folders and test classes
---------------------------------------------------------------------------

Plugins: (index.js) Cypressin yapabidiklerinden yararlanmanıza,
bunları değiştirmenize veya genişletmenize olanak tanır.

Ornek Plagins: cypress-dark, cypress-xpath, cypress-mailosaur,
               cypress-slack-reporter, ......

https://www.npmjs.com/package/cypress-xpath
npm install -D cypress-xpath
require('cypress-xpath')
---------------------------------------------------------------------------

Support Folder:
This is used to create custum methods, utilty classess, ....
When we add any custom methods in support folder, they will be
visible entire framawork automatically

command.js: çeşitli özel komutların nasıl oluşturulacağını ve
            mevcut komutların üzerine nasıl yazılacağını gösterir.

---------------------------------------------------------------------------

node_modules:
-This hass all packages and required npm(node package manager)
-This is smilar to maven dependencies/plugins
---------------------------------------------------------------------------

cypress.json: Bu JSON dosyası, sağladığınız tüm yapılandırma
              değerlerini depolamak için kullanılır.

-this is used to override cypress custum behaviours
- adding global variables
add tis in cypress.json file to override subdomain security
Ornek: downloadsFolder, defaultCommandTimeout, screenshotsFolder, 

"defaultCommandTimeout": 4000,

"chromeWebSecurity": false


Güvenli olmayan içeriği görüntüle
Kaynaklar arası hatalar olmadan herhangi bir süper domain alanına gidin
Uygulamanıza katıştırılmış çapraz kaynaklı iframelere erişin
---------------------------------------------------------------------------

package-lock.js:
-after npm commands, this fill will be generated
this is specific file based on the npm packages
(project specific informations) like pom.xml
-in our case, this package has all cypress specific information
---------------------------------------------------------------------------

package.json: 
this file has basic general configration
such as name, description, devDependencies

============================================================================

CYPRESS KURULUM
===============
1) my_cypress_framework isminde bir klasor olustur.

2) VS Code'u ac.

3) Olusturdugumuz klasoru VS Code programinin icine surukle ve bırak,
   veya File -> Open Folder dan olusturdugunuz klasoru ac.

4) Terminal -> New Terminal (Terminali ac)

5) Terminalde -> npm init -y
    frameworkte package.json dosyasi olustu.

6) Cypress yuklemek icin terminalde
    npm install --save-dev cypress
    frameworkte node_modules ve package-lock.json dosyalari olustu.

7) Terminalde Cypressi acmak icin
    npx cypress open
    frameworkte cypress klasoru olustu.

============================================================================ */