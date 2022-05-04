

async function errorParsePageHandler (page, url, nid) {
        try {
                page.on ('dialog', async (dialog) => {
                        // console.log (dialog.message ());
                        await dialog.accept ();
                });

                await page.goto (url);          // * 進入指定頁面
        
                const   titleDOM        = await page.$eval ('#n_name', element => element.textContent);
                const   numDOM          = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(1) > span.text_look', element => element.textContent)
                const   cateDOM         = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)', element => element.textContent);
                const   cityDOM         = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2)', element => element.textContent);
                const   phoneDOM        = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2)', element => element.textContent);
                const   nameDOM         = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(2)', element => element.textContent);
                const   addressDOM      = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(2)', element => element.textContent);
                const   websiteDOM      = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(7) > td:nth-child(2)', element => element.textContent);
                const   emailDOM        = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(8) > td:nth-child(2)', element => element.textContent);
                
                const   datainfo        = [nid, titleDOM, numDOM, cateDOM, nameDOM, phoneDOM, emailDOM, '', websiteDOM, cityDOM, addressDOM, ''];
        
                return {
                        status:         100,
                        item:           datainfo,
                }
        }
        catch (e) {

                console.log ('- error happened');
                return {
                        status:                 510,
                        item: {
                                message:        'page not found with assigned n_id'
                        }
                }
        }
}


module.exports = {
        errorParsePageHandler,
}