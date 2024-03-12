const connectContract = async () => {
  let account;
  if (window.ethereum !== "undefined") {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    account = accounts[0];
    // document.getElementById("accountArea").innerHTML=account;
  }
  //2.Connect to Contract
  const ABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_copID",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "uID",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "_pH",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_temp",
          type: "uint256",
        },
      ],
      name: "auditdetails",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "upc",
          type: "bytes32",
        },
      ],
      name: "Audited",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "upc",
          type: "bytes32",
        },
      ],
      name: "Bought",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "upc",
          type: "bytes32",
        },
      ],
      name: "Collected",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_unum",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_milkmanID",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_pH",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_temp",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_cattledetails",
          type: "string",
        },
        {
          internalType: "string",
          name: "_originlocat",
          type: "string",
        },
      ],
      name: "collectMilk",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_milkID",
          type: "bytes32",
        },
        {
          internalType: "address payable",
          name: "_receiver",
          type: "address",
        },
      ],
      name: "paytoCop",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_milkID",
          type: "bytes32",
        },
        {
          internalType: "address payable",
          name: "_receiver",
          type: "address",
        },
      ],
      name: "paytoMilkman",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_milkID",
          type: "bytes32",
        },
        {
          internalType: "address payable",
          name: "_receiver",
          type: "address",
        },
      ],
      name: "paytoretailer",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "unumber",
          type: "uint256",
        },
      ],
      name: "putUniquemilkID",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "unum",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_copID",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_pH",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_temp",
          type: "uint256",
        },
      ],
      name: "recorddetails",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "upc",
          type: "bytes32",
        },
      ],
      name: "Recorded",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_copName",
          type: "string",
        },
        {
          internalType: "address",
          name: "_copID",
          type: "address",
        },
      ],
      name: "registercop",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_custName",
          type: "string",
        },
        {
          internalType: "address",
          name: "_cusID",
          type: "address",
        },
      ],
      name: "registercustomer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_milkmanName",
          type: "string",
        },
        {
          internalType: "address",
          name: "_milkmanID",
          type: "address",
        },
      ],
      name: "registerMilkman",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_retailerName",
          type: "string",
        },
        {
          internalType: "address",
          name: "_retailerID",
          type: "address",
        },
      ],
      name: "registerretailer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "upc",
          type: "bytes32",
        },
      ],
      name: "Retailed",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "uID",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_retailerID",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_pH",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_temp",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
      ],
      name: "retailerDetails",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "bal",
          type: "address",
        },
      ],
      name: "getBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "uID",
          type: "bytes32",
        },
      ],
      name: "getMilkDetails",
      outputs: [
        {
          internalType: "string",
          name: "_originlocation",
          type: "string",
        },
        {
          internalType: "string",
          name: "_cattledetails",
          type: "string",
        },
        {
          internalType: "uint256[4]",
          name: "pH",
          type: "uint256[4]",
        },
        {
          internalType: "uint256[4]",
          name: "temp",
          type: "uint256[4]",
        },
        {
          internalType: "uint256[3]",
          name: "",
          type: "uint256[3]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_milkman",
          type: "address",
        },
      ],
      name: "getMilkmandetails",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_retailer",
          type: "address",
        },
      ],
      name: "getretailerdetails",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "uID",
          type: "bytes32",
        },
      ],
      name: "getSupplychaindetails",
      outputs: [
        {
          internalType: "address",
          name: "_milkmanID",
          type: "address",
        },
        {
          internalType: "string",
          name: "_milkmanName",
          type: "string",
        },
        {
          internalType: "address",
          name: "_copID",
          type: "address",
        },
        {
          internalType: "string",
          name: "_copName",
          type: "string",
        },
        {
          internalType: "address",
          name: "_retailerID",
          type: "address",
        },
        {
          internalType: "string",
          name: "_retailerName",
          type: "string",
        },
        {
          internalType: "string",
          name: "state",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "unumber",
          type: "uint256",
        },
      ],
      name: "getUniquemilkID",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const address = "0x9b7D933Cc7dC14D3550De8848B73Fe430906Af42";
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(ABI, address);

  document.getElementById("ContractArea").innerHTML = account;
};

const registerUser = async () => {
  const name = document.getElementById("first").value;
  const useraddress = document.getElementById("last").value;
  switch (document.getElementById("User").value) {
    case "milkman": {
      document.getElementById("submitdetails").innerHTML = "DetailsSubmitted";
      await window.contract.methods
        .registerMilkman(name, useraddress)
        .send({ from: useraddress, gas: 4000000 });
      break;
    }
    case "coop": {
      document.getElementById("submitdetails").innerHTML = "DetailsSubmitted";
      await window.contract.methods
        .registercop(name, useraddress)
        .send({ from: useraddress, gas: 4000000 });
      break;
    }
    case "retail": {
      document.getElementById("submitdetails").innerHTML = "DetailsSubmitted";
      await window.contract.methods
        .registerretailer(name, useraddress)
        .send({ from: useraddress, gas: 4000000 });
      break;
    }
  }
};

const readContract = async () => {
  const uadd = document.getElementById("getAddress").value;
  let data;
  switch (document.getElementById("User").value) {
    case "milkman": {
      data = await window.contract.methods.getMilkmandetails(uadd).call();
      document.getElementById("dataArea").innerHTML = data;
      break;
    }
    case "coop": {
      //data = await window.contract.methods.getCopdetails(uadd).call();

      document.getElementById("dataArea").innerHTML = "hi";
      break;
    }
    case "retail": {
      data = await window.contract.methods.getretailerdetails(uadd).call();
      document.getElementById("dataArea").innerHTML = data;
      break;
    }
  }
};
