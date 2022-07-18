# zestchain
The **ZEST Chain** is the blockchain powering Cytrus' decentralised advertising platform. It was built using the Cosmos SDK, Starport, and Tendermint BFT consensus.

<br/>

### Install (Production)
To install the latest version of the blockchain node's binary, execute the following command on your machine:
```
curl https://get.starport.com/cytruslabs/zestchain@latest! | sudo bash
```

<br/>

### Install (Dev)
To run a development version of the blockchain, you need to install Go, Starport, and then clone this repo. For the web frontend, Node.js is also required.
```
sudo su
snap install go --classic
curl https://get.starport.network/starport! | bash
git clone https://github.com/cytruslabs/zestchain
cd zestchain
starport chain serve
```
The `serve` command installs dependencies, builds, and starts the blockchain.

### Web Frontend
Run the following commands to install dependencies and start the Vue.js web app:
```
sudo su
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm i 16
cd zestchain/vue
npm i
npm run serve
```

<br/>

# Help - How to set up your wallet and create an ad
First, open http://cytrus.io in your web browser, and create a new wallet using the ‘Access wallet’ menu in the top right corner, then clicking Create new wallet on the left. Enter a name and password for the wallet, and then make sure the mnemonic you are given is stored safely. Once logged in, click on the wallet widget once again and press the copy icon next to the wallet address to copy the address to your clipboard.

The wallet will not be active until it owns some ZEST. You can receive up to 1000 ZEST from the faucet. Open the faucet using the link on the cytrus.io home page. Then click on the green bar that says POST – Send tokens to receiver account. Click on the ‘Try it out’ button in the top right corner, replace the address in the quotes with your own by pasting it in, and replace the “10token” coins value with “1000ZEST”. Press the blue Execute button lower down the page, and then close the tab.

You will also need to download the Chromium Extension found linked on the website or the Chrome Web Store. Once installed, ***refresh*** the cytrus.io website page. At the bottom of the dashboard page, there is a widget to sync the website wallet to the chrome extension. Your wallet needs to first be unlocked (by pressing the lock in the top right corner) before you can connect. Once unlocked, press the Connect button. You should receive a confirmation message displaying your encrypted wallet key.

You should also see your wallet credited with the coins from the faucet earlier. Now that you have 1000 ZEST, you can launch a new advertisement (1000 ZEST is the minimum ad budget). Navigate to the Create Promo page using the link in the sidebar, fill out the form, and submit a new ad. Assuming you are connected to the extension, once you continue browsing and open new webpages you will soon receive the ad you submitted earlier as a push notification.
