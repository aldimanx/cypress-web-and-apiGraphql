
class CreateMerchant{

        createmerchant(token,variables){
      
        const query = 
        `mutation createMerchant($createMerchantInput: CreateMerchantInput!) {
            createMerchant(createMerchantInput: $createMerchantInput) {
              id
              otpExpiredAt
              __typename
            }
          }
          `
          return cy.request({
          url: "https://registration-api-production-dq5mgqpcga-et.a.run.app/v1/graphql",
          method: 'POST',
            body: { query , variables },
            failOnStatusCode: false,
            headers: {
                Authorization: token,
                  },
          })
    }
}
export default CreateMerchant