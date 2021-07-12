if (typeof window.ethereum !== 'undefined') {
    console.log('Metamask is installed')
}else{
    alert('Please Install Metamask')
}

const connectButton = document.querySelector('connectButton')
const showBalance = document.querySelector('showbalance')
const totalBnbPaid = document.querySelector('totalbnbpaid')
const lastpayout = document.querySelector('lastPayout')
const dailyBnb = document.querySelector('dailybnb')
const dailyU = document.querySelector('dailyusd')
const weeklyBnb = document.querySelector('weeklybnb')
const weeklyUSD = document.querySelector('weeklyusd')
const monthlyBnb = document.querySelector('monthlybnb')
const monthlyUsd = document.querySelector('monthlyusd')
const bnbtoHolders = document.querySelector('bnbtoHolders')
const usdtoHolders = document.querySelector('usdtoHolders')


connectButton.addEventListener('click', ()=> {

    getAccount();
})

async function getAccount(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'})
    const account = accounts[0];
    //showAccount.innerHTML = account;
    

    
}
