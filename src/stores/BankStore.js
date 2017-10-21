import { action, observable } from 'mobx'


export default class BankStore {
  @observable rewardsAccounts = []
  @observable rewardsAccountsDetails = []

  /**
   * Step 1: get reward account IDs
   * Step 2: use reward account IDs to get the detials
   */
  @action
  async getRewardsAccounts (token) {
    const { rewardsAccounts } = fakeRewardsAccounts  // the IDs used to get the points details
    this.rewardsAccounts = rewardsAccounts
    this.rewardsAccountsDetails = [fakeRewardsAccountDetails]
    // try {
    //   const data = await fetch('https://api-sandbox.capitalone.com/rewards/accounts', {
    //     mode: 'no-cors',
    //     headers: {
    //       'Authorization': `Bearer ${token}`

    //     }
    //   })
    //   console.log('RES: ', data);
    //   // .then(res => {
    //   //   console.log('RES: ', res);
    //   //   return res.json()
    //   // })
    //   // console.log('DATA: ', data)
    //   // return data
    // } catch (e) {
    //   console.log('ERROR IN GET REWARDS: ', e)
    // }
    // curl
    //   -i -k --tlsv1 -H "Accept: application/json;v=1"
    //   -H "Authorization:Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwicGNrIjoxLCJhbGciOiJkaXIiLCJ0diI6Miwia2lkIjoiYTdxIn0..HMUTg9ujCcwun-gW-o8P-w.KOkHhPyLrvcGslqkH9rT7X4gGFOPaSjhAGjzQINYWkzjybIAdNbWBMIGRXC6dy5Vx9VI9iKBhBHv_PcqOr4Qh8YClTtJ5Oqc36922Y8ZGIBciRfdf1X4T6-uQESjy15_FUyWJPISRck6TmqkjDr_zwvYzyb6bZwdlLYW1SDE9aqPdz1odZOXkaqak4ot0MsRQwXDWVVHxqjyzTGbHyxVZKuj4PYIM7VMfEmVuDvshY2JeAUPl01kaykLvjnm1T1Z9OXg2jEbwp9g6egGuwKE8Eey_-x0Y9ZUV7LTHZ9Rw4Ee6TD8cohVzQYD2RafYAglyaZBvYIeEW0WM8NERg2o2LtvQagOaI2RtQrx7B0hmTe7mT9nqutat2lYb6LlfyLXTUKM6fZDXOSgV9g2Y9OL8Fscws5Cwfct-5ae2P-gUn8GW3OkPapCKg_XQQCIiJbH0DSZWGylsREEj9A4C7xEQRjTPdaJcXwL_sUic5I__dbNFtFlKX5gCq8qkseTDX1p.wTSKWYctfeozFDTNooigrg"
    //   -X GET "https://api-sandbox.capitalone.com/rewards/accounts"
  }

}


const fakeRewardsAccounts = {
  rewardsAccounts: [
    {
      rewardsAccountReferenceId: "+jaR3Du6APE+x4kQue7NB2l3cLJHm0Rg9qspJbY65DpNtAOoLJnAguw4SVcuOlJuWVrEIiLswYp4ZZ0NX1veFw==",
      accountDisplayName: "Capital One Visaplatinum Miles *3582",
      rewardsCurrency: "Miles",
      productAccountType: "Credit Card",
      creditCardAccount: {
        issuer: "Capital One",
        product: "Visaplatinum",
        lastFour: "3582",
        network: "Visa",
        isBusinessAccount: false
      }
    },
    {
      rewardsAccountReferenceId: "+jaR3Du6APE+x4kQue7NB76pzE2EghQD5frCU8NquuYUCjno3GzJDe6bKPmH9nruRwMPivkpoT+3PCwGfwJavg==",
      accountDisplayName: "Capital One Mastercardworldcard Points *4734",
      rewardsCurrency: "Points",
      productAccountType: "Credit Card",
      creditCardAccount: {
        issuer: "Capital One",
        product: "Mastercardworldcard",
        lastFour: "4734",
        network: "MasterCard",
        isBusinessAccount: false
      }
    },
    {
      rewardsAccountReferenceId: "+jaR3Du6APE+x4kQue7NB5B3s8P1SDCKUMneP/dqKMMQTh1NOnzYjjwoO7vJ4efuJTXFEosem897LbHrdUjWXw==",
      accountDisplayName: "Capital One Visasignature Cash *8729",
      rewardsCurrency: "Cash",
      productAccountType: "Credit Card",
      creditCardAccount: {
        issuer: "Capital One",
        product: "Visasignature",
        lastFour: "8729",
        network: "Visa",
        isBusinessAccount: false
      }
    }
  ]
}


