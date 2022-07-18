# zestchain
The **ZEST Chain** is the blockchain of the Cytrus network, making up a core part of the backend infrastructure for Cytrus' decentralised advertising platform. It was built using the Cosmos SDK, Starport, and Tendermint BFT consensus.

<br/><br/>

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
