const   xlsx                            = require ('xlsx');


async function dataInfosToXlsx (datainfo) {
        let     arrayData       = [
                ['NID', '機構名稱', '字號', '類別', '聯絡人', '聯絡電話', 'Email', 'Geolocation', 'Website', '地區', '地址', '服務內容', '總數'],
        ];

        console.log (`- dataInfosToXlsx::${datainfo.length}`);

        arrayData               = [...arrayData, ...datainfo];
        let arrayWorkSheet      = xlsx.utils.aoa_to_sheet(arrayData);
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


module.exports = {
        dataInfosToXlsx,
}