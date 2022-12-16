
import aktivasiAkun from "../page/aktivasiAkun"
import Register from "../page/register"
import randomizer from "../support/randomizer"

const rand = new randomizer
const PageAktivasi = new aktivasiAkun
const PageRegister = new Register

let nohp = rand.makeNumber(8)
let name = rand.makeName()
let location = rand.getRandomLocation('odd')
let number = rand.makeNumber(1)
describe('create new proyek pembayaran', () => {
    beforeEach(() => {

        cy.visit("https://portal.youtap.id/landing-page")
        PageAktivasi.aktivasiAkun()
        .click()
        PageRegister.btnPageDaftar()
        PageRegister.ddlTemanYoutap()
            .click()
        PageRegister.btnDaftar()
            .click()
    })

    it('registrasi no baru',()=>{
      
        PageRegister.frmNoHp()
            .type(nohp)
        PageRegister.btnLanjutkan()
            .click()
        PageRegister.frmName()
            .type(name)
        PageRegister.frmBusiness()
            .type(location)
        PageRegister.frmCategory()
            .click()
        PageRegister.lstCategory(number)
            .click({force: true})
        PageRegister.btnLanjutkan()
            .click()

        //assert
        cy.xpath(`//p[text()="62${nohp}"]`).should('exist')
    })

    it.only('registrasi no baru with less 4 character',()=>{
   
        PageRegister.frmNoHp()
            .type("824")
        PageRegister.btnLanjutkan()
            .click()
        
        //assert
        PageRegister.msgError()
            .should('have.text','Bad Request')
    } )
})