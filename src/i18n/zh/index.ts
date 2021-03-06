export default {
  confirm: '确认',
  cancel: '取消',
  change: '更改',
  copy: '複製',
  max: '最大',
  forget: 'Forget',
  close: '关闭',
  subscan: 'Subscan',
  common: {
    updateMetadata: '更新Metadata',
    metadataAlreadyInstalled: '已建立Metadata',
    lightMode: '浅色模式',
    darkMode: '夜间模式',
    dApps: 'dApps',
    store: 'Store',
    plasmLockdrop: 'Plasm 锁仓空投',
    closeSidebar: '关闭侧边栏',
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    github: 'GitHub',
    docs: 'Documentation',
  },
  balance: {
    totalBalance: '总余额',
    balance: '余额',
    transfer: '转账',
    transferable: '可使用余额',
    modals: {
      connectMetamask: '链接 Ethereum Wallet',
      ethereumExtension: 'Ethereum Extension',
      chooseAccount: '选择账户',
      chooseNetwork: '选择网路',
      switch: '更改',
      sigExtrinsicBlocked: 'Custom sig extrinsic calls has been temporarily blocked',
      transferToken: '发送 {token}',
      transferableBalance: '{token} 可使用余额',
      sendFrom: '发自',
      sendTo: '发送到',
      alert: 'Alert',
      invalidAddress: '钱包地址有误',
    },
  },
  contracts: {
    codeHashes: 'Code hashes',
    codeHash: 'Code hash',
    msgs: 'Messages',
    copyAbi: '複製 ABI',
    contracts: 'Contracts',
    createYourDapp: '创建您的dApp',
    addExistingCodeHash: '添加已存在的code hash',
    modals: {
      createYourDapps: '创建您的dApps ({step} / 2)',
      deploymentAccount: 'Deployment Account',
      projectName: '计划名',
      nextStep: '下一步',
      previousStep: '上一步',
      instantiationConstructor: 'Instantiation Constructor',
      upload: '上传',
      contractFile: 'Contract file',
      file: '文件: {name}',
      uploadFile: '上传文件',
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
    registerDapp: '注册dApp',
    noDappsRegistered: 'No dApps registered. Be the first to register one.',
    totalStake: '总质押:',
    availableToStake: 'Available to stake',
    yourStake: '您的质押: ',
    add: 'Add',
    unstake: '解除质押',
    stake: '质押',
    claim: '认领',
    warning: 'Minimum Staking Amount is {amount} and Up to {stakers} Stakers Per Contract',
    tvl: 'TVL IN DAPPS',
    dappsCount: 'DAPPS COUNT',
    requirement: 'REQUIREMENT',
    modals: {
      alreadyClaimed: '已认领:',
      contractRewards: '合约报酬:',
      yourRewards: '您的报酬',
      contractAddress: '合约地址 {address}',
      logo: 'Logo',
      register: '注册',
      address: '地址',
    },
  },
};
