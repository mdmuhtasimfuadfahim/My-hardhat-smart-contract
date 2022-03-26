# My First Smart Contract Deployment and Testing using Hardhat 

This project demonstrates a basic Hardhat use case. It comes with a sample contract for any registration process, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. For any registration process this smart contract can be used.


## Clone the repository and download dependencies

```shell
git clone https://github.com/mdmuhtasimfuadfahim/My-hardhat-smart-contract
cd My-hardhat-smart-contract
yarn install 
# or
npm install
```

## Environment variables
Create an .env file and set these settings

```shell
MY_ALCHEMY_URL = alchemy_url
MY_METAMASK_PRIVATE_KEY = "metamask_private_key"
```

## Deploy contract
```shell
npm hardhat compile
npx run scripts/deploy.js --network rinkeby
# or
node scripts/deploy.js
```

## Testing

```shell
npx hardhat test
```

## Some Basic Commands of Hardhat
```shell
npx hardhat compile
npx hardhat clean
npx hardhat accounts
npx hardhat node
npx hardhat help
node scripts/file_name.js
npx hardhat test
```

## License
 - MIT

## Contribution

Please feel free to contact me for any contribution.

##### Thank you
