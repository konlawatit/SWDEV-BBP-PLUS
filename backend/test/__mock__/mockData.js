const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  users: [
    {
      _id: new ObjectId( "620786ef536e65e5841220eb" ),
      user_name: "นายกลวัชร หัสไทรทอง",
      email: "62070007@it.kmitl.ac.th",
      access_token:
        "ya29.A0ARrdaM_GeX-X9aARj5Ncs7sOmkzqbY_8YMdg1YWTBK_4Vw8wo7i5rkMnrDATAwU9PMYXLrqHieClJxBjgWV8eEdEcBYoDa5a5iXMrH38STO7M-2kIgK5gam0es9BFG_4z5L_KbzZzgdeqJ-cqQp4CjRpxOwm",
      refresh_token:
        "1//0g7V65vCvvAiSCgYIARAAGBASNwF-L9IrvEFy3XNk0x7sE37LzkgNRMcBaWk5ZgxnhprZWDWOMggr0snG07TKP21K0NtWJWj3dGo",
      scope:
        "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/gmail.readonly",
      token_type: "Bearer",
      expiry_date: { $numberInt: "1644664062" },
      __v: { $numberInt: "0" },
    },
    {
      _id: new ObjectId( "6207ce53910dc4b21c583341" ),
      user_name: "นายทวีวัฒน์ ศรีเมฆ",
      email: "62070072@it.kmitl.ac.th",
      access_token:
        "ya29.A0ARrdaM8WRxf9pH_VWBP3ownBHK4U3UtTt4plLLgv5aBjUPojaWHJy73rnGkPqQNHvXdI-j680k7zCShoZYl0PMoce_9brOGkhp_VhtmMvqwiL1frPs2XOJglmS4akpz8UcZcv52OwhT2MP1QMw2OUI5pXaOx",
      refresh_token:
        "1//0dIXNMG-BLefdCgYIARAAGA0SNwF-L9IreLKgHGPIt39m-CoT4j7cayQb--6bRQS0jqebWQ4l8qudCkY-Qe0NdiGBaQMP0WFVv0I",
      scope:
        "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/gmail.readonly openid",
      token_type: "Bearer",
      expiry_date: { $numberInt: "1645360422" },
      __v: { $numberInt: "0" },
    },
  ],
  accountings: [
    {
      _id: new ObjectId( "620786ef536e65e5841220ed" ),
      user_email: "62070007@it.kmitl.ac.th",
      ac_list: [
        {
          title: "test1",
          date: null,
          amount: 200,
          type: "income",
          description: "none",
          _id: new ObjectId( "620788873df646d05325934d" ),
        },
        {
          title: "test2",
          date: null,
          amount: 200,
          type: "income",
          description: "none",
          _id: new ObjectId( "620789443df646d053259351" ),
        },
        {
          title: "test2",
          date: null,
          amount: 200,
          type: "income",
          description: "none",
          _id: new ObjectId( "6207c54145f6e7fcfa5a6d81" ),
        },
        {
          title: "test2",
          date: null,
          amount: 200,
          type: "income",
          description: "none",
          _id: new ObjectId( "6207cb9060b80046957b85d7" ),
        },
        {
          title: "test2",
          date: null,
          amount: 200,
          type: "income",
          description: "none",
          _id: new ObjectId( "6207d00bdc63c2f9c56b001e" ),
        },
        {
          title: "ค่าบ้าน",
          date: null,
          amount: 200,
          type: "expenses",
          description: "ค่าผ่อนบ้าน งวดที่ 3",
          _id: new ObjectId( "6207de31893b35f7663b0d45" ),
        },
        {
          title: "test2",
          date: null,
          amount: 200,
          type: "income",
          description: "none",
          _id: new ObjectId( "6207e0c89add39604c72482d" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: new Date(),
          amount: 200,
          type: "promptpay",
          description: "promptpay",
          _id: new ObjectId( "62080b7605bfd99951bcffba" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินสำเร็จ",
          date: new Date(),
          amount: 200,
          type: "transfer",
          description: "transfer",
          _id: new ObjectId( "62080b7605bfd99951bcffc3" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินสำเร็จ",
          date: new Date(),
          amount: 200,
          type: "transfer",
          description: "transfer",
          _id: new ObjectId( "62080bd4988dc6b42e090726" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: new Date(),
          amount: 200,
          type: "promptpay",
          description: "promptpay",
          _id: new ObjectId( "62080bd4988dc6b42e09071b" ),
        },
      ],
      __v: { $numberInt: "0" },
    },
    {
      _id: new ObjectId( "620921026cb32afed78bccea" ),
      user_email: "konlawatit@gmail.com",
      ac_list: [
        {
          title: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          date: { $date: { $numberLong: "18782008974000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          _id: new ObjectId( "620921d36cb32afed78bcd19" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          date: { $date: { $numberLong: "18782003172000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          _id: new ObjectId( "620921d36cb32afed78bcd1b" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18781914269000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d36cb32afed78bcd15" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782026077000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d36cb32afed78bcd1d" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18781939145000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d36cb32afed78bcd17" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินสำเร็จ",
          date: { $date: { $numberLong: "18781874772000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินสำเร็จ",
          _id: new ObjectId( "620921d36cb32afed78bcd13" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782090083000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d36cb32afed78bcd23" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการเติมเงินสำเร็จ",
          date: { $date: { $numberLong: "18782089193000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการเติมเงินสำเร็จ",
          _id: new ObjectId( "620921d36cb32afed78bcd21" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          date: { $date: { $numberLong: "18782088947000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          _id: new ObjectId( "620921d36cb32afed78bcd1f" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782102513000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd25" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          date: { $date: { $numberLong: "18782117348000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd27" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782115587000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd29" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782193225000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd2b" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          date: { $date: { $numberLong: "18782258329000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd2d" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          date: { $date: { $numberLong: "18782283941000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd2f" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782431517000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd33" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782374701000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd37" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782374154000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd35" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินสำเร็จ",
          date: { $date: { $numberLong: "18782349844000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินสำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd31" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          date: { $date: { $numberLong: "18782343226000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd39" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782458333000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd3d" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782451079000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd3b" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินสำเร็จ",
          date: { $date: { $numberLong: "18782541861000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินสำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd41" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782542215000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd43" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782459959000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd3f" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782603310000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd47" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          date: { $date: { $numberLong: "18782634966000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการโอนเงินพร้อมเพย์สำเร็จ",
          _id: new ObjectId( "620921d56cb32afed78bcd49" ),
        },
        {
          title: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          date: { $date: { $numberLong: "18782524221000" } },
          amount: 200,
          type: "expenses",
          description: "[กรุงไทย] แจ้งผลการชำระค่าสินค้าและบริการสำเร็จ",
          _id: new ObjectId( "620921d46cb32afed78bcd45" ),
        },
        {
          title: "เงินเดือน",
          date: { $date: { $numberLong: "1644765689930" } },
          amount: 200,
          type: "income",
          description: "เงินประจำเดือน",
          _id: new ObjectId( "6209224c6cb32afed78bcdbf" ),
        },
        {
          title: "เล่นเกม",
          date: { $date: { $numberLong: "1645368383824" } },
          amount: 200,
          type: "expenses",
          description: "1",
          _id: new ObjectId( "6212544d9a3e64b30ba6b08d" ),
        },
        {
          title: "23",
          date: { $date: { $numberLong: "1645368414772" } },
          amount: 200,
          type: "income",
          description: "4",
          _id: new ObjectId( "6212546e9a3e64b30ba6b0cd" ),
        },
        {
          title: "231",
          date: { $date: { $numberLong: "1645368414772" } },
          amount: 200,
          type: "income",
          description: "4",
          _id: new ObjectId( "621254a19a3e64b30ba6b12f" ),
        },
        {
          title: "test2",
          date: null,
          amount: 200,
          type: "expenses",
          description: "none",
          _id: new ObjectId( "621b50b909db281e328c7fab" ),
        },
        {
          title: "xfcvdcxvdfc",
          date: { $date: { $numberLong: "1646222022859" } },
          amount: 200,
          type: "expenses",
          description: "zxcvzxc",
          _id: new ObjectId( "621f5d2248626f0b4b33e96f" ),
        },
        {
          title: "test2",
          date: null,
          amount: 200,
          type: "expenses",
          description: "none",
          _id: new ObjectId( "621f609ab62cbcf7c5226fff" ),
        },
      ],
      __v: { $numberInt: "0" },
    },
  ],
};
