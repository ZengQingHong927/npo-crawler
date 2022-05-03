const   puppeteer               = require ('puppeteer');

const   N_IDs                   = [56, 937]

(async () => {

        const   browserCfg      = {
                executablePath:         '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                headless:               false,
                // args: [
                //         '--window-size=1920,1080',
                // ],
        };

        // * 使用自訂的 Chrome
        const   browser         = await puppeteer.launch (browserCfg);
        const   page            = await browser.newPage ();                             // * 開啟新分頁
        await page.goto ('https://www.igiving.org.tw/npo/introduce?n_id=288');          // * 進入指定頁面
        
        const   titleDOM        = await page.$eval ('#n_name', element => element.textContent);
        const   numDOM          = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(1) > span.text_look', element => element.textContent)
        const   cateDOM         = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)', element => element.textContent);
        const   cityDOM         = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2)', element => element.textContent);
        const   phoneDOM        = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2)', element => element.textContent);
        const   nameDOM         = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(2)', element => element.textContent);
        const   addressDOM      = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(2)', element => element.textContent);
        const   websiteDOM      = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(7) > td:nth-child(2)', element => element.textContent);
        const   emailDOM        = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(8) > td:nth-child(2)', element => element.textContent);
        
        
        
        console.log (`- titleDOM::${titleDOM}`)
        console.log (`- numDOM::${numDOM}`)
        console.log (`- cateDOM::${cateDOM}`)
        console.log (`- cityDOM::${cityDOM}`)
        console.log (`- phoneDOM::${phoneDOM}`)
        console.log (`- nameDOM::${nameDOM}`)
        console.log (`- addressDOM::${addressDOM}`)
        console.log (`- websiteDOM::${websiteDOM}`)
        console.log (`- emailDOM::${emailDOM}`)
        
        // await page.screenshot ({ path: 'example.png' });                                // * 截圖，並且儲存在...

        // await browser.close ();
})();