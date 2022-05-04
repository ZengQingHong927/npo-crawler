const   puppeteer                       = require ('puppeteer');
const   xlsx                            = require ('xlsx');
// const { sleepP }                        = require ('./sleepP');
const { errorParsePageHandler }         = require ('./parsePage');
const { dataInfosToXlsx }               = require ('./datatProcess');


async function start () {

        const   browserCfg      = {
                executablePath:         '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                headless:               true,
                // args: [
                //         '--window-size=1920,1080',
                // ],
        };

        console.time('-----------------npoinfos crawlering-----------------');

        // * 使用自訂的 Chrome
        // const   browser         = await puppeteer.launch (browserCfg);
        // const   totalDataInfos  = [];
        // let     nid             = 1000;

        // while (nid >= 0) {
        //         console.log (`- nid:: ${nid}`);
        //         const   page    = await browser.newPage ();                             // * 開啟新分頁

        //         const   url     = `https://www.igiving.org.tw/npo/introduce?n_id=${nid}`;
        //         const   res     = await errorParsePageHandler (page, url, nid);
                
        //         nid             = nid-1;

        //         await page.close ();
        //         const { status,
        //                 item }  = res;
                        
        //         if (status !== 100) {
        //                 continue;
        //         }


        //         // console.log (`- datainfos::${JSON.stringify (item, null, 4)}`);
        //         totalDataInfos.push (item);
        // }

        // if (totalDataInfos.length > 0) {
        //         await dataInfosToXlsx (totalDataInfos);
        // }

        // await page.screenshot ({ path: 'example.png' });                                // * 截圖，並且儲存在...

        // await browser.close ();

        console.timeEnd('-----------------npoinfos crawlering-----------------');

        process.on ('SIGINT', closeServer);
        process.on ('SIGQUIT', closeServer);
        process.on ('SIGTERM', closeServer);
}

async function closeServer () {
        process.exit (0);
}

start ()