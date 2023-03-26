import axios from 'axios'; //axios import buraya gelecek
var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
iyice anlamanız gerekmektedir.

*/
/*
ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:

<div class="card">
<img src={ülke bayrağı url} />
	<div class="card-info">
	<h3 class="ip">{ip adresi}</h3>
	<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
	<p>Enlem: {enlem} Boylam: {boylam}</p>
	<p>Şehir: {şehir}</p>
	<p>Saat dilimi: {saat dilimi}</p>
	<p>Para birimi: {para birimi}</p>
	<p>ISP: {isp}</p>
	</div>
    </div>
	*/
	



/*
ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/



/*
ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek


let apiRes = null;
let ipadresim = ipAdresimiAl().then((response) => {
	//.get( 'https://apis.ergineer.com/ipadresim')
	axios.get( `https://apis.ergineer.com/ipgeoapi/${response}`)
	.then((response) => {
		
		const cardContanier = document.querySelector(".cards");
		cardContanier.appendChild(cardYapici(response.data));
		})
		.catch((e)=>{
			console.log("error",e)
		})
		
	


function cardYapici  (data)  {
const card = document.createElement("div");
card.className = "card";

const img = document.createElement("img");
img.src = data.ülkebayrağı
card.appendChild(img);

const cardInfo = document.createElement("div");
cardInfo.classList.add("card-info");

const baslik3 = document.createElement("h3");
baslik3.classList.add("ip");
baslik3.textContent =`IP ; ${data.sorgu}`;
card.appendChild(baslik3);

const ulkebilgisi = document.createElement("p");
ulkebilgisi.classList.add("ulke");
ulkebilgisi.textContent = `${data.ülke} (${data.ülkeKodu})`;
card.appendChild(ulkebilgisi);

const enboy = document.createElement("p");
enboy.textContent = `Enlem ${data?.enlem} Boylam ${data?.boylam}`
card.appendChild(enboy);

const sehir = document.createElement("p");
sehir.textContent = `Sehir ${data.şehir}`;
card.appendChild(sehir);

const saatd = document.createElement("p");
saatd.textContent = `Saat dilim ${data?.saatdilimi}`
card.appendChild(saatd);

const parab = document.createElement("p");
parab.textContent = `Para birim ${data?.parabirimi}`
card.appendChild(parab);

const ispBilgisi = document.createElement("p");
ispBilgisi.textContent = `ISP ; ${data?.isp}`;
card.appendChild(ispBilgisi);

/* card.append( img , cardInfo , baslik3, ulkebilgisi , enlem, boylam, sehir,
	saatdilimi , parabirimi, ispBilgisi); */


return card;
}
})