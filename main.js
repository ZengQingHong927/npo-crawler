const   puppeteer               = require ('puppeteer');
const   xlsx                    = require('xlsx');

const   N_IDs                   = [
        12, 51, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        72, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
        112, 113, 114, 115, 116, 117, 118, 119, 121, 122, 123, 125, 126, 127, 128, 129,
        130, 131, 132, 133, 134, 138, 139, 140, 141, 142, 144, 145, 146, 147, 148, 149,
        151, 152, 153, 154, 155, 156, 157, 158, 160, 161, 162, 163, 164, 165, 166, 167,
        168, 169, 171, 174, 175, 176, 177, 179, 181, 183, 184, 185, 186, 187, 188, 189,
        190, 191, 193, 196, 197, 198, 199, 200,
]
// 937
// function errorHandler () {
//         try {

//         }
//         catch (e) {

//         }
// }

async function start () {

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
        
        page.on ('dialog', async (dialog) => {
                console.log (dialog.message ());
                await dialog.accept ();
                page.close ()
        });

        const   totalDataInfos  = [];
        let     idx             = 2;

        while (idx > 0) {
                console.log (idx)
                await page.goto (`https://www.igiving.org.tw/npo/introduce?n_id=${60+idx}`);          // * 進入指定頁面
        
                const   titleDOM        = await page.$eval ('#n_name', element => element.textContent);
                const   numDOM          = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(1) > span.text_look', element => element.textContent)
                const   cateDOM         = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2)', element => element.textContent);
                const   cityDOM         = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2)', element => element.textContent);
                const   phoneDOM        = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(4) > td:nth-child(2)', element => element.textContent);
                const   nameDOM         = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(2)', element => element.textContent);
                const   addressDOM      = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(2)', element => element.textContent);
                const   websiteDOM      = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(7) > td:nth-child(2)', element => element.textContent);
                const   emailDOM        = await page.$eval ('body > div:nth-child(3) > div > div > div:nth-child(5) > div > div.row.mt2.test_block > div.col-md-4.col-sm-4.col-xs-12 > div > div:nth-child(2) > table > tbody > tr:nth-child(8) > td:nth-child(2)', element => element.textContent);
                
                const   datainfo        = [titleDOM, numDOM, cateDOM, nameDOM, phoneDOM, emailDOM, '', websiteDOM, cityDOM, addressDOM, ''];
                idx--;
                
                totalDataInfos.push (datainfo);
        }

        console.log (JSON.stringify (totalDataInfos, null, 4));
        // dataInfosToXlsx (datainfo);
        // console.log (`- titleDOM::${titleDOM}`)
        // console.log (`- numDOM::${numDOM}`)
        // console.log (`- cateDOM::${cateDOM}`)
        // console.log (`- cityDOM::${cityDOM}`)
        // console.log (`- phoneDOM::${phoneDOM}`)
        // console.log (`- nameDOM::${nameDOM}`)
        // console.log (`- addressDOM::${addressDOM}`)
        // console.log (`- websiteDOM::${websiteDOM}`)
        // console.log (`- emailDOM::${emailDOM}`)
        
        // await page.screenshot ({ path: 'example.png' });                                // * 截圖，並且儲存在...

        // await browser.close ();

        // process.on ('SIGINT', closeServer);
        // process.on ('SIGQUIT', closeServer);
        // process.on ('SIGTERM', closeServer);
}

async function dataInfosToXlsx (datainfo) {
        const arrayData = [
                // ['機構名稱', '字號', '類別', '聯絡人', '聯絡電話', 'Email', 'Geolocation', 'Website', '地區', '地址', '服務內容'],
                // ['台灣鬱金香動作障礙關懷協會', '96.09台內社字第0960138590號', '身心障礙', '楊小姐', '03-8576526','twtulipmov@gmail.com', '', 'http://www.twtulipmov.com.tw/', '花蓮縣', '花蓮縣花蓮市中央路三段707號', "協會成立之由來: 台灣鬱金香動作障礙關懷協會於2007年成立契機為創會理事長 陳新源醫師參加第一屆由世界衛生組織舉辦的世界巴金森大會(World Parkinson Congress)有感於除了提供病友醫療照顧，更應致力於病友在生活、工作、和精神上的關懷與資源協助。協會成立之宗旨：讓病友重拾信心，在人生的最低潮重新出發，自助助人，是我們努力的主軸與方向。永續經營、薪火相傳是我們的理想與目標。期許更多人參與會務，為動作障礙病友盡一分心力。提供病友完善之醫療照顧、解除病痛。擴展病友之生活圈、走入人群。協助病友繼續或直接創作之能力。生活或工作上能再展歡顏。協會活動多元化：病友會-邀請病友互相交流與分享生活心得，除了擴展病友生活圈，也使更多人瞭解動作障礙之需要和協助座談會-相關保健新知講座，不定期邀請專業醫療人員演講募款活動-募集協會活動主要經費，使協會為動作障礙患者提供更多的資源與服務藝文活動-舉辦協會會員之藝文創作展覽巴金森日紀念活動-每年於4月11日巴金森日前後，舉辦紀念活動，藉以向大眾推廣及宣傳動作障礙之認識和關懷"]
        ];

        arrayData.push (datainfo)

        let arrayWorkSheet = xlsx.utils.aoa_to_sheet(arrayData);
        // * 構造workBook
        let workBook = {
                SheetNames: ['arrayWorkSheet', 'jsonWorkSheet'],
                Sheets: {
                        'arrayWorkSheet': arrayWorkSheet,
                }
        };
        // * 將workBook寫入檔案
        xlsx.writeFile(workBook, "./npoinfos.xlsx");
}


async function closeServer () {
        process.exit (0);
}

start ()
// dataInfosToXlsx ()