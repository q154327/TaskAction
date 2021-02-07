

//独立COOKIE文件     ck在``里面填写，多账号换行
let iboxpayheaderVal= `{"Accept": "*/*","Accept-Encoding": "br, gzip, deflate","Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9","Connection": "keep-alive","Content-Type": "application/json; charset=utf-8","Host": "veishop.iboxpay.com","User-Agent": "VeiShop, 1.4.6 (iOS, 12.4.8, zh_CN, Apple, iPhone, D3A3C072-BCB1-450E-B631-17CB87F56D48)","X-User-Agent": "VeiShop, 1.4.6 (iOS, 12.4.8, zh_CN, Apple, iPhone, D3A3C072-BCB1-450E-B631-17CB87F56D48)","mchtNo": "100529600058887","shopkeeperId": "1148855820752977920","source": "VEISHOP_APP_IOS","token": "2c4afe2c05c641ceb8bad4f21e4a00f5","traceid": "313583112111364505601612682273970000000000000","version": "1.4.6",}`
let refreshtokenVal= `bda3a0b9ef5841eebd9bf3c5c6bd16a6`


let iboxpaycookie = {
  iboxpayheaderVal: iboxpayheaderVal,  
  refreshtokenVal: refreshtokenVal,  
  
}

module.exports =  iboxpaycookie
  


