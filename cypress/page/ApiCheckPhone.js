
class CheckPhone{

        checkphone(variables){
      
        const query = 
        `mutation checkPhone($checkPhoneInput: CheckPhoneInput!) {
            checkPhone(checkPhoneInput: $checkPhoneInput) {
              token
              merchantRegistration {
                id
                phone
                ownerName
                email
                businessName
                businessCategory
                businessCategoryId
                referralCode
                platformType
                isRegistration
                accountType
                __typename
              }
              __typename
            }
          }`

          return cy.request({
          url: "https://registration-api-production-dq5mgqpcga-et.a.run.app/v1/graphql",
          method: 'POST',
            body: { query , variables },
            failOnStatusCode: false,
            headers: {
                  },
          })
    }
}
export default CheckPhone