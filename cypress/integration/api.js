import ApiCheckPhone from "../page/ApiCheckPhone";
import ApiCreateMerchant from "../page/ApiCreateMerchant"
import randomizer from "../support/randomizer";

let token
let apiCheckPhone = new ApiCheckPhone
let apiCreateMerchant = new ApiCreateMerchant
let rand = new randomizer

let nohp = rand.makeNumber(8)
let name = rand.makeName()
let location = rand.getRandomLocation('odd')

let varCreateMerchant = {}
let VarCheckPhone = {}

describe('create registration', () => {


    beforeEach(() => {
        VarCheckPhone = 
        {
            "checkPhoneInput": {
              "phone": "62"+nohp  
          }
        }
        varCreateMerchant = 
        {
            "createMerchantInput": {
              "ownerName": name,
              "businessName": location,
              "businessCategory": location,
              "businessCategoryId": "Jasa Lainnya",
              "email": "",
              "referralCode": ""
          }
        }   
    })
    
    it('Success create merchant',()=>{
      apiCheckPhone.checkphone(VarCheckPhone).then((resp)=>{
        const data = resp.body.data
        cy.log(JSON.stringify(data))
        token = data.checkPhone.token
        let id = data.checkPhone.merchantRegistration.id

      apiCreateMerchant.createmerchant(token,varCreateMerchant).then((resp)=>{
        const data = resp.body.data

        //assert
        expect(data.createMerchant.id).to.be.eq(id)
        expect(data.createMerchant.otpExpiredAt).to.be.not.null
      })
    })
    })

    it('create merchant with invalid phone number',()=>{
        VarCheckPhone.checkPhoneInput.phone = "2124"
        apiCheckPhone.checkphone(VarCheckPhone).then((resp)=>{
          const data = resp.body

          cy.log(JSON.stringify(data))
        //assert
        expect(data.errors[0].message).to.be.eq('Bad Request')
      
    })    
})
})