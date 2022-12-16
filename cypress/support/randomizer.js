import moment from 'moment';

class randomizer {
    //output will be in uppercase, lowercase, and number
    makeid(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    //output will be in vowel
    makeVowel(length) {
        let result           = '';
        let characters       = 'AIUEOaiueo';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
      }
      return result;
    }

    //output will be in consonant
    makeConsonant(length) {
        let result           = '';
        let characters       = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
      }
      return result;
    }

    // output will be in Uppercase letter A-Z
    makeUppercaseId(length) {
      let result           = '';
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
     return result;
  }

   // output will be in Lowercase letter A-Z
   makeLowercaseId(length) {
    let result           = '';
    let characters       = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
    
    //output will be in number only
    makeNumber(length) {
        let result           = '';
        let characters       = '123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    //see documentation in https://github.com/faker-js/faker
    makeName(){
        const { faker } = require('@faker-js/faker');
        let randomName = faker.name.findName();
        return randomName
    }

    makeInitial(text, maxLength){
      let initial = '';
      text.split(' ').forEach(word => {
        initial += word[0].toUpperCase();
      })
      
      return initial.slice(0, maxLength);
    }

    makeEmail(){
      const { faker } = require('@faker-js/faker');
      let randomEmail = faker.internet.email();
      return randomEmail
    }

    makeNumberUnderMax(max){
      return Math.floor(Math.random() * max);
    }

    makeValueRange(min, max) {
      return Math.floor(Math.random() * max) + min;
    }

    // 0 if even, 1 if odd
    makeNumberOddEven(max, type = '') {
      if (type == 'even') return Math.floor(Math.random() * max/2) * 2;
      if (type == 'odd') return (Math.floor(Math.random() * max/2) * 2) + 1;
      return Math.floor(Math.random() * max);
    }

    makeFormattedDate(format, refDate) {
      const { faker } = require('@faker-js/faker');
      const moment = require('moment');

      let randDate = faker.date.future(undefined);
      // refDate = reference date, to create random future date after reference date
      if (refDate) {
        randDate = faker.date.future(undefined, moment(refDate, format));
      }
      return moment(randDate).format(format);
    }

    getRandomDay() {
      const { faker } = require('@faker-js/faker');
      return faker.date.weekday().toUpperCase();
    }

    getRandomEnum(listEnum) {
      return listEnum[this.makeNumberUnderMax(listEnum.length-1)];
    }

    // reason for odd / even random number is to make sure same location cannot be selected twice
    getRandomLocation(type = '') {
      const locationList = [
        'ABIANSEMAL, KABUPATEN BADUNG, BALI',
        'BAJO, KABUPATEN LUWU, SULAWESI SELATAN',
        'BANDAR SURABAYA, KABUPATEN LAMPUNG TENGAH, LAMPUNG',
        'BANGKALAN, KABUPATEN BANGKALAN, JAWA TIMUR',
        'BANTAR GEBANG, BEKASI, JAWA BARAT',
        'BATUR, KABUPATEN BANJARNEGARA, JAWA TENGAH',
        'BEKASI BARAT, BEKASI, JAWA BARAT',
        'BEKASI UTARA, BEKASI, JAWA BARAT',
        'BENOWO, SURABAYA, JAWA TIMUR',
        'BOGOREJO, KABUPATEN BLORA, JAWA TENGAH',
        'BREBES, KABUPATEN BREBES, JAWA TENGAH',
        'BUMIAJI, BATU, JAWA TIMUR',
        'BURNEH, KABUPATEN BANGKALAN, JAWA TIMUR',
        'CIBEBER, CILEGON, BANTEN',
        'CILEGON, CILEGON, BANTEN',
        'CIPAYUNG, JAKARTA TIMUR, JAKARTA',
        'CITANGKIL, CILEGON, BANTEN',
        'CIWANDAN, CILEGON, BANTEN',
        'DENPASAR UTARA, DENPASAR, BALI',
        'DEPOK, KABUPATEN SLEMAN, DI YOGYAKARTA',
        'ENOK, KABUPATEN INDRAGIRI HILIR, RIAU',
        'GAMBIR, JAKARTA PUSAT, JAKARTA',
        'GENTENG, SURABAYA, JAWA TIMUR',
        'GEROGOL, CILEGON, BANTEN',
        'GODEAN, KABUPATEN SLEMAN, DI YOGYAKARTA',
        'JAGAKARSA, JAKARTA SELATAN, JAKARTA',
        'JATI SAMPURNA, BEKASI, JAWA BARAT',
        'JATIASIH, BEKASI, JAWA BARAT',
        'JOMBANG, CILEGON, BANTEN',
        'JUNREJO, BATU, JAWA TIMUR',
        'KAMAL, KABUPATEN BANGKALAN, JAWA TIMUR',
        'KARANGKOBAR, KABUPATEN BANJARNEGARA, JAWA TENGAH',
        'KEBON JERUK, JAKARTA BARAT, JAKARTA',
        'KELAM TENGAH, KABUPATEN KAUR, BENGKULU',
        'KENJERAN, SURABAYA, JAWA TIMUR',
        'KERTEK, KABUPATEN WONOSOBO, JAWA TENGAH',
        'KINTAMANI, KABUPATEN BANGLI, BALI',
        'KOJA, JAKARTA UTARA, JAKARTA',
        'KOK BAUN, KABUPATEN TIMOR TENGAH SELATAN, NUSA TENGGARA TIMUR',
        'KUMUN DEBAI, SUNGAIPENUH, JAMBI',
        'KUTA SELATAN, KABUPATEN BADUNG, BALI',
        'LABANG, KABUPATEN BANGKALAN, JAWA TIMUR',
        'MAKASAR, JAKARTA TIMUR, JAKARTA',
        'MANDIRAJA, KABUPATEN BANJARNEGARA, JAWA TENGAH',
        'MENGWI, KABUPATEN BADUNG, BALI',
        'MERBAU, KABUPATEN KEPULAUAN MERANTI, RIAU',
        'MLATI, KABUPATEN SLEMAN, DI YOGYAKARTA',
        'NGAGLIK, KABUPATEN SLEMAN, DI YOGYAKARTA',
        'NGEMPLAK, KABUPATEN SLEMAN, DI YOGYAKARTA',
        'PAKAL, SURABAYA, JAWA TIMUR',
        'PANDANARUM, KABUPATEN BANJARNEGARA, JAWA TENGAH',
        'PASAR MINGGU, JAKARTA SELATAN, JAKARTA',
        'PETANG, KABUPATEN BADUNG, BALI',
        'PONDOK GEDE, BEKASI, JAWA BARAT',
        'PONDOK MELATI, BEKASI, JAWA BARAT',
        'PRAMBANAN, KABUPATEN SLEMAN, DI YOGYAKARTA',
        'PULOMERAK, CILEGON, BANTEN',
        'PUNGGELAN, KABUPATEN BANJARNEGARA, JAWA TENGAH',
        'PURWAKARTA, CILEGON, BANTEN',
        'RAKIT, KABUPATEN BANJARNEGARA, JAWA TENGAH',
        'RAWALUMBU, BEKASI, JAWA BARAT',
        'SENEN, JAKARTA PUSAT, JAKARTA',
        'SEPUTIH SURABAYA, KABUPATEN LAMPUNG TENGAH, LAMPUNG',
        'SIMOKERTO, SURABAYA, JAWA TIMUR',
        'SLEMAN, KABUPATEN SLEMAN, DI YOGYAKARTA',
        'SUKOREJO, BLITAR, JAWA TIMUR',
        'SUSUKAN, KABUPATEN BANJARNEGARA, JAWA TENGAH',
        'SUSUT, KABUPATEN BANGLI, BALI',
        'TEGALSARI, SURABAYA, JAWA TIMUR',
        'TEMBUKU, KABUPATEN BANGLI, BALI',
        'TEMPEL, KABUPATEN SLEMAN, DI YOGYAKARTA',
        'TRAGAH, KABUPATEN BANGKALAN, JAWA TIMUR',
      ];
      if(type === 'even') return locationList[this.makeNumberOddEven(locationList.length-1, 0)];
      if(type === 'odd') return locationList[this.makeNumberOddEven(locationList.length-1, 1)];
      return locationList[this.makeNumberUnderMax(locationList.length-1)];
    }

    //nFS contract
    getShipmentType() {
      const shipmentList = [
      
        'W2W','MT','STANDARD','new','TESTING','FRANCO','Distribution Channel'
      ];
      
      return shipmentList[this.makeNumberUnderMax(shipmentList.length)];
    } 


    dateBefore(days) {
      return moment().subtract(days, 'days').format('YYYY-MM-DDTHH:mm:ss') + 'Z';
    }

    
    dateAfter(days) {
      return moment().add(days, 'days').format('YYYY-MM-DDTHH:mm:ss') + 'Z';
    }

    dateNow() {
      return moment().format('YYYY-MM-DDTHH:mm:ss') + 'Z';
    }
}

export default randomizer;