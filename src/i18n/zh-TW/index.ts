export default {
  confirm: '確認',
  cancel: '取消',
  change: '更改',
  copy: '複製',
  max: '最大',
  forget: 'Forget',
  close: '關閉',
  subscan: 'Subscan',
  common: {
    updateMetadata: '更新Metadata',
    metadataAlreadyInstalled: '已建立Metadata',
    lightMode: '淺色模式',
    darkMode: '夜間模式',
    dApps: 'dApps',
    store: 'Store',
    plasmLockdrop: 'Plasm 鎖倉空投',
    closeSidebar: '關閉側邊欄',
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    github: 'GitHub',
    docs: 'Documentation',
  },
  balance: {
    totalBalance: '總餘額',
    balance: '餘額',
    transfer: '轉賬',
    transferable: '可使用餘額',
    modals: {
      connectMetamask: '鏈接 Ethereum Wallet',
      ethereumExtension: 'Ethereum Extension',
      chooseAccount: '選擇賬戶',
      chooseNetwork: '選擇網路',
      switch: '更改',
      sigExtrinsicBlocked: 'Custom sig extrinsic calls has been temporarily blocked',
      transferToken: '發送 {token}',
      transferableBalance: '{token} 可使用餘額',
      sendFrom: '發自',
      sendTo: '發送到',
      alert: 'Alert',
      invalidAddress: '錢包地址有誤',
    },
  },
  contracts: {
    codeHashes: 'Code hashes',
    codeHash: 'Code hash',
    msgs: 'Messages',
    copyAbi: '複製 ABI',
    contracts: 'Contracts',
    createYourDapp: '創建您的dApp',
    addExistingCodeHash: '添加已存在的code hash',
    modals: {
      createYourDapps: '創建您的dApps ({step} / 2)',
      deploymentAccount: 'Deployment Account',
      projectName: '計劃名',
      nextStep: '下一步',
      previousStep: '上一步',
      instantiationConstructor: 'Instantiation Constructor',
      upload: '上傳',
      contractFile: 'Contract file',
      file: '文件: {name}',
      uploadFile: '上傳文件',
      dropFile: 'Drop the files here ...',
      orDrag: 'or drag and drop',
      callContract: 'Call a Contract',
      contractToUse: 'Contract to use:',
      callFromAccount: 'Call from account',
      msgToSend: 'Message to send',
      outcome: 'Outcome',
      read: 'Read',
      execute: 'Execute',
      codeBundleName: 'Code bundle name',
      contractAbi: 'Contract ABI',
      save: '保存',
      removal: 'removal',
      removeCode: {
        first:
          'You are about to remove this code from your list of available code hashes. Once completed, should you need to access it again, you will have to manually add the code hash again.',
        second:
          'This operation does not remove the uploaded code WASM and ABI from the chain, nor any deployed contracts. The forget operation only limits your access to the code on this browser.',
      },
      removeContract: {
        first:
          "You are about to remove this contract from your list of available contracts. Once completed, should you need to access it again, you will have to manually add the contract's address in the Instantiate tab.",
        second:
          'This operation does not remove the history of the contract from the chain, nor any associated funds from its account. The forget operation only limits your access to the contract on his browser.',
      },
      fees: {
        feesOf: 'Fees of',
        appliedToSubmission: 'will be applied to the submission',
      },
    },
  },
  dappStaking: {
    dappsStore: 'dApps Store',
    registerDapp: '註冊dApp',
    noDappsRegistered: 'No dApps registered. Be the first to register one.',
    availableToStake: 'Available to stake',
    totalStake: '總質押:',
    yourStake: '您的質押: ',
    add: 'Add',
    unstake: '解除質押',
    stake: '質押',
    claim: '認領',
    warning: 'Minimum Staking Amount is {amount} and Up to {stakers} Stakers Per Contract',
    tvl: 'TVL IN DAPPS',
    dappsCount: 'DAPPS COUNT',
    requirement: 'REQUIREMENT',
    modals: {
      alreadyClaimed: '已認領:',
      contractRewards: '合約報酬:',
      yourRewards: '您的報酬',
      contractAddress: '合約地址 {address}',
      logo: 'Logo',
      register: '註冊',
      address: '地址',
    },
  },
};
