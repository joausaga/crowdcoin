import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xBd46A75f1b413f3E60d1526BbebdB73Fd6689514'
);

export default instance;