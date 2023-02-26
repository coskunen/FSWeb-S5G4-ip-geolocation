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
/* function getApiDetails {

} */
const cardContanier = document.querySelector(".cards");
function getApiDetails () {
	let apiREs = null;
	axios
	//.get( 'https://apis.ergineer.com/ipadresim')
	.get( 'https://apis.ergineer.com/ipgeoapi/217.131.80.116')
		.then(function (response) {
			console.log(response.data);
			apiREs = response.data;
			cardContanier.append(cardYapici(apiREs));
			return apiREs;
		})
		.catch(function (error) {
			console.log(error);
			
		})
		.finally(function(){
	
		})

}
	console.log(getApiDetails());
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
const cardYapici = (data) => {
	const card = document.createElement("div");
	card.classList.add("card");

	const img = document.createElement("img");
	img.setAttribute('src', data?.["ülkebayrağı"] );

	const cardInfo = document.createElement("div");
	cardInfo.classList.add("card-info");

	const baslik3 = document.createElement("h3");
	baslik3.classList.add("ip");
	baslik3.textContent =`IP ; ${data.sorgu}`;
	
	const ulkebilgisi = document.createElement("p");
	ulkebilgisi.classList.add("ulke");
	ulkebilgisi.textContent = `${data[ülke]} (${data?.[ülkeKodu]})`;

	const enboy = document.createElement("p");
	enboy.textContent = `Enlem ${data?.enlem} Boylam ${data?.boylam}`

	const sehir = document.createElement("p");
	sehir.textContent = `Sehir ${data?.[şehir]}`;

	const saatd = document.createElement("p");
	saatd.textContent = `Saat dilim ${data?.saatdilimi}`

	const parab = document.createElement("p");
	parab.textContent = `Para birim ${data?.parabirimi}`

	const ispBilgisi = document.createElement("p");
	ispBilgisi.textContent = `ISP ; ${data?.isp}`;

	card.append( img , cardInfo , baslik3, ulkebilgisi , enlem, boylam, sehir,
		saatdilimi , parabirimi, ispBilgisi);


	return card;


}

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