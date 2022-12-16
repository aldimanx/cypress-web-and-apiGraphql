class Register{

btnPageDaftar(){
    return cy.visit('https://www.youtap.id/app/cara-daftar-akun-youtap')
}
ddlTemanYoutap(){
    return cy.xpath('//h3[text()="Cara mudah menjadi Teman Youtap"]')
}
btnDaftar(){
    return cy.get('.button').invoke('removeAttr', 'target')
}
frmNoHp(){
    return cy.get('.MuiInput-input')
}
frmName(){
    return cy.xpath('//input[@name="ownerName"]')
}
frmBusiness(){
    return cy.xpath('//input[@name="businessName"]')
}
frmCategory(){
    return cy.get('#mui-component-select-businessCategory')
}
lstCategory(random){
    return cy.xpath(`(//li[@tabindex="-1"])[${random}]`)
}
btnLanjutkan(){
    return cy.get('.MuiLoadingButton-root')
}
msgError(){
    return cy.get('.MuiFormHelperText-root')
}
}

export default Register