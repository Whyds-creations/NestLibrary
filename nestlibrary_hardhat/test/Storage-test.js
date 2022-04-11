const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

//Tests if contracts has been deployed 
describe("Wakanda Token deployment", async () => {
  it("Contract has a name", async () => {
    const name = await wakandaToken.name()
    assert.equal(name, "Nestcoin Reward Tool")
  })

  it("Contract has tokens", async () => {
    let balance = await token.balanceOf(wakandaToken.address)
    assert.equal(balance.toString(), tokens("1000000"))
  })

  it("Contract has an owner role", async () => {
    let 
  })
})

//Test if roles have been assigned
describe("Contract Roles", async () => {
  it("Grant Owner Role to contact deployer", async => {
    let _grantRole = await DEFAULT_ADMIN_ROLE(msg.sender)
    assert.equal(_grantRole(), msg.sender) 
  }) 

  it("Grant Minter Role to contact deployer", async => {
    let _grantRole = await MINTER_ROLE(msg.sender)
    assert.equal(_grantRole(), msg.sender)
  })

  it("Grant Batch Tansfer Role to contract deployer", async => {
  let _grantRole = await BATCH_TRANSFER_ROLE(msg.sender)
  assert.equal(_grantRole(), msg.sender)
  })
})


//Deploy Total Supply to contract address
//describe("WakandaToken", function () {
//  it("Should return the new greeting once it's changed", async function () {
//    const WakandaToken = await ethers.getContractFactory("WakandaToken");
  //  const greeter = await Greeter.deploy("Hello, world!");
    //await greeter.deployed();

    //expect(await greeter.greet()).to.equal("Hello, world!");

    //const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    //await setGreetingTx.wait();

    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  //});
//});


const [owner, Addr] = await ethers.getSigners();
await greeter.connect(Addr).setGreeting("Hallo, Erde!");

const { waffle } = require("hardhat");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");
const { TOKENARY } = require("web3modal/dist/providers/injected");
const { deployContract } = waffle;
const provider = waffle.provider;


//Owner must be able to grant roles 


//Contact should grant roles to provided accounts


//Contract should transfer tokens in a batch and should not exceed 200 transactions
descrribe("batchtransfer()", async () => {
  let result

  before(async () => {
    //batch transfer tokens before each example
    result = await wakandaToken.batchTransfer({from: msg.sender, value:ethers.utils.toMei('1', 'wakanKanadaToken')})
  })

  it("Allow Admin to instantly transfer wakanda tokens in batches", async () => {
    //Checks loyal Customers balance after batch transfers
    let loyalCustomerBalance = await token.balanceOf(loyalCustomer)
    assert.equal( loyalCustomerBalance.toString(), tokens("100*200"))

    //checks contracts balance after batch transfers
    let wakandaTokenBalance
    wakandaTokenBalance = await token.balanceOf(wakandaToken.address)
    assert.equal(wakandaTokenBalance.toString(), tokens("800,000"))
    wakandaTokenBalance = await ethers.eth.getBalance(wakandaToken.address)
    assert.equal(wakandaTokenBalance.toString(), ethers.utils.toMei("1"))


//Functions accessible to a given role can not be called by unassigned addresses


//Events must be present in the contract
    const event = result.logs[0].orgs
    assert.equal(event.address, loyalCustomer)
    assert.equal(event.address, account)
    assert.equal(event.amount,toString(), wakandaToken("100"),toString())
    assert.equal(event.rate.toString(), "100")
  })
})