const fakeRewardsAccountDetails = {
  accountDisplayName: "Capital One Visaplatinum Miles *3582",
  rewardsBalance: 100000,
  rewardsCurrency: "Miles",
  rewardsCurrencyDescription: "Miles",
  balanceTimestamp: "2016-05-02T22:26:57Z",
  canRedeem: true,
  canTransferOut: true,
  canTransferIn: true,
  redemptionOpportunities: [
    {
      category: "Travel",
      categoryDescription: "Travel",
      subCategory: "Travel.Erase",
      subcategoryDescription: "Travel Reimbursement",
      displaySequenceNumber: 1.1,
      tierMinCashValue: 0.01,
      tierMaxCashValue: 150,
      minRedemptionAmount: 15000,
      redemptionAmount: 15000,
      cashValue: 150,
      cashDisplayValue: "$150.00"
    },
    {
      category: "Travel",
      categoryDescription: 'Travel',
      subCategory: "Travel.Erase",
      subcategoryDescription: "Travel Reimbursement",
      displaySequenceNumber: 1.11,
      tierMinCashValue: 150.01,
      tierMaxCashValue: 350,
      minRedemptionAmount: 35000,
      redemptionAmount: 35000,
      cashValue: 350,
      cashDisplayValue: "$350.00"
    },
    {
      category: "Travel",
      categoryDescription: "Travel",
      subCategory: "Travel.Erase",
      subcategoryDescription: "Travel Reimbursement",
      displaySequenceNumber: 1.12,
      tierMinCashValue: 350.01,
      tierMaxCashValue: 600,
      minRedemptionAmount: 60000,
      redemptionAmount: 60000,
      cashValue: 600,
      cashDisplayValue: "$600.00"
    },
    {
      category: "Travel",
      categoryDescription: "Travel",
      subCategory: "Travel.Erase",
      subcategoryDescription: "Travel Reimbursement",
      displaySequenceNumber: 1.13,
      tierMinCashValue: 600.01,
      minRedemptionAmount: 60001,
      redemptionAmount: 100000,
      redemptionRate: 0.01,
      cashValue: 1000,
      cashDisplayValue: "$1,000.00"
    },
    {
      category: "Travel",
      categoryDescription: "Travel",
      subCategory: "Travel.Booking",
      subcategoryDescription: "New Travel Purchases",
      displaySequenceNumber: 1.2,
      tierMinCashValue: 0.01,
      tierMaxCashValue: 150,
      minRedemptionAmount: 15000,
      redemptionAmount: 15000,
      cashValue: 150,
      cashDisplayValue: "$150.00"
    },
    {
      category: "Travel",
      categoryDescription: "Travel",
      subCategory: "Travel.Booking",
      subcategoryDescription: "New Travel Purchases",
      displaySequenceNumber: 1.21,
      tierMinCashValue: 150.01,
      tierMaxCashValue: 350,
      minRedemptionAmount: 35000,
      redemptionAmount: 35000,
      cashValue: 350,
      cashDisplayValue: "$350.00"
    },
    {
      category: "Travel",
      categoryDescription: "Travel",
      subCategory: "Travel.Booking",
      subcategoryDescription: "New Travel Purchases",
      displaySequenceNumber: 1.22,
      tierMinCashValue: 350.01,
      tierMaxCashValue: 600,
      minRedemptionAmount: 60000,
      redemptionAmount: 60000,
      cashValue: 600,
      cashDisplayValue: "$600.00"
    },
    {
      category: "Travel",
      categoryDescription: "Travel",
      subCategory: "Travel.Booking",
      subcategoryDescription: "New Travel Purchases",
      displaySequenceNumber: 1.23,
      tierMinCashValue: 600.01,
      minRedemptionAmount: 60001,
      redemptionAmount: 100000,
      redemptionRate: 0.01,
      cashValue: 1000,
      cashDisplayValue: "$1,000.00"
    },
    {
      category: "Cash",
      categoryDescription: "Cash and Credit",
      subCategory: "Cash.Check",
      subcategoryDescription: "Check",
      displaySequenceNumber: 2.1,
      minRedemptionAmount: 5000,
      redemptionAmount: 100000,
      redemptionRate: 0.005,
      cashValue: 500,
      cashDisplayValue: "$500.00"
    },
    {
      category: "Cash",
      categoryDescription: "Cash and Credit",
      subCategory: "Cash.Credit",
      subcategoryDescription: "Account Credit",
      displaySequenceNumber: 2.2,
      minRedemptionAmount: 5000,
      redemptionAmount: 100000,
      redemptionRate: 0.005,
      cashValue: 500,
      cashDisplayValue: "$500.00"
    },
    {
      category: "Cash",
      categoryDescription: "Cash and Credit",
      subCategory: "Cash.Purchase",
      subcategoryDescription: "New Non-Travel Purchases",
      displaySequenceNumber: 2.3,
      minRedemptionAmount: 5000,
      redemptionAmount: 100000,
      redemptionRate: 0.005,
      cashValue: 500,
      cashDisplayValue: "$500.00"
    },
    {
      category: "GiftCard",
      categoryDescription: "Gift Cards",
      subCategory: "GiftCard.Mail",
      subcategoryDescription: "Gift Cards",
      displaySequenceNumber: 3.1,
      tierMinCashValue: 0.01,
      tierMaxCashValue: 49.99,
      minRedemptionAmount: 2,
      redemptionAmount: 100000,
      redemptionRate: 0.005,
      cashValue: 500,
      cashDisplayValue: "$500.00"
    },
    {
      category: "GiftCard",
      categoryDescription: "Gift Cards",
      subCategory: "GiftCard.Mail",
      subcategoryDescription: "Gift Cards",
      displaySequenceNumber: 3.11,
      tierMinCashValue: 50,
      tierMaxCashValue: 199.99,
      minRedemptionAmount: 7692,
      redemptionAmount: 100000,
      redemptionRate: 0.0065,
      cashValue: 650,
      cashDisplayValue: "$650.00"
    },
    {
      category: "GiftCard",
      categoryDescription: "Gift Cards",
      subCategory: "GiftCard.Mail",
      subcategoryDescription: "Gift Cards",
      displaySequenceNumber: 3.12,
      tierMinCashValue: 200,
      minRedemptionAmount: 20000,
      redemptionAmount: 100000,
      redemptionRate: 0.01,
      cashValue: 1000,
      cashDisplayValue: "$1,000.00"
    },
    {
      category: "Charity",
      categoryDescription: "Charitable Donation",
      subCategory: "Charity.Donate",
      subcategoryDescription: "Donation",
      displaySequenceNumber: 4.1,
      minRedemptionAmount: 1000,
      redemptionAmount: 100000,
      redemptionRate: 0.01,
      cashValue: 1000,
      cashDisplayValue: "$1,000.00"
    }
  ],
  productAccountType: "Credit Card",
  creditCardAccount: {
    issuer: "Capital One",
    product: "Visaplatinum",
    lastFour: "3582",
    network: "Visa",
    isBusinessAccount: false
  },
  primaryAccountHolder: {
    firstName: "TATYANA",
    lastName: "SCHMIDT"
  }
}