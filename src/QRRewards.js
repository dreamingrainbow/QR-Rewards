var NodeRSA = require('node-rsa');
var qrCode = require('qrcode-npm');
var fileDownload = require('js-file-download');

class QR_Rewards {
    constructor() {
        this.key = new NodeRSA();
    }

    generateKeyPair() {
        this.key.generateKeyPair(512);
        return this;
    }

    setPublicKey(key) {
        const key_1 = new NodeRSA();
        key_1.importKey(key, 'pkcs8-public-pem');
        if(key_1.isPublic()) {
            this.key = key_1;
        }
        return this;
    }

    exportKey(isPublic  = true ) {
        return isPublic ? this.key.exportKey('pkcs8-public-pem').split('\n') : this.key.exportKey('pkcs8-private-pem').split('\n');
    }

    generateQRCode(isPublic = true) {
        if(isPublic) return this.exportKey(isPublic);
    }

    generateQRImage(isPublic = true ) {
        var qr = qrCode.qrcode(8, 'M');
        let keyCode = this.generateQRCode(isPublic);
        keyCode.shift();
        keyCode.pop();
        const str = keyCode.join('');
        qr.addData(str);
        qr.make();
        const imageQR = qr.createImgTag(2);
        return imageQR;
    }

    extractBase64(isPublic = true) {
        const imageQR = this.generateQRImage(isPublic);
        let imgHtml = imageQR.split('/>');
        let base = imgHtml[0];
        let qrImgBase64 = null;
        base = base.split(' ').reduce((s, v) => {
            if(v !== undefined){
              if(qrImgBase64 === null) {
                let params = v.split('=');
                if(params[0] === 'src') {
                    return params[1].substr(1,params[1].length - 2); 
                }
              }else{
                return s;
              }
            }
            return s;
        });
        qrImgBase64 = base;
        return qrImgBase64;
    }

    downloadTag(isPublic = true) {
        const qrImgBase64 = this.extractBase64(isPublic);
        const ext = qrImgBase64.split(';')[0].match(/jpeg|png|gif/)[0];
        // strip off the data: url prefix to get just the base64-encoded bytes
        const data = qrImgBase64.replace(/^data:image\/\w+;base64,/, "");
        const buf = new Buffer(data, 'base64');
        fileDownload(buf, 'image.' + ext);
    }
}

export default QR_Rewards;
