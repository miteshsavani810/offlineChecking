import { ClientFunction } from 'testcafe';

fixture `Offline fixture` // Add back quote
.page('C:\\Users\\mitesh.savani\\Office\\Github\\ZimbraX\\zm-x-web\\tests\\testcafe\\combineReport\\test.html');

let goOnlineOfflineToggle = ClientFunction(() => {
window.onlineOfflineToggle();
});

test.only("Offline Checking", async t => {
//await t.eval(() => location.reload(true));
await goOnlineOfflineToggle(); // or remove this step and disconnect internet at this step
await t.wait(4000);
await t.debug();
